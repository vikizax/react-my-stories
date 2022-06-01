import * as React from "react";
import { useEffect, useRef } from "react";
import StoryRenderer from "../../container/StoryRenderer";
import { StoryModel } from "../../model/story.model";
import { StoryBody, StoryControlsOverlay, StoryControls } from "./styles";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import storyAtom from "../../recoil/atoms/story.atom";
import timerAtom from "../../recoil/atoms/timer.atoms";
import { storiesSelector } from "../../recoil/selectors/story.selector";
import statusAtom from "../../recoil/atoms/status.atom";
import Progress from "../../container/Progress";
import { DEFAULT_INTERVAL } from "../../constant";
import Close from "../../component/Close";

const Stories = (props: StoryModel) => {
  const setStory = useSetRecoilState(storyAtom);
  const stories = useRecoilValue(storiesSelector);
  const setTimer = useSetRecoilState(timerAtom);
  const [status, setStatus] = useRecoilState(statusAtom);
  const pauseRef = useRef<any>(null);
  const initialise = async () => {
    setStory(props);
    setStatus((prev) => ({
      ...prev,
      total: props.stories.length ?? 0,
      fps: props.refreshRate ?? prev.fps,
    }));
    setTimer((prev) => ({
      ...prev,
      timeTracker: 0,
      interval: props.interval ?? DEFAULT_INTERVAL,
    }));
  };

  useEffect(() => {
    initialise();
  }, [props]);

  const debouncePause = (e: React.MouseEvent | React.TouchEvent) => {
    pauseRef.current = setTimeout(() => {
      setStatus((prev) => ({ ...prev, isPaused: true, status: "paused" }));
    }, 200);
  };

  const handleLeft = () => {
    if (status.currentIndex > 0) {
      setTimer((prev) => ({
        interval:
          stories[status.currentIndex - 1].type === "img"
            ? props.interval ?? DEFAULT_INTERVAL
            : prev.interval,
        timeTracker: 0,
      }));
      setStatus((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex - 1,
        isLoading: true,
        isMounted: false,
      }));
    } else {
      // start of the stories, get previous stories / call previous callback
      !status.isLoading && props.previousCallback?.();
    }
  };

  const handleRight = () => {
    if (status.currentIndex < status.total - 1) {
      setTimer((prev) => ({
        interval:
          stories[status.currentIndex + 1].type === "img"
            ? props.interval ?? DEFAULT_INTERVAL
            : prev.interval,
        timeTracker: 0,
      }));
      setStatus((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        isLoading: true,
        isMounted: false,
      }));
    } else {
      // end of the stories, get new stories / call next callback

      !status.isLoading && props.nextCallback?.();
    }
  };

  const mouseUp =
    (type: "next" | "previous") => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      pauseRef.current && clearTimeout(pauseRef.current);
      if (status.status === "paused") {
        setStatus((prev) => ({ ...prev, status: "playing" }));
      } else {
        type === "next" && handleRight();
        type === "previous" && handleLeft();
      }
    };

  return (
    <StoryBody style={props.storyBodyStyle}>
      <Close closeCallback={props.closeCallback} />
      <Progress
        nextCallback={props.nextCallback}
        interval={props.interval ?? DEFAULT_INTERVAL}
      />
      <StoryRenderer
        displayLoader={props.displayLoader}
        headingStyle={props.headingStyle}
        bottomContainerStyle={props.bottomContainerStyle}
        bottomTextStyle={props.bottomTextStyle}
      />
      <StoryControlsOverlay>
        <StoryControls
          onMouseDown={debouncePause}
          onMouseUp={mouseUp("previous")}
          onTouchStart={debouncePause}
          onTouchEnd={mouseUp("previous")}
        />
        <StoryControls
          onMouseDown={debouncePause}
          onMouseUp={mouseUp("next")}
          onTouchStart={debouncePause}
          onTouchEnd={mouseUp("next")}
        />
      </StoryControlsOverlay>
    </StoryBody>
  );
};

export default Stories;
