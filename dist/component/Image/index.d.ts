import * as React from "react";
export interface IImageProps {
    imgUrl: string;
    imageStyle?: React.CSSProperties;
    imageContainerStyle?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<({ imgUrl, imageContainerStyle, imageStyle }: IImageProps) => JSX.Element>;
export default _default;
