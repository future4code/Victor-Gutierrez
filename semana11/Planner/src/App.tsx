import GlobalStyle from './Global/global_styles';
import React from 'react';
import Header from './Components/Header/header';
import TaskCreator from './Components/TaskCreator/taskcreator';
import Week from './Components/Week/week';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskCreator />
      <Week />
    </>
  );
}

export default App;
