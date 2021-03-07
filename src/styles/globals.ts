import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.8;
    color: #343a40;
    font-family: 'Noto Sans KR';
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  box-sizing: border-box;
  vertical-align: top;
  }
  article, footer, header, aside, details, header, nav, section {
    display: block;
  }
  img {
    max-width: 100%;
  }
  a {
    color: inherit;
  text-decoration: none;
  }
  h1 {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  p {
    margin: 0;
  }`;

export default GlobalStyle;
