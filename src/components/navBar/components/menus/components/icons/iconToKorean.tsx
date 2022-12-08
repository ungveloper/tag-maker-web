import { memo } from "react";
import isEqual from "react-fast-compare";
import { SvgToKorean } from "../../styles";

function IconToKorean() {
  return (
    <SvgToKorean viewBox="0 0 25 24">
      <g fill="none" fillRule="evenodd">
        <g strokeWidth="1.5">
          <path
            d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z"
            transform="translate(-1375 -169) translate(79.5 145) translate(1248 24) translate(50 2)"
          />
          <path
            d="M19.205 11.52c-.451-2.769-2.357-4.129-4.643-4.227-2.434-.023-3.491 1.71-4.267 2.615l-.594.69c-1.361 1.238-2.384 1.633-3.876 1.588C2.897 12.153.888 9.456.888 7.224"
            transform="translate(-1375 -169) translate(79.5 145) translate(1248 24) translate(50 2)"
          />
        </g>
      </g>
    </SvgToKorean>
  );
}

export default memo(IconToKorean, isEqual);
