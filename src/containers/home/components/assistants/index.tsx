import { memo } from "react";
import isEqual from "react-fast-compare";

function Assistants() {
  return <h1>Assistants</h1>;
}

export default memo(Assistants, isEqual);
