import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useRecoilValue } from "recoil";
import { tagsAtom } from "../../../tags/stats";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ButtonCopy() {
  const { t } = useTranslation(["contents"]);
  const text = useRecoilValue(tagsAtom);

  return (
    <CopyToClipboard text={text}>
      <button>{t("copyButtonTitle")}</button>
    </CopyToClipboard>
  );
}

export default memo(ButtonCopy, isEqual);
