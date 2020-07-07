import React from 'react';
import { days } from '../../Assets/json/days';
import Day from '../Day/day';
import { Container } from './week_styles';

const Week = () => {
  return (
    <Container data-testid="day-container">
      {days.map((item) => (
        <Day key={item} day={item} />
      ))}
    </Container>
  );
};

export default Week;
