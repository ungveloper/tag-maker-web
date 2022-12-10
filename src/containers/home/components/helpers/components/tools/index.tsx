import { memo } from "react";
import isEqual from "react-fast-compare";
import { FlexBox } from "@/containers/home/styles";
import ButtonToggleHash from "./components/buttonToggleHash";

function Tools(): JSX.Element {
  return (
    <FlexBox>
      <ButtonToggleHash />
    </FlexBox>
  );
}

export default memo(Tools, isEqual);
