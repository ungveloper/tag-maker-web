import styled from "@emotion/styled";

export const SvgLogo = styled.svg`
  width: 11.6rem;
  aspect-ratio: 6.444 / 1;
  fill: none;

  path {
    fill: ${(props) => props.theme.textColor};
  }
`;
