import { Global, useTheme } from "@emotion/react";
import { globalStyles } from "@/styles/globals";

export function EmotionGlobal(): JSX.Element {
  const theme = useTheme();

  return <Global styles={globalStyles(theme)} />;
}
