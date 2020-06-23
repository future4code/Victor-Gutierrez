import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
     -webkit-font-smoothing: antialiased;
     font-family: 'Raleway', sans-serif;
     background: #171717;

  }

  button {
   cursor: pointer;
  }

  `;

export default GlobalStyle;
