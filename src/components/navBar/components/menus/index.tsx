import { memo } from "react";
import isEqual from "react-fast-compare";
import { Wrapper } from "./styles";
import LocalesSelector from "./components/localesSelector";
import ThemeSelector from "./components/themeSelector";

function Menus(): JSX.Element {
  return (
    <Wrapper>
      <LocalesSelector />
      <ThemeSelector />
    </Wrapper>
  );
}

export default memo(Menus, isEqual);
