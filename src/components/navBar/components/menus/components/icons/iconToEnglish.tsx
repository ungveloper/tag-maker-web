import { memo } from "react";
import isEqual from "react-fast-compare";
import { SvgToEnglish } from "../../styles";

function IconToEnglish() {
  return (
    <SvgToEnglish viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <g strokeWidth="1.35">
          <path
            d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z"
            transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
          />
          <path
            strokeLinejoin="round"
            d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z"
            transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
          />
          <path
            d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811"
            transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
          />
        </g>
      </g>
    </SvgToEnglish>
  );
}

export default memo(IconToEnglish, isEqual);
