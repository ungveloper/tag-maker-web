import { FlexBox } from "@/containers/home/styles";
import { memo } from "react";
import isEqual from "react-fast-compare";
import ButtonRemoveSpecialChars from "./components/buttonRemoveSpecialChars";

function Options() {
  return (
    <FlexBox>
      <ButtonRemoveSpecialChars />
    </FlexBox>
  );
}

export default memo(Options, isEqual);
