import { breakPoints } from "@/styles/variables";
import styled from "@emotion/styled";

export const PointButton = styled.button`
  padding: 1.2rem 1.6rem;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.pointBgColor};
  color: ${(props) => props.theme.pointTextColor};

  &:hover {
    background-color: ${(props) => props.theme.pointBgColorHover};
  }

  svg {
    width: 1.8rem;
    aspect-ratio: 1 / 1;
    fill: none;
  }

  path {
    fill: ${(props) => props.theme.pointTextColor};
  }

  @media ${breakPoints.mdDown} {
    padding: 1.6rem;
    margin-top: 1.2rem;
  }
`;
