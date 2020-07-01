import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  width: 100%;
  color: coral;
  background: bisque;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Planner</h1>
      <p>A way to keep your schedules</p>
    </Container>
  );
};

export default Header;
