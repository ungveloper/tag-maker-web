import styled from "@emotion/styled";
import { DEFALUT_ICON_SIZE, DEFAULT_DURATION } from "@/styles/variables";
import { localesIconAppearance, themeIconAppearance } from "./keyframes";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const SwitchingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarIcons = styled.svg`
  position: relative;
  width: ${DEFALUT_ICON_SIZE};
  height: ${DEFALUT_ICON_SIZE};

  path {
    stroke: ${(props) => props.theme.pathStrokeColor};
  }
`;

const LocalesIcons = styled(NavbarIcons)`
  animation: ${localesIconAppearance} ${DEFAULT_DURATION};
`;
const ThemeIcons = styled(NavbarIcons)`
  animation: ${themeIconAppearance} ${DEFAULT_DURATION};
`;

export const SvgToEnglish = styled(LocalesIcons)``;

export const SvgToKorean = styled(LocalesIcons)``;

export const SvgToDarkTheme = styled(ThemeIcons)``;

export const SvgToLightTheme = styled(ThemeIcons)`
  top: -0.08rem;
`;
