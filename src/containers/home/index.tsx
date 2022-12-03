import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";

function Home(): JSX.Element {
  const { t } = useTranslation("common");

  return <h1>{t("title")}</h1>;
}

export default memo(Home, isEqual);
