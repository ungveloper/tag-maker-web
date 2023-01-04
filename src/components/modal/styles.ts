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

type ModalItem = {
  $isSelected: boolean;
};
export const ModalItem = styled.div<ModalItem>`
  display: ${(props) => (props.$isSelected ? "flex" : "none")};
  flex-direction: column;
`;

export const InitModalButton = styled.button`
  padding: 1.2rem 0;
  flex: 1;
  text-align: center;
`;

export const ModalHeader = styled.div`
  margin-top: 2.4rem;
  padding: 0 2.4rem;
`;

export const ModalBody = styled.div`
  padding: 0 2.4rem;
`;

export const ModalFooter = styled.div`
  margin-top: 2.4rem;
  display: flex;
  border-top: 0.1rem solid #eeeeee;

  * {
    flex: 1;
  }
`;
