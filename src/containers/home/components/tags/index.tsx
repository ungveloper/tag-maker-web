import { useTranslation } from "next-i18next";
import { ChangeEvent, memo, useEffect, useRef } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";

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
    <textarea
      ref={textareaRef}
      placeholder={t("placeholder")!}
      onChange={handleOnChange}
      value={text}
    />
  );
}
export default memo(Tags, isEqual);
