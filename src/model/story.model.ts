import { CSSProperties } from "react";

export interface Story {
  url: string;
  type: "img" | "video";
  title?: string;
  description?: string;
}

export interface StoryModel {
  stories: Story[];
  imageStyle?: CSSProperties;
  videoStyle?: CSSProperties;
  imageContainerStyle?: CSSProperties;
  videoContainerStyle?: CSSProperties;
  interval?: number;
  storyBodyStyle?: CSSProperties;
  loop?: boolean;
  displayLoader?: boolean;
  headingStyle?: CSSProperties;
  bottomContainerStyle?: CSSProperties;
  bottomTextStyle?: CSSProperties;
  refreshRate?: number;
  previousCallback?: (...args: any[]) => void;
  nextCallback?: (...args: any[]) => void;
  closeCallback?: (...args: any[]) => void;
}
