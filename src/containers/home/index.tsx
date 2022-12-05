import { memo } from "react";
import isEqual from "react-fast-compare";
import BaseLayout from "@/layouts/base";
import { Container, Wrapper } from "./styles";

function Home(): JSX.Element {
  return (
    <BaseLayout>
      <Wrapper>
        <Container>
          <h1>body</h1>
        </Container>
      </Wrapper>
    </BaseLayout>
  );
}

export default memo(Home, isEqual);
