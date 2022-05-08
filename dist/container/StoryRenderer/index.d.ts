import * as React from "react";
interface IStoryRendererProps {
    displayLoader?: boolean;
    headingStyle?: React.CSSProperties;
    bottomContainerStyle?: React.CSSProperties;
    bottomTextStyle?: React.CSSProperties;
}
declare const StoryRenderer: ({ displayLoader, headingStyle, bottomContainerStyle, bottomTextStyle, }: IStoryRendererProps) => JSX.Element;
export default StoryRenderer;
