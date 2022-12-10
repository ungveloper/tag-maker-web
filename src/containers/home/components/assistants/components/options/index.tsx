import { FlexBox } from "@/containers/home/styles";
import { memo } from "react";
import isEqual from "react-fast-compare";
import ButtonRemoveSpecialChars from "./components/buttonRemoveSpecialChars";
import ButtonClear from "./components/buttonClear";

function Options() {
  return (
    <FlexBox>
      <ButtonRemoveSpecialChars />
      <ButtonClear />
    </FlexBox>
  );
}

export default memo(Options, isEqual);
