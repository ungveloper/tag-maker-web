import { memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { themeAtom } from "@/recoils/stats";
import { toast } from "react-toastify";
import { SwitchingButton } from "../../styles";
import IconToLightTheme from "../icons/iconToLightTheme";
import IconToDarkTheme from "../icons/iconToDarkTheme";

function ThemeSelector(): JSX.Element {
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
      toast.error("에러 발생.");
    }
  }, []);

  return (
    <SwitchingButton onClick={handleOnClick}>
      {theme.isDark ? <IconToLightTheme /> : <IconToDarkTheme />}
    </SwitchingButton>
  );
}

export default memo(ThemeSelector, isEqual);
