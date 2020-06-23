import GlobalStyle from './Global/global_styles';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Routes from './routes';

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </>
    );
}

export default App;
