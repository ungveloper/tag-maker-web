import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";
import { hasSpecialChars, noSpecialChars } from "@/helpers/regex_helpers";
import { InitOptionButton } from "@/containers/home/styles";
import { toast } from "react-toastify";

function ButtonRemoveSpecialChars(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const [text, setText] = useRecoilState(tagsAtom);

  const handleChangeOnClick = () => {
    try {
      if (hasSpecialChars(text)) {
        setText((prev) => prev?.replace(noSpecialChars, ""));
      }
    } catch (e) {
      toast.error(t("errorMessage") + e);
    } finally {
      toast.success(t("successMessage"));
    }
  };

  return (
    <InitOptionButton onClick={handleChangeOnClick}>
      <svg viewBox="0 0 36 36">
        <path d="M29.1375 6.8625C26.1633 3.88828 22.2047 2.25 18 2.25C13.7953 2.25 9.83672 3.88828 6.8625 6.8625C3.88828 9.83672 2.25 13.7953 2.25 18C2.25 22.2047 3.88828 26.1633 6.8625 29.1375C9.83672 32.1117 13.7953 33.75 18 33.75C22.2047 33.75 26.1633 32.1117 29.1375 29.1375C32.1117 26.1633 33.75 22.2047 33.75 18C33.75 13.7953 32.1117 9.83672 29.1375 6.8625ZM31.5 18C31.5 21.3188 30.2977 24.3562 28.3008 26.7117L9.28828 7.69922C11.6438 5.70234 14.6812 4.5 18 4.5C25.4461 4.5 31.5 10.5539 31.5 18ZM4.5 18C4.5 14.6812 5.70234 11.6438 7.69922 9.28828L26.7117 28.3008C24.3562 30.2977 21.3188 31.5 18 31.5C10.5539 31.5 4.5 25.4461 4.5 18Z" />
      </svg>
      <span>{t("optionsRemoveSpecialCharsTitle")}</span>
    </InitOptionButton>
  );
}

export default memo(ButtonRemoveSpecialChars, isEqual);
