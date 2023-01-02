import { memo } from "react";
import isEqual from "react-fast-compare";
import { Wrapper } from "./styles";

function ModalOne(): JSX.Element {
  return <Wrapper>ModalOne</Wrapper>;
}

export default memo(ModalOne, isEqual);
