import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const HeadingContainer = styled.div`
  position: absolute;
  top: ${pxToRem(30)};
  width: 35ch;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: ${pxToRem(15)};
  font-size: ${pxToRem(18)};
  filter: drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9));
  @media (max-width: 320px) {
    padding-left: ${pxToRem(8)};
    width: 20ch;
  }
  @media (max-width: 375px) {
    padding-left: ${pxToRem(8)};
    width: 25ch;
  }
  @media (max-width: 425px) {
    padding-left: ${pxToRem(8)};
    width: 28ch;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9));
  height: ${pxToRem(150)};
  width: 100%;
  color: #fff;
  overflow: auto;
  z-index: 1000;
  background: #00000038;
  &::-webkit-scrollbar {
    width: ${pxToRem(5)};
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: ${pxToRem(4)};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const TextContent = styled.div`
  display: flex;
  padding: 10px;
  font-size: ${pxToRem(16)};
  color: #fff;
  text-align: center;
`;
