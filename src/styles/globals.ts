import { css, Theme } from "@emotion/react";

/* ungset V1.0.2 */
export const globalStyles = (theme: Theme) => {
  return css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Pretendard", sans-serif;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-drag: none;
    }
    html {
      width: 100%;
      height: 100%;
      font-size: 62.5%;
    }
    body {
      line-height: 1;
      color: ${theme.textColor};
      background: ${theme.bgColor};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    span,
    a,
    button,
    input,
    textarea {
      color: inherit;
      text-align: inherit;
      font-weight: inherit;
      font-size: 100%;
    }
    a {
      text-decoration: none;
      font-weight: unset;
    }
    button {
      border: none;
      outline: none;
      background-color: unset;
      cursor: pointer;
    }
    input {
      outline: none;
      background-color: transparent;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    textarea {
      outline: none;
      border: none;
      resize: none;
    }
    ul {
      list-style: none;
    }
    img,
    video,
    svg {
      max-width: 100%;
    }
  `;
};
