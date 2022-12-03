import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/utils/emotion";
import { EmotionProvider } from "@/providers/emotion";

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export function MyApp(props: IMyAppProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <EmotionProvider>
        <Component {...pageProps} />
      </EmotionProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
