import * as React from 'react';
import { memo } from "react";
import { ClsoeContainer, CloseIcon } from "./styles";

interface ICloseProps {
  closeCallback?: () => void;
}

const Close = ({ closeCallback }: ICloseProps) => {
  return (
    <ClsoeContainer>
      <CloseIcon onClick={closeCallback} />
    </ClsoeContainer>
  );
};

export default memo(Close);
