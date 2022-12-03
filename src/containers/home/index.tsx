import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { Title } from "./styles";

function Home(): JSX.Element {
  const { t } = useTranslation("common");

  return <Title>{t("title")}</Title>;
}

export default memo(Home, isEqual);
