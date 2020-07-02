import React from 'react';
import { days } from '../../Assets/json/days';
import Day from '../Day/day';
import { Container } from './week_styles';

const Week: React.FC = () => {
  return (
    <Container>
      {days.map((item) => (
        <Day key={Date.now()} day={item} />
      ))}
    </Container>
  );
};

export default Week;
