import { memo } from "react";
import isEqual from "react-fast-compare";
import { Wrapper } from "./styles";

function NavBar(): JSX.Element {
  return (
    <Wrapper>
      <h1>Navbar</h1>
    </Wrapper>
  );
}

export default memo(NavBar, isEqual);
