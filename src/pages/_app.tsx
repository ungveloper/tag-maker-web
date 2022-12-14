import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation, useTranslation } from "next-i18next";
import nextI18nextConfig from "next-i18next.config";
import { GoogleAnalyticsProvider } from "@/providers/googleAnalytics";
import { RecoilRoot } from "recoil";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/utils/emotion";
import { EmotionProvider } from "@/providers/emotion";
import CustomModal from "@/components/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export function MyApp(props: IMyAppProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  const { t } = useTranslation(["common"]);
  return (
    <GoogleAnalyticsProvider>
      <RecoilRoot>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={t("description")!} />
            <title>{t("title")}</title>
          </Head>
          <EmotionProvider>
            <Component {...pageProps} />
            <CustomModal />
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
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
    </GoogleAnalyticsProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
