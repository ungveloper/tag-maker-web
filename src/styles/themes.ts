import { palette } from "./palette";

export const lightTheme = {
  bgColor: palette.gray,
  textColor: palette.black,
  placeholderTextColor: palette.black70,
  pathStrokeColor: palette.black,
  shadowColor: palette.black10,
  boxBgColor: palette.white,
  borderColor: palette.black10,
  disabledBoxBgColor: palette.black5,
  disabledBoxTextColor: palette.black70,
  pointBgColor: palette.green,
  pointHoverBgColor: palette.lightGreen,
  pointTextColor: palette.white,
};

export const darkTheme = {
  bgColor: palette.black,
  textColor: palette.gray,
  placeholderTextColor: palette.white70,
  pathStrokeColor: palette.white,
  shadowColor: palette.white5,
  boxBgColor: palette.indigo,
  borderColor: palette.white10,
  disabledBoxBgColor: palette.darkGray,
  disabledBoxTextColor: palette.white70,
  pointBgColor: palette.green,
  pointHoverBgColor: palette.lightGreen,
  pointTextColor: palette.white,
};
