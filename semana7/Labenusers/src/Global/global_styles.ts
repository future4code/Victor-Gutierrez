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
  }

  button {
   cursor: pointer;
  }

  #root {
       max-width: 1020px;
       margin: 0 auto;
       padding: 0 20px 50px;
   }


  `;

export default GlobalStyle;
