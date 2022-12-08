import { memo } from "react";
import isEqual from "react-fast-compare";
import { Container, Wrapper } from "./styles";
import Logo from "./components/logo";
import Menus from "./components/menus";

function NavBar(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Menus />
      </Container>
    </Wrapper>
  );
}

export default memo(NavBar, isEqual);
