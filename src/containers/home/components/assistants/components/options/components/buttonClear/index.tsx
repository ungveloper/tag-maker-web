import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";

function ButtonClear(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const setText = useSetRecoilState(tagsAtom);

  const handleChangeOnClick = () => {
    setText("");
  };

  return (
    <button onClick={handleChangeOnClick}>
      <h1>{t("optionsClearTitle")}</h1>
    </button>
  );
}

export default memo(ButtonClear, isEqual);
