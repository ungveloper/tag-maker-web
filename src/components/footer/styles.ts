import styled from "@emotion/styled";
import { CONTAINER_MAX_WIDTH } from "@/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 6.4rem;
  box-shadow: 0 -1.6rem 1.6rem ${(props) => props.theme.shadowColor};
`;

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const SvgLogoSymbol = styled.svg`
  width: 2.4rem;
  aspect-ratio: 1 / 1;
  fill: none;

  rect {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.textColor};
  }

  path {
    fill: ${(props) => props.theme.bgColor};
  }
`;

export const SvgLogoTypography = styled.svg`
  width: 8.5rem;
  aspect-ratio: 6.071 / 1;
  fill: none;

  path {
    fill: ${(props) => props.theme.textColor};
  }
`;

const FooterIcons = styled.svg`
  width: 2.4rem;
  aspect-ratio: 1 / 1;
  fill: none;

  path {
    fill: ${(props) => props.theme.textColor};
  }
`;

export const SvgLinkedin = styled(FooterIcons)``;

export const SvgGithub = styled(FooterIcons)``;
