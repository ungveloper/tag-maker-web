import { useTranslation } from "next-i18next";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { modalAtom } from "@/components/modal/stats";
import { Button } from "./styles";

function ButtonModalClose(): JSX.Element {
  const { t } = useTranslation("contents");
  const setModalState = useSetRecoilState(modalAtom);

  const modalClose = () => {
    setModalState({
      isOpen: false,
      selectedModal: "",
    });
  };

  return <Button onClick={modalClose}>{t("cancelButtonTitle")}</Button>;
}

export default memo(ButtonModalClose, isEqual);
