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

  ::-webkit-scrollbar {
        width: 20px;

    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border: 0.5px solid white;
        background: black;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: black;
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

    .Toastify__toast--dark {
        background: black;
        text-align: center;
        font-size: 12px


}

.Toastify__progress-bar--dark {
    color: #EBEAEA;
    background: #EBEAEA
}


  `;

export default GlobalStyle;
