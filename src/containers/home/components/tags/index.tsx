import { memo } from "react";
import isEqual from "react-fast-compare";

function Tags() {
  return <h1>Tags</h1>;
}

export default memo(Tags, isEqual);
