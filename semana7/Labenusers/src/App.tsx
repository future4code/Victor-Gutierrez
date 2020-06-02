import React from 'react';
import GlobalStyle from './Global/global_styles';
import Homepage from './Pages/Homepage/homepage';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Homepage />
            <GlobalStyle />
        </>
    );
}

export default App;
