import { memo } from "react";
import isEqual from "react-fast-compare";
import { SvgToDarkTheme } from "../../styles";

function IconToDarkTheme(): JSX.Element {
  return (
    <SvgToDarkTheme viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <g strokeWidth="1.5">
          <path
            d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z"
            transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"
          ></path>
        </g>
      </g>
    </SvgToDarkTheme>
  );
}

export default memo(IconToDarkTheme, isEqual);
