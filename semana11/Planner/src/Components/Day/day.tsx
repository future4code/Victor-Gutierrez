import React from 'react';
import { DayProps, Task } from '../../Types/interfaces';
import useTasks from '../../Hooks/useTask';
import { Container, TaskBox } from '../Day/day_styles';
import { deleteTask } from './day_services';

const Day = ({ day }: DayProps) => {
  const [tasks] = useTasks();

  return (
    <Container>
      <h1 data-testid="day-title">{day}</h1>
      {tasks.map((item: Task) =>
        item.day === day ? (
          <TaskBox key={item.id}>
            {item.text}
            <button onClick={() => deleteTask(item.id)}>Deletar</button>
          </TaskBox>
        ) : (
          <></>
        ),
      )}
    </Container>
  );
};

export default Day;
