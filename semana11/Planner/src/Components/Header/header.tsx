import React from 'react';
import { Container } from './header_styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Planner</h1>
      <p>A way to keep your schedules</p>
    </Container>
  );
};

export default Header;
