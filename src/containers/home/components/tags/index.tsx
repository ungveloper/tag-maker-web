import { useTranslation } from "next-i18next";
import { ChangeEvent, memo, useEffect, useRef } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";
import { Textarea } from "./styles";

function Tags(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const [text, setText] = useRecoilState(tagsAtom);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      placeholder={t("tagsPlaceholder")!}
      onChange={handleOnChange}
      minRows={30}
      maxRows={30}
      value={text}
    />
  );
}
export default memo(Tags, isEqual);
