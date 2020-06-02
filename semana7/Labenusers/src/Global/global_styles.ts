import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
     }


    body {
     -webkit-font-smoothing: antialiased;
     background: #121214;
     color: white;
     text-align: center;
     padding: 50px;
     }

    a{
        text-decoration: none;
        color:white;

    }

    h1{
      margin: 50px;

     }

    button {
     cursor: pointer;
     padding: 10px;
     background: #7159c1;
     border: none;
     outline: none;
     font-weight: bold;
     width: 300px;
     color: white
    }

  input{
      color: #7159c1;
      font-weight: bold;
      background: #202024;
      border: none;
      padding: 10px;
      width: 300px;

  }

  input::placeholder{
      color: gray
  }

  #root {
       max-width: 1020px;
       margin: 0 auto;
       padding: 0 20px 50px;
   }
  `;

export default GlobalStyle;
