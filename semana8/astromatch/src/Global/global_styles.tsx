import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Cabin', sans-serif;
  }

  body {
     -webkit-font-smoothing: antialiased;
     background: #FF5A55;
     overflow: hidden;




  }

  button {
   cursor: pointer;
  }

  #root {
       max-width: 1320px;
       margin: 0 auto;
       padding: 0 20px 50px;

   }


  `;

export default GlobalStyle;
