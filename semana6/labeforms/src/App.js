import React from "react";
import { GlobalStyle } from "./styledcomponents/GlobalStyles";
import Form from "./components/Form/Form";
import Header from "./components/Header/header";

function App() {
    return (
        <>
            <Header /> {/* Aqui se encontram os componentes do Header */}
            <Form /> {/* Aqui se encontra toda a lógica do formulário */}
            <GlobalStyle />  {/* Aqui se encontram estilos globais do meu template React */}
        </>
    );
}

export default App;
