import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBox } from "@/containers/home/styles";
import ButtonToggleHash from "./components/buttonToggleHash";
import ButtonLineCutting from "./components/buttonLineCutting";

function Tools(): JSX.Element {
  return (
    <FlexBox>
      <ButtonToggleHash />
      <ButtonLineCutting />
    </FlexBox>
  );
}

export default memo(Tools, isEqual);
