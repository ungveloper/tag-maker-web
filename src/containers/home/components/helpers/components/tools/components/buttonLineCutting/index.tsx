import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";

const ROW_MAX_LENGTH = 30;

function ButtonLineCutting(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const setText = useSetRecoilState(tagsAtom);

  const handleChangeOnClick = () => {
    setText((prev) =>
      prev.split("\n").splice(0, ROW_MAX_LENGTH).join().replaceAll(",", "\n")
    );
  };

  return (
    <button onClick={handleChangeOnClick}>
      <h1>
        {ROW_MAX_LENGTH} {t("toolsLineCuttingTitle")}
      </h1>
    </button>
  );
}

export default memo(ButtonLineCutting, isEqual);
