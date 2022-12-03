import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { themeAtom } from "@/recoils/stats";
import { darkTheme, lightTheme } from "@/styles/themes";
import { EmotionGlobal } from "./globals";

type EmotionProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function EmotionProvider(props: EmotionProviderProps): JSX.Element {
  const { children } = props;
  const theme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}>
      <EmotionGlobal />
      {children}
    </ThemeProvider>
  );
}
