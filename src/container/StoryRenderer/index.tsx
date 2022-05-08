import * as React from 'react';
import { useRecoilValue } from "recoil";
import Image from "../../component/Image";
import Video from "../../component/Video";
import storyAtom from "../../recoil/atoms/story.atom";
import statusAtom from "../../recoil/atoms/status.atom";
import Loader from "../../component/Loader";
import { HeadingContainer, BottomContainer, TextContent } from "./styles";

interface IStoryRendererProps {
  displayLoader?: boolean;
}

const StoryRenderer = ({ displayLoader }: IStoryRendererProps) => {
  const story = useRecoilValue(storyAtom);
  const status = useRecoilValue(statusAtom);

  if (displayLoader) return <Loader />;

  return (
    <>
      <HeadingContainer>
        {story.stories.length > 0 && story.stories[status.currentIndex].title}
      </HeadingContainer>
      {story.stories.length > 0 &&
      story.stories[status.currentIndex].type === "img" ? (
        <Image
          imgUrl={story.stories[status.currentIndex]?.url!}
          imageStyle={story.imageStyle}
          imageContainerStyle={story.imageContainerStyle}
        />
      ) : (
        <Video
          vidUrl={story.stories[status.currentIndex]?.url!}
          videoStyle={story.videoStyle}
          videoContainerStyle={story.videoContainerStyle}
        />
      )}
      <BottomContainer>
        <TextContent>
          {story.stories.length > 0 &&
            story.stories[status.currentIndex].description}
        </TextContent>
      </BottomContainer>
    </>
  );
};

export default StoryRenderer;
