import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBoxWrapper } from "../../styles";
import Tellers from "./components/tellers";
import Tools from "./components/tools";

function Helpers(): JSX.Element {
  return (
    <FlexBoxWrapper $isBorderTop={false}>
      <Tellers />
      <Tools />
    </FlexBoxWrapper>
  );
}

export default memo(Helpers, isEqual);
