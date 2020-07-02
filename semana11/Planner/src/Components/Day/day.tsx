import React from 'react';
import { DayProps, Task } from '../../Types/interfaces';
import useTasks from '../../Hooks/useTask';

const Day = ({ day }: DayProps) => {
  const [tasks] = useTasks();

  return (
    <>
      <h1 data-testid="day-title">{day}</h1>
      {tasks.map((item: Task) =>
        item.day === day ? <li key={item.id}>{item.text}</li> : <></>,
      )}
    </>
  );
};

export default Day;
