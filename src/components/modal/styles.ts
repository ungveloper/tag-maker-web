import styled from "@emotion/styled";

type WrapperProps = {
  $isOpen: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 72%;
  min-width: 12%;
  max-height: 88%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const ModalContent = styled.div`
  padding: 2.4rem;
`;

export const ModalTitle = styled.h1``;

type ModalItem = {
  $isSelected: boolean;
};
export const ModalItem = styled.div<ModalItem>`
  display: ${(props) => (props.$isSelected ? "flex" : "none")};
`;

export const ModalOption = styled.div`
  display: flex;
  border-top: 1px solid #eeeeee;
`;

const ModalButton = styled.button`
  padding: 1.2rem 0;
  flex: 1;
  border-right: 1px solid #eeeeee;
  text-align: center;

  &:last-child {
    border-right: unset;
  }
`;

export const ModalCancel = styled(ModalButton)``;

export const ModalConfirm = styled(ModalButton)``;
