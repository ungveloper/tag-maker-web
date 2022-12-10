import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";
import { hasSpecialChars, noSpecialChars } from "@/helpers/regex_helpers";

function ButtonRemoveSpecialChars(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const [text, setText] = useRecoilState(tagsAtom);

  const handleChangeOnClick = () => {
    if (hasSpecialChars(text)) {
      setText((prev) => prev?.replace(noSpecialChars, ""));
    }
  };

  return (
    <button onClick={handleChangeOnClick}>
      <h1>{t("optionsRemoveSpecialCharsTitle")}</h1>
    </button>
  );
}

export default memo(ButtonRemoveSpecialChars, isEqual);
