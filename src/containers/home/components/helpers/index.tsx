import { memo } from "react";
import isEqual from "react-fast-compare";

function Helpers() {
  return <h1>Helpers</h1>;
}

export default memo(Helpers, isEqual);
