import { keyframes } from "@emotion/react";

export const themeIconAppearance = keyframes`
	0% {
		transform: scale(0) rotate(-120deg);
		opacity: 0;
	}
	100% {
		transform: scale(1) rotate(0deg);
		opacity: 1;
	}
`;

export const localesIconAppearance = keyframes`
	0% {
        transform: scaleY(-1);
		opacity: 0;
	}
	100% {
        transform: unset;
		opacity: 1;
	}
`;
