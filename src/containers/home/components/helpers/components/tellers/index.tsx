import { useTranslation } from "next-i18next";
import { memo, useEffect, useState } from "react";
import isEqual from "react-fast-compare";
import { useRecoilValue } from "recoil";
import { tagsAtom } from "../../../tags/stats";
import { Characters, FlexBox, Lines } from "@/containers/home/styles";

function Tellers(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const text = useRecoilValue(tagsAtom);
  const [textLength, setTextLength] = useState<number>(0);
  const [rowLength, setRowLength] = useState<number>(0);

  useEffect(() => {
    setTextLength(text?.length);
    if (!text) {
      setRowLength(0);
      return;
    }
    setRowLength(text?.split("\n").length);
  }, [text]);

  return (
    <FlexBox>
      <Lines>
        {rowLength} {t("tellerLinesTitle")}
      </Lines>
      <Characters>
        {textLength} {t("tellerCharactersTitle")}
      </Characters>
    </FlexBox>
  );
}

export default memo(Tellers, isEqual);
