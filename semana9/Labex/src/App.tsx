import GlobalStyle from './Global/global_styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Routes from './Pages/routes';

function App() {
    return (
        <>
            <ToastContainer position="bottom-center" />
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </>
    );
}

export default App;
