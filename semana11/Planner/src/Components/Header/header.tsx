import React from 'react';
import { Container } from './header_styles';
import TaskCreator from '../TaskCreator/taskcreator';

const Header = () => {
  return (
    <Container>
      <TaskCreator />
      <div>
        <h1 data-testid="logo">Planner</h1>
        <p>A way to keep your schedules</p>
      </div>
    </Container>
  );
};

export default Header;
