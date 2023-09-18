import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle<{ theme: any}>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 10px;
    background-color: #565656;
  }
`