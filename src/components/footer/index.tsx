import { memo } from "react";
import isEqual from "react-fast-compare";
import { Wrapper } from "./styles";

function Footer(): JSX.Element {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
}

export default memo(Footer, isEqual);
