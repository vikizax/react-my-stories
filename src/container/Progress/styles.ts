import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const ProgressContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  max-width: 100%;
  width: 98%;
  flex-wrap: nowrap;
  padding: ${pxToRem(5)};
  padding-top: ${pxToRem(7)};
  align-self: center;
  z-index: 99;
  filter: drop-shadow(0 1px 8px #222);
  position: absolute;
`;

export const ProgressWrapperContainer = styled.div`
  height: ${pxToRem(2)};
  max-width: 100%;
  background-color: #555;
  margin: ${pxToRem(2)};
  border-radius: ${pxToRem(2)};
  width: 33%;
  display: flex;
`;

export const ProgressItem = styled.div.attrs<{ scale: number }>(props => ({
  style: {
    transform: `scaleX(${props.scale / 100})`,
  },
}))`
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-radius: ${pxToRem(2)};
    transform-origin: center left;
    backface-visibility: hidden;
    perspective: 1000;
`;

