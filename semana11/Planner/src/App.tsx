import GlobalStyle from './Global/global_styles';
import React from 'react';
import Header from './Components/Header/header';
import TaskCreator from './Components/TaskCreator/taskcreator';
import Week from './Components/Week/week';
import SmartReloadProvider from './Context/smartReload/provider';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SmartReloadProvider>
        <TaskCreator />
        <Week />
      </SmartReloadProvider>
    </>
  );
}

export default App;
