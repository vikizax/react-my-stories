import * as React from "react";
import LoaderSVG from "../../assets/puff.svg";
import { LoaderContainer } from "./styles";
const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSVG />
    </LoaderContainer>
  );
};

export default Loader;
