import GlobalStyle from './Global/global_styles';
import React from 'react';
import Header from './Components/Header/header';
import TaskCreator from './Components/TaskCreator/taskcreator';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskCreator />
    </>
  );
}

export default App;
