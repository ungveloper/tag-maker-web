import { useTranslation } from "next-i18next";
import { ChangeEvent, KeyboardEvent, memo, useEffect, useRef } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalAtom } from "@/components/modal/stats";
import { tagsAtom } from "@/containers/home/components/tags/stats";
import { linesAtom } from "@/components/modal/components/modalLineCutting/stats";
import { ModalBody, ModalFooter, ModalHeader } from "../../styles";
import ButtonModalClose from "../buttonModalClose";
import ButtonModalConfirm from "../buttonModalConfirm";
import { toast } from "react-toastify";

function ModalLineCutting(): JSX.Element {
  const { t } = useTranslation("contents");
  const setText = useSetRecoilState(tagsAtom);
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const [lineLength, setLineLength] = useRecoilState(linesAtom);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const lineDecrease = () => {
    setLineLength((prev) => prev - 1);
  };
  const lineIncrease = () => {
    setLineLength((prev) => prev + 1);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setLineLength(+value);
  };

  const handleOnClick = () => {
    try {
      setText((prev) =>
        prev.split("\n").splice(0, lineLength).join().replaceAll(",", "\n")
      );

      setModalState({
        isOpen: false,
        selectedModal: "",
      });
    } catch (e) {
      toast.error(t("errorMessage") + e);
    } finally {
      toast.success(t("successMessage"));
    }
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  useEffect(() => {
    inputRef.current?.select();
  }, [modalState.selectedModal === "modalLineCutting"]);

  return (
    <>
      <ModalHeader>
        <h1>{t("toolsLineCutTitle")}</h1>
        <p>{t("toolsLineCutDesc")}</p>
      </ModalHeader>
      <ModalBody>
        <button onClick={lineDecrease}>-</button>
        <input
          type="number"
          value={lineLength}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          ref={inputRef}
        />
        <button onClick={lineIncrease}>+</button>
      </ModalBody>
      <ModalFooter>
        <ButtonModalClose />
        <ButtonModalConfirm
          title={t("okButtonTitle")!}
          onClick={handleOnClick}
        />
      </ModalFooter>
    </>
  );
}

export default memo(ModalLineCutting, isEqual);
