import React, { useState } from 'react';
import { Task } from '../../Types/interfaces';
import { days } from '../../Assets/json/days';
import planner from '../../Services/planner';

const TaskCreator: React.FC = () => {
  const [task, setTask] = useState<Task>({} as Task);

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, id } = e.target;
    setTask({ ...task, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await planner.post('', task);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Tarefa</label>
        <input
          required
          data-testid="task-input"
          onChange={handleInput}
          type="text"
          id="text"
        />
        <label htmlFor="day">Dia da tarefa</label>
        <select
          data-testid="day-input"
          required
          onChange={handleInput}
          id="day"
        >
          <option value=""></option>
          {days.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </>
  );
};

export default TaskCreator;
