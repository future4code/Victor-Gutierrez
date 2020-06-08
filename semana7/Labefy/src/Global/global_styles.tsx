import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
     -webkit-font-smoothing: antialiased;
     background-color: #fdfffc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23fdfffc' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23f2f4f2' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23e8e9e7' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23dededd' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23d3d4d3' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23c9c9c9' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

  }

  button {
    cursor: pointer;
   padding: 5px;
   width: 200px;
   border: none;
   outline: none;
   background-color: rgb(255, 255, 255);
   color: #333;
   border-radius: 5px;
   text-align: center;
  }

  button:hover{
      background-color: #333;
      color: white
  }

  input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  margin: 5px auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 100%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  text-align: center;
}

select{
  color: #333;
  margin: 5px;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 100%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  font-size: 10px;

}

option{
    text-align: center;
    font-size: 12px
}

  `;

export default GlobalStyle;
