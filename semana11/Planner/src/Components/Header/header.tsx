import React from 'react';
import { Container } from './header_styles';
import TaskCreator from '../TaskCreator/taskcreator';

const Header: React.FC = () => {
  return (
    <Container>
      <TaskCreator />
      <div>
        <h1>Planner</h1>
        <p>A way to keep your schedules</p>
      </div>
    </Container>
  );
};

export default Header;
