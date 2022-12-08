import styled from "@emotion/styled";
import { CONTAINER_MAX_WIDTH } from "@/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 6.4rem;
`;

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
