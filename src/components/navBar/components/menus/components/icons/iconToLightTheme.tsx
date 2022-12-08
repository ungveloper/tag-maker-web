import { memo } from "react";
import isEqual from "react-fast-compare";
import { SvgToLightTheme } from "../../styles";

function IconToLightTheme() {
  return (
    <SvgToLightTheme viewBox="0 0 25 25">
      <g fill="none" fillRule="evenodd">
        <path
          strokeWidth="1.6"
          d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z"
          transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
        />
        <path
          strokeWidth="1.6"
          d="M18.973 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z"
          transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
        />
      </g>
    </SvgToLightTheme>
  );
}

export default memo(IconToLightTheme, isEqual);
