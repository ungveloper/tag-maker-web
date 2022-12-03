import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/utils/emotion";
import { EmotionProvider } from "@/providers/emotion";

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export function MyApp(props: IMyAppProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <EmotionProvider>
          <Component {...pageProps} />
        </EmotionProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
