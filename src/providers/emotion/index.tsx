import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/styles/themes";
import { EmotionGlobal } from "./globals";
import { useState } from "react";

type EmotionProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function EmotionProvider(props: EmotionProviderProps): JSX.Element {
  const { children } = props;
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <EmotionGlobal />
      {children}
      <button onClick={handleOnClick}>
        {isDark ? "lightTheme" : "darkTheme"}
      </button>
    </ThemeProvider>
  );
}
