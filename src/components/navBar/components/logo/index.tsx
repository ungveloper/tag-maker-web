import { useTranslation } from "next-i18next";
import Link from "next/link";
import { memo } from "react";
import isEqual from "react-fast-compare";

function Logo(): JSX.Element {
  const { t } = useTranslation(["navBar"]);

  return (
    <Link href="/">
      <h1>{t("logoTitle")}</h1>
    </Link>
  );
}

export default memo(Logo, isEqual);
