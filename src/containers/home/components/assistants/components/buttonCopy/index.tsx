import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useRecoilValue } from "recoil";
import { tagsAtom } from "../../../tags/stats";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PointButton } from "./styles";
import { toast } from "react-toastify";

function ButtonCopy(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const text = useRecoilValue(tagsAtom);

  const handleOnCopy = () => {
    toast.success(t("copyMessage"));
  };

  return (
    <CopyToClipboard text={text} onCopy={handleOnCopy}>
      <PointButton>
        <svg viewBox="0 0 36 36">
          <path d="M28.6172 7.875H28.1109L28.125 7.33359C28.125 7.32656 28.125 7.3125 28.125 7.30547C28.118 5.95547 27.5906 4.68984 26.6414 3.73359C25.6852 2.78437 24.4125 2.25703 23.0625 2.25H7.875C6.37734 2.25703 4.96406 2.84062 3.90234 3.90234C2.84062 4.96406 2.25703 6.37031 2.25 7.875V23.0625C2.25703 24.4125 2.78437 25.6781 3.73359 26.6344C4.68984 27.5906 5.95547 28.118 7.3125 28.118H7.875V28.6102C7.875 31.4437 10.1742 33.743 13.0078 33.743H28.6172C31.4508 33.743 33.75 31.4437 33.75 28.6102V13.0078C33.75 10.1742 31.4508 7.875 28.6172 7.875ZM7.3125 25.875C6.56016 25.875 5.85703 25.5797 5.32266 25.0453C4.79531 24.518 4.5 23.8078 4.5 23.0625V7.875C4.5 6.975 4.85859 6.12422 5.49141 5.49141C6.13125 4.85859 6.975 4.5 7.875 4.5H23.0625C23.8148 4.5 24.518 4.79531 25.0523 5.32969C25.5797 5.85703 25.875 6.56016 25.882 7.30547L25.868 7.875H13.0078C10.1742 7.875 7.875 10.1742 7.875 13.0078V25.875H7.3125ZM31.5 28.6172C31.5 30.2063 30.2063 31.5 28.6172 31.5H13.0078C11.4187 31.5 10.125 30.2063 10.125 28.6172V13.0078C10.125 11.4187 11.4187 10.125 13.0078 10.125H28.6172C30.2063 10.125 31.5 11.4187 31.5 13.0078V28.6172Z" />
        </svg>
        <span>{t("copyButtonTitle")}</span>
      </PointButton>
    </CopyToClipboard>
  );
}

export default memo(ButtonCopy, isEqual);
