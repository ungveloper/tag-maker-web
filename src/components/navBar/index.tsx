import { memo } from "react";
import isEqual from "react-fast-compare";
import { Container, Wrapper } from "./styles";

function NavBar(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <h1>logo</h1>
        <h1>menus</h1>
      </Container>
    </Wrapper>
  );
}

export default memo(NavBar, isEqual);
