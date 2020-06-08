import React from 'react';
import GlobalStyle from './Global/global_styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/header';
import Routes from './routes';

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes />
            </Router>
        </>
    );
}

export default App;
