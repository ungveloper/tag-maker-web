import "@emotion/react";
import { lightTheme } from "@/styles/themes";

type ThemeType = typeof lightTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
