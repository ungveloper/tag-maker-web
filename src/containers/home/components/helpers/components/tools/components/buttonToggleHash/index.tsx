import { useTranslation } from "next-i18next";
import { memo, useState } from "react";
import isEqual from "react-fast-compare";
import { useSetRecoilState } from "recoil";
import { tagsAtom } from "@/containers/home/components/tags/stats";

function ButtonToggleHash(): JSX.Element {
  const { t } = useTranslation(["contents"]);
  const setText = useSetRecoilState(tagsAtom);
  const [isHashTag, setIsHashTag] = useState<boolean>(false);

  const handleChangeOnClick = () => {
    if (isHashTag) {
      setText((prev) => prev.replaceAll("#", ""));
    } else {
      setText((prev) => "#" + prev.replaceAll("#", "").replaceAll("\n", "\n#"));
    }
    setIsHashTag((prev) => !prev);
  };

  return (
    <button onClick={handleChangeOnClick}>
      <h1>
        #{" "}
        {!isHashTag
          ? `${t("toolsToggleHashAddTitle")}`
          : `${t("toolsToggleHashRemoveTitle")}`}
      </h1>
    </button>
  );
}

export default memo(ButtonToggleHash, isEqual);
