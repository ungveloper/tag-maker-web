import styled from "@emotion/styled";
import { CONTAINER_MAX_WIDTH } from "@/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FlexBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Lines = styled.div``;
export const Characters = styled.div``;
