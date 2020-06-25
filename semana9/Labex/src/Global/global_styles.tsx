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

  .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
    }

  `;

export default GlobalStyle;
