import * as React from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import statusAtom from "../../recoil/atoms/status.atom";
import timerAtom from "../../recoil/atoms/timer.atoms";
import { Video as VideoSC, VideoContainer } from "./styles";
import Loader from "../Loader";
import { useEffect, useRef, useState } from "react";

export interface IVideoProps {
  vidUrl: string;
  videoContainerStyle?: React.CSSProperties;
  videoStyle?: React.CSSProperties;
}

const Video = ({ vidUrl, videoStyle, videoContainerStyle }: IVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [timer, setTimer] = useRecoilState(timerAtom);
  const [muted, setMuted] = useState<boolean>(true);
  const [playing, setPlaying] = useState<boolean>(false);
  const handleVideoLoad = (status: boolean, duration?: number) => {
    // setMuted(false);
    setStatus((prev) => ({
      ...prev,
      isLoading: status,
      isMounted: true,
    }));
    setTimer((prev) => ({
      ...prev,
      interval: duration ? duration * 1000 : prev.interval,
    }));
  };

  useEffect(() => {
    let playPromise: Promise<void>;
    if (vidUrl && videoRef.current && status.status === "playing") {
      setTimer((prev) => ({
        ...prev,
        interval: videoRef.current?.duration
          ? videoRef.current?.duration * 1000
          : prev.interval,
      }));
      if (timer.timeTracker === 0) videoRef.current.currentTime = 0;
      if (!playing) {
        playPromise = videoRef.current.play();
        setPlaying(true);
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {
              setMuted(false);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    }

    if (videoRef.current && status.status === "paused") {
      setPlaying(false);
      videoRef.current!.pause();
    }
  }, [status, videoRef]);

  return (
    <>
      {status.isLoading && <Loader />}
      <VideoContainer style={videoContainerStyle}>
        <VideoSC
          ref={videoRef}
          src={vidUrl}
          autoPlay={true}
          // controls={false}
          playsInline={true}
          webkit-playsInline="true"
          onLoadStart={() => handleVideoLoad(true)}
          onLoadedData={(e) => {
            // @ts-ignore
            handleVideoLoad(false, e.target.duration);
          }}
          style={videoStyle}
          muted={muted}
        />
      </VideoContainer>
    </>
  );
};

export default memo(Video);
