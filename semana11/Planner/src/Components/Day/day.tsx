import React, { useState, useEffect } from 'react';
import { Task } from '../../Types/interfaces';
import planner from '../../Services/planner';

const Day: React.FC = ({ day }) => {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  useEffect(() => {
    planner.get('').then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <>
      <h1>{day}</h1>
      {tasks.map((item) => {
        if (item.day === day) {
          return <li key={item.text}>{item.text}</li>;
        }
      })}
    </>
  );
};

export default Day;
