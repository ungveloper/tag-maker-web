import { memo } from "react";
import isEqual from "react-fast-compare";
import { Wrapper } from "./styles";

function ModalTwo(): JSX.Element {
  return <Wrapper>ModalTwo</Wrapper>;
}

export default memo(ModalTwo, isEqual);
