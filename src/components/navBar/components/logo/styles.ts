import styled from "@emotion/styled";

export const SvgLogo = styled.svg`
  width: 11.6rem;
  height: 1.8rem;
  fill: none;

  path {
    fill: ${(props) => props.theme.textColor};
  }
`;
