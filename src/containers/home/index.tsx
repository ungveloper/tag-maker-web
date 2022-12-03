import { memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { useRecoilState } from "recoil";
import { themeAtom } from "@/recoils/stats";
import { toast } from "react-toastify";
import BaseLayout from "@/layouts/base";
import { Title } from "./styles";

function Home(): JSX.Element {
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
    <BaseLayout>
      <Title>Hello World!</Title>
      <button onClick={handleOnClick}>
        {theme.isDark ? "lightTheme" : "darkTheme"}
      </button>
    </BaseLayout>
  );
}

export default memo(Home, isEqual);
