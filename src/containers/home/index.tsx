import { memo } from "react";
import isEqual from "react-fast-compare";
import BaseLayout from "@/layouts/base";
import { Container, Wrapper } from "./styles";
import Tags from "./components/tags";
import Helpers from "./components/helpers";
import Assistants from "./components/assistants";

function Home(): JSX.Element {
  return (
    <BaseLayout>
      <Wrapper>
        <Container>
          <Tags />
          <Helpers />
          <Assistants />
        </Container>
      </Wrapper>
    </BaseLayout>
  );
}

export default memo(Home, isEqual);
