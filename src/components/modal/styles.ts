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
  background-color: ${(props) => props.theme.modalWrapperBgColor};
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
  background-color: ${(props) => props.theme.modalBgColor};
  box-shadow: 0 0 0.8rem ${(props) => props.theme.shadowColor};
  overflow: hidden;
`;

type ModalItem = {
  $isSelected: boolean;
};
export const ModalItem = styled.div<ModalItem>`
  display: ${(props) => (props.$isSelected ? "flex" : "none")};
  flex-direction: column;
  color: ${(props) => props.theme.modalTextColor};
  font-size: 1.4rem;
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
  margin-top: 1.2rem;
  padding: 0 2.4rem;
  display: flex;

  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    aspect-ratio: 1 / 1;
    border: 0.1rem solid ${(props) => props.theme.borderColor};

    &:first-of-type {
      border-radius: 0.8rem 0 0 0.8rem;
    }

    &:last-of-type {
      border-radius: 0 0.8rem 0.8rem 0;
    }

    &:hover {
      background-color: ${(props) => props.theme.shadowColor};
    }
  }

  input {
    flex: 1;
    border: unset;
    border-top: 0.1rem solid ${(props) => props.theme.borderColor};
    border-bottom: 0.1rem solid ${(props) => props.theme.borderColor};
    text-align: center;
    font-size: 1.6rem;
  }
`;

export const ModalFooter = styled.div`
  margin-top: 2.4rem;
  display: flex;
  border-top: 0.1rem solid ${(props) => props.theme.borderColor};

  * {
    flex: 1;
  }
`;
