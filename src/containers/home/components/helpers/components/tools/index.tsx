import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBox } from "@/containers/home/styles";
import ButtonLineCutting from "./components/buttonLineCutting";
import ButtonToggleHash from "./components/buttonToggleHash";

function Tools(): JSX.Element {
  return (
    <FlexBox>
      <ButtonLineCutting />
      <ButtonToggleHash />
    </FlexBox>
  );
}

export default memo(Tools, isEqual);
