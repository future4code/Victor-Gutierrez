import React from 'react';
import { days } from '../../Assets/json/days';
import Day from '../Day/day';

const Week: React.FC = () => {
  return (
    <>
      {days.map((item) => (
        <Day key={Date.now()} day={item} />
      ))}
    </>
  );
};

export default Week;
