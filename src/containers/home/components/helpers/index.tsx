import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBoxWrapper } from "../../styles";
import Tellers from "./components/tellers";

function Helpers(): JSX.Element {
  return (
    <FlexBoxWrapper>
      <Tellers />
    </FlexBoxWrapper>
  );
}

export default memo(Helpers, isEqual);
