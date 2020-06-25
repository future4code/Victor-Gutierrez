import GlobalStyle from './Global/global_styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Routes from './routes';

function App() {
    return (
        <>
            <ToastContainer />
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </>
    );
}

export default App;
