import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import isEqual from "react-fast-compare";
import { SwitchingButton } from "../../styles";
import IconToKorean from "../icons/iconToKorean";
import IconToEnglish from "../icons/iconToEnglish";
import { toast } from "react-toastify";

function LocalesSelector(): JSX.Element {
  const { t } = useTranslation("contents");
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
      toast.error(t("errorMessage") + e);
    } finally {
      toast.success(t("successMessage"));
    }
  };

  return (
    <SwitchingButton onClick={handleOnClick}>
      {isEnglish ? <IconToKorean /> : <IconToEnglish />}
    </SwitchingButton>
  );
}

export default memo(LocalesSelector, isEqual);
