import GlobalStyle from './Global/global_styles';
import React from 'react';
import Header from './Components/Header/header';
import Week from './Components/Week/week';
import SmartReloadProvider from './Context/smartReload/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="bottom-right" />
      <SmartReloadProvider>
        <Header />

        <Week />
      </SmartReloadProvider>
    </>
  );
}

export default App;
