import styled from "@emotion/styled";
import { breakPoints, CONTAINER_MAX_WIDTH } from "@/styles/variables";

export const Wrapper = styled.div`
  margin: 3.6rem 0 5.2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mdDown} {
    padding: 0 2rem;
  }
`;

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boxBgColor};
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.6rem;
`;

type FlexBoxWrapperProps = {
  $isBorderTop: boolean;
};
export const FlexBoxWrapper = styled.div<FlexBoxWrapperProps>`
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  border-top: ${(props) => (props.$isBorderTop ? "0.1rem" : "0")} solid
    ${(props) => props.theme.borderColor};

  @media ${breakPoints.mdDown} {
    margin-top: ${(props) => props.$isBorderTop && "-2rem"};
    flex-direction: column;
    gap: 1.2rem;
    border-top: ${(props) => (!props.$isBorderTop ? "0.1rem" : "0")} solid
      ${(props) => props.theme.borderColor};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const InitOptionButton = styled.button`
  padding: 0.7rem 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 5.2rem;
  color: ${(props) => props.theme.disabledBoxTextColor};

  &:hover {
    opacity: 0.7;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.disabledBoxBgColor};

    &:hover {
      opacity: unset;
    }
  }

  svg {
    width: 1.8rem;
    aspect-ratio: 1 / 1;
    fill: none;
  }

  path {
    fill: ${(props) => props.theme.disabledBoxTextColor};
  }
`;
