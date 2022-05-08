import * as React from "react";
export interface IVideoProps {
    vidUrl: string;
    videoContainerStyle?: React.CSSProperties;
    videoStyle?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<({ vidUrl, videoStyle, videoContainerStyle }: IVideoProps) => JSX.Element>;
export default _default;
