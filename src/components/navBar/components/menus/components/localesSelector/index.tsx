import { useRouter } from "next/router";
import { memo, useState } from "react";
import isEqual from "react-fast-compare";
import { toast } from "react-toastify";
import { SwitchingButton } from "../../styles";
import IconToKorean from "../icons/iconToKorean";
import IconToEnglish from "../icons/iconToEnglish";

function LocalesSelector(): JSX.Element {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState<boolean>(
    router.locale === "en" ? true : false
  );

  const handleOnClick = () => {
    try {
      router.push("/", undefined, {
        locale: router.locale === "en" ? "ko" : "en",
      });
      setIsEnglish((prev) => !prev);
    } catch (e) {
      toast.error("에러 발생.");
    } finally {
      toast.success("완료");
    }
  };

  return (
    <SwitchingButton onClick={handleOnClick}>
      {isEnglish ? <IconToKorean /> : <IconToEnglish />}
    </SwitchingButton>
  );
}

export default memo(LocalesSelector, isEqual);
