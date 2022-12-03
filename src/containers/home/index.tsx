import { useTranslation } from "next-i18next";
import { memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { themeAtom } from "@/recoils/stats";
import { toast } from "react-toastify";
import { Title } from "./styles";

function Home(): JSX.Element {
  const { t } = useTranslation("common");
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
      toast.error("에러 발생");
    } finally {
      toast.success("테마 변경 완료");
    }
  }, []);

  return (
    <>
      <Title>{t("title")}</Title>
      <button onClick={handleOnClick}>
        {theme.isDark ? "lightTheme" : "darkTheme"}
      </button>
    </>
  );
}

export default memo(Home, isEqual);
