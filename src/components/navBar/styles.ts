import styled from "@emotion/styled";
import { breakPoints, CONTAINER_MAX_WIDTH } from "@/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6.4rem;
  box-shadow: 0 0 0.8rem ${(props) => props.theme.shadowColor};
`;

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mdDown} {
    padding: 0 2rem;
  }
`;
