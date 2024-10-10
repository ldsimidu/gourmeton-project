import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  h1, h2, h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
