import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { modalAtom } from "@/components/modal/stats";

function ButtonLineCutting(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const setModalState = useSetRecoilState(modalAtom);

  const handleOnClick = () => {
    setModalState({
      isOpen: true,
      selectedModal: "modalLineCutting",
    });
  };

  return (
    <button onClick={handleOnClick}>
      <h1>{t("toolsLineCutTitle")}</h1>
    </button>
  );
}

export default memo(ButtonLineCutting, isEqual);
