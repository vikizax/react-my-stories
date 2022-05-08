import * as React from "react";
import { useRecoilValue } from "recoil";
import Image from "../../component/Image";
import Video from "../../component/Video";
import storyAtom from "../../recoil/atoms/story.atom";
import statusAtom from "../../recoil/atoms/status.atom";
import Loader from "../../component/Loader";
import { HeadingContainer, BottomContainer, TextContent } from "./styles";

interface IStoryRendererProps {
  displayLoader?: boolean;
  headingStyle?: React.CSSProperties;
  bottomContainerStyle?: React.CSSProperties;
  bottomTextStyle?: React.CSSProperties;
}

const StoryRenderer = ({
  displayLoader,
  headingStyle,
  bottomContainerStyle,
  bottomTextStyle,
}: IStoryRendererProps) => {
  const story = useRecoilValue(storyAtom);
  const status = useRecoilValue(statusAtom);

  if (displayLoader) return <Loader />;

  return (
    <>
      {story.stories.length > 0 && story.stories[status.currentIndex].title && (
        <HeadingContainer style={headingStyle}>
          {story.stories[status.currentIndex].title}
        </HeadingContainer>
      )}
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
      {story.stories.length > 0 &&
        story.stories[status.currentIndex].description && (
          <BottomContainer style={bottomContainerStyle}>
            <TextContent style={bottomTextStyle}>
              {story.stories[status.currentIndex].description}
            </TextContent>
          </BottomContainer>
        )}
    </>
  );
};

export default StoryRenderer;
