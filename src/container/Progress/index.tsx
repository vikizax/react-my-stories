import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import statusAtom from "../../recoil/atoms/status.atom";
import timerAtom from "../../recoil/atoms/timer.atoms";
import { storiesSelector } from "../../recoil/selectors/story.selector";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ProgressContainer,
  ProgressItem,
  ProgressWrapperContainer,
} from "./styles";
import { DEFAULT_INTERVAL } from "../../constant";

interface IProgressProps {
  nextCallback?: (...args: any[]) => void;
  previousCallback?: (...args: any[]) => void;
}

const Progress = ({ nextCallback, previousCallback }: IProgressProps) => {
  const story = useRecoilValue(storiesSelector);
  const [status, setStatus] = useRecoilState(statusAtom);
  const [timer, setTimer] = useRecoilState(timerAtom);
  const [currentIndexTracker, setCurrentIndexTracker] = useState<number>(
    status.currentIndex
  );
  const [startTime, setStartTime] = useState<number>();
  let animationFrameId = useRef<number>();
  let currentTimer = timer.timeTracker;

  const handleStoryAutoPlay = () => {
    // if the story current index is less then the total, go to next story
    if (status.currentIndex < status.total - 1) {
      const idx = currentIndexTracker;
      setStatus((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        isLoading: true,
        isMounted: false,
      }));
      setTimer((prev) => ({
        interval:
          story[idx + 1].type === "img" ? DEFAULT_INTERVAL : prev.interval,
        timeTracker: 0,
      }));
    } else {
      // end of the stories, get new stories / call next callback
      nextCallback?.();
    }
  };

  const handleTimeTracker = (timeStamp: number) => {
    // keep the start time
    if (!startTime) {
      setStartTime(timeStamp);
    }

    // calculate the time difference between start and now
    setTimer((prev) => {
      currentTimer = prev.timeTracker + 100 / ((prev.interval / 1000) * 60);
      return {
        ...prev,
        timeTracker: prev.timeTracker + 100 / ((prev.interval / 1000) * 60),
      };
    });

    // if the animation reaches 100%, stop the timer
    if (currentTimer < 100) {
      animationFrameId.current = requestAnimationFrame(handleTimeTracker);
    } else {
      cancelAnimationFrame(animationFrameId.current!);
      handleStoryAutoPlay();
    }
  };

  useEffect(() => {
    if (status.status === "paused") {
      animationFrameId.current &&
        cancelAnimationFrame(animationFrameId.current);
      return;
    }

    if (status.isMounted && !status.isLoading) {
      setCurrentIndexTracker(status.currentIndex);
      animationFrameId.current = requestAnimationFrame(handleTimeTracker);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [status]);

  return (
    <ProgressContainer>
      {story.map((_, index) => (
        <ProgressWrapperContainer
          style={{
            width: `${100 / story.length}%`,
          }}
          key={`progress-wrapper-${index}`}
        >
          <ProgressItem
            //@ts-ignore
            scale={
              index === status.currentIndex
                ? timer.timeTracker
                : index < status.currentIndex
                ? 100
                : 0
            }
            key={`progress-${index}`}
          />
        </ProgressWrapperContainer>
      ))}
    </ProgressContainer>
  );
};

export default Progress;
