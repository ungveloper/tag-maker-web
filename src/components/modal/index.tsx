import { memo, useRef } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { modalAtom } from "@/components/modal/stats";
import { Container, ModalItem, Wrapper } from "./styles";
import ModalLineCutting from "./components/modalLineCutting";

function CustomModal(): JSX.Element {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalWrapperOnClick = ({ target }: any) => {
    if (target === modalRef.current) {
      setModalState({
        isOpen: false,
        selectedModal: "",
      });
    }
  };

  return (
    <Wrapper
      $isOpen={modalState.isOpen}
      onMouseDown={modalWrapperOnClick}
      ref={modalRef}
    >
      <Container>
        <ModalItem
          $isSelected={modalState.selectedModal === "modalLineCutting"}
        >
          <ModalLineCutting />
        </ModalItem>
      </Container>
    </Wrapper>
  );
}

export default memo(CustomModal, isEqual);
