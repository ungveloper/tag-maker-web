import { memo } from "react";
import isEqual from "react-fast-compare";

function Home(): JSX.Element {
  return <h1>Hello World!</h1>;
}

export default memo(Home, isEqual);
