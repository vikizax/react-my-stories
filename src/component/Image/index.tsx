import * as React from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import Loader from "../Loader";
import statusAtom from "../../recoil/atoms/status.atom";
import { ImageContainer, Image as ImageSC } from "./styles";
import { useRef } from "react";

export interface IImageProps {
  imgUrl: string;
  imageStyle?: React.CSSProperties;
  imageContainerStyle?: React.CSSProperties;
}

const Image = ({ imgUrl, imageContainerStyle, imageStyle }: IImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [status, setstatus] = useRecoilState(statusAtom);

  const handleImageLoad = (status: boolean) => {
    setstatus((prev) => ({ ...prev, isLoading: status, isMounted: true }));
  };

  return (
    <>
      {status.isLoading && <Loader />}
      <ImageContainer style={imageContainerStyle}>
        <ImageSC
          ref={imageRef}
          src={imgUrl}
          onLoad={() => handleImageLoad(false)}
          style={imageStyle}
        />
      </ImageContainer>
    </>
  );
};

export default memo(Image);
