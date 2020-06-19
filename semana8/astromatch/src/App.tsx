import GlobalStyle from './Global/global_styles';
import PageDrawer from './Pages/PageDrawer';
import Provider from './Global/provider';
import React from 'react';

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider>
                <PageDrawer />
            </Provider>
        </>
    );
}

export default App;
