import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/utils/emotion";
import { EmotionProvider } from "@/providers/emotion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </EmotionProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
