import { memo } from "react";
import isEqual from "react-fast-compare";
import { Container, Wrapper } from "./styles";
import FooterLogo from "./components/footerLogo";
import FooterIcons from "./components/footerIcons";

function Footer(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <FooterLogo />
        <FooterIcons />
      </Container>
    </Wrapper>
  );
}

export default memo(Footer, isEqual);
