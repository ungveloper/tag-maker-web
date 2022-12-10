import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBoxWrapper } from "../../styles";
import Options from "./components/options";

function Assistants(): JSX.Element {
  return (
    <FlexBoxWrapper>
      <Options />
    </FlexBoxWrapper>
  );
}
export default memo(Assistants, isEqual);
