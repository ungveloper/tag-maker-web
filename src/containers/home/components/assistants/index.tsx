import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBoxWrapper } from "../../styles";
import Options from "./components/options";
import ButtonCopy from "./components/buttonCopy";

function Assistants(): JSX.Element {
  return (
    <FlexBoxWrapper>
      <Options />
      <ButtonCopy />
    </FlexBoxWrapper>
  );
}
export default memo(Assistants, isEqual);
