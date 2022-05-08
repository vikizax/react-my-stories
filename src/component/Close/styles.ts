import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import CloseI from "../../assets/xmark-solid.svg";

export const ClsoeContainer = styled.div`
  position: absolute;
  height: ${pxToRem(45)};
  width: 100%;
  margin-top: ${pxToRem(20)};
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  align-items: center;
`;

export const CloseIcon = styled(CloseI)`
  margin-right: ${pxToRem(20)};
  cursor: pointer;
  padding: ${pxToRem(5)} ${pxToRem(10)};
  fill: white;
  height: ${pxToRem(20)};
  filter: drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9));
`;
