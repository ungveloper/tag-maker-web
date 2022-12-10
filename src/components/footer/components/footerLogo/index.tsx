import Link from "next/link";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { IconsWrapper } from "../../styles";
import IconLogoSymbol from "../icons/iconLogoSymbol";
import IconLogoTypography from "../icons/iconLogoTypography";

function FooterLogo(): JSX.Element {
  return (
    <Link href="https://github.com/ungveloper" target="_blank">
      <IconsWrapper>
        <IconLogoSymbol />
        <IconLogoTypography />
      </IconsWrapper>
    </Link>
  );
}

export default memo(FooterLogo, isEqual);
