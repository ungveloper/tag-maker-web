import { useTranslation } from "next-i18next";
import { memo, useRef } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { modalAtom } from "./stats";
import {
  Container,
  ModalCancel,
  ModalConfirm,
  ModalContent,
  ModalItem,
  ModalOption,
  ModalTitle,
  Wrapper,
} from "./styles";
import ModalOne from "./components/modalOne";
import ModalTwo from "./components/modalTwo";

function CustomModal(): JSX.Element {
  const { t } = useTranslation("contents");
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalClose = () => {
    setModalState({
      isOpen: false,
      selectedModal: "",
    });
    console.log("close");
  };

  const handleOnClick = () => {
    console.log("confirm");
    modalClose();
  };

  const modalWrapperOnClick = ({ target }: any) => {
    if (target === modalRef.current) {
      modalClose();
    }
  };

  const modalOpen = (selectedModal: string) => {
    setModalState({
      isOpen: true,
      selectedModal,
    });
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "8rem",
          fontSize: "2rem",
        }}
      >
        <button onClick={() => modalOpen("modalOne")}>modalOne</button>
        <button onClick={() => modalOpen("modalTwo")}>modalTwo</button>
      </div>
      <Wrapper
        $isOpen={modalState.isOpen}
        onClick={modalWrapperOnClick}
        ref={modalRef}
      >
        <Container>
          <ModalContent>
            <ModalTitle>Title</ModalTitle>
            <ModalItem $isSelected={modalState.selectedModal === "modalOne"}>
              <ModalOne />
            </ModalItem>
            <ModalItem $isSelected={modalState.selectedModal === "modalTwo"}>
              <ModalTwo />
            </ModalItem>
          </ModalContent>
          <ModalOption>
            <ModalCancel onClick={modalClose}>
              {t("cancelButtonTitle")}
            </ModalCancel>
            <ModalConfirm onClick={handleOnClick}>
              {t("okButtonTitle")}
            </ModalConfirm>
          </ModalOption>
        </Container>
      </Wrapper>
    </>
  );
}

export default memo(CustomModal, isEqual);
