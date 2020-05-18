import React from "react";
import { GlobalStyle } from "./styledcomponents/GlobalStyles";
import Form from "./components/Form/Form";
import Header from "./components/Header/header";

function App() {
    return (
        <>
            <Header />
            <Form />
            <GlobalStyle />
        </>
    );
}

export default App;
