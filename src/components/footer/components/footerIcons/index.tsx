import Link from "next/link";
import { memo } from "react";
import isEqual from "react-fast-compare";
import { IconsWrapper } from "../../styles";
import IconGithub from "../icons/iconGithub";
import IconLinkedin from "../icons/iconLinkedin";

function FooterIcons(): JSX.Element {
  return (
    <IconsWrapper>
      <Link
        href="https://www.linkedin.com/in/ung-veloper-052aa0247/"
        target="_blank"
      >
        <IconLinkedin />
      </Link>
      <Link href="https://github.com/ungveloper" target="_blank">
        <IconGithub />
      </Link>
    </IconsWrapper>
  );
}

export default memo(FooterIcons, isEqual);
