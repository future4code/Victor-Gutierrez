import React from 'react';
import { DayProps, Task } from '../../Types';
import useTasks from '../../Hooks/useTask';
import { Container } from '../Day/day_styles';
import TodoItem from '../TodoItem/todoitem';

const Day = ({ day }: DayProps) => {
  const [tasks] = useTasks();

  return (
    <Container>
      <h1 data-testid="day-title">{day}</h1>
      {tasks.map((item: Task) =>
        item.day === day ? (
          <TodoItem id={item.id} text={item.text} key={item.id} />
        ) : (
          <></>
        ),
      )}
    </Container>
  );
};

export default Day;
