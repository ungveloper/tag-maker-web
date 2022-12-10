import { useTranslation } from "next-i18next";
import { ChangeEvent, memo } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { tagsAtom } from "./stats";

function Tags(): JSX.Element {
  const { t } = useTranslation(["textarea"]);
  const [text, setText] = useRecoilState(tagsAtom);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  return (
    <textarea
      placeholder={t("placeholder")!}
      onChange={handleOnChange}
      value={text}
    />
  );
}
export default memo(Tags, isEqual);
