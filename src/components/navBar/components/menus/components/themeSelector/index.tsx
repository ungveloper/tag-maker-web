import { useTranslation } from "next-i18next";
import { memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { themeAtom } from "@/recoils/stats";
import { SwitchingButton } from "../../styles";
import IconToLightTheme from "../icons/iconToLightTheme";
import IconToDarkTheme from "../icons/iconToDarkTheme";
import { toast } from "react-toastify";

function ThemeSelector(): JSX.Element {
  const { t } = useTranslation("contents");
  const [theme, setTheme] = useRecoilState(themeAtom);

  const handleOnClick = useCallback(() => {
    try {
      setTheme((prev) => {
        return {
          ...prev,
          isDark: !prev.isDark,
        };
      });
    } catch (e) {
      toast.error(t("errorMessage") + e);
    } finally {
      toast.success(t("successMessage"));
    }
  }, []);

  return (
    <SwitchingButton onClick={handleOnClick}>
      {theme.isDark ? <IconToLightTheme /> : <IconToDarkTheme />}
    </SwitchingButton>
  );
}

export default memo(ThemeSelector, isEqual);
