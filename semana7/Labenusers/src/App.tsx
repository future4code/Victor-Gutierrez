import React from 'react';
import GlobalStyle from './Global/global_styles';
import Homepage from './Pages/Homepage/homepage';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <ToastContainer />
            <Homepage />
            <GlobalStyle />
        </>
    );
}

export default App;
