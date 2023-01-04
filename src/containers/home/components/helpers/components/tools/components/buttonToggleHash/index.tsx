import { useTranslation } from "next-i18next";
import { memo, useState } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";
import { InitOptionButton } from "@/containers/home/styles";
import { toast } from "react-toastify";

function ButtonToggleHash(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const setText = useSetRecoilState(tagsAtom);
  const [isHashTag, setIsHashTag] = useState<boolean>(false);

  const handleChangeOnClick = () => {
    try {
      if (isHashTag) {
        setText((prev) => prev.replaceAll("#", ""));
      } else {
        setText(
          (prev) => "#" + prev.replaceAll("#", "").replaceAll("\n", "\n#")
        );
      }
      setIsHashTag((prev) => !prev);
    } catch (e) {
      toast.error(t("errorMessage") + e);
    } finally {
      toast.success(t("successMessage"));
    }
  };

  return (
    <InitOptionButton onClick={handleChangeOnClick}>
      {!isHashTag ? (
        <svg viewBox="0 0 36 36">
          <path d="M18 32.625C9.93516 32.625 3.375 26.0648 3.375 18C3.375 9.93516 9.93516 3.375 18 3.375C26.0648 3.375 32.625 9.93516 32.625 18C32.625 26.0648 26.0648 32.625 18 32.625ZM18 5.625C11.1797 5.625 5.625 11.1797 5.625 18C5.625 24.8203 11.1797 30.375 18 30.375C24.8203 30.375 30.375 24.8203 30.375 18C30.375 11.1797 24.8203 5.625 18 5.625Z" />
          <path d="M23.625 16.875H19.125V12.375C19.125 11.7562 18.6188 11.25 18 11.25C17.3812 11.25 16.875 11.7562 16.875 12.375V16.875H12.375C11.7562 16.875 11.25 17.3812 11.25 18C11.25 18.6188 11.7562 19.125 12.375 19.125H16.875V23.625C16.875 24.2438 17.3812 24.75 18 24.75C18.6188 24.75 19.125 24.2438 19.125 23.625V19.125H23.625C24.2438 19.125 24.75 18.6188 24.75 18C24.75 17.3812 24.2438 16.875 23.625 16.875Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 36 36">
          <path d="M18 32.625C9.93516 32.625 3.375 26.0648 3.375 18C3.375 9.93516 9.93516 3.375 18 3.375C26.0648 3.375 32.625 9.93516 32.625 18C32.625 26.0648 26.0648 32.625 18 32.625ZM18 5.625C11.1797 5.625 5.625 11.1797 5.625 18C5.625 24.8203 11.1797 30.375 18 30.375C24.8203 30.375 30.375 24.8203 30.375 18C30.375 11.1797 24.8203 5.625 18 5.625Z" />
          <path d="M23.625 16.875H12.375C11.7562 16.875 11.25 17.3812 11.25 18C11.25 18.6188 11.7562 19.125 12.375 19.125H23.625C24.2438 19.125 24.75 18.6188 24.75 18C24.75 17.3812 24.2438 16.875 23.625 16.875Z" />
        </svg>
      )}
      <span>
        #{" "}
        {!isHashTag
          ? `${t("toolsToggleHashAddTitle")}`
          : `${t("toolsToggleHashRemoveTitle")}`}
      </span>
    </InitOptionButton>
  );
}

export default memo(ButtonToggleHash, isEqual);
