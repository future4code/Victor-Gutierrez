import React, { useState, useContext } from 'react';
import { Task } from '../../Types';
import { days } from '../../Assets/json/days';
import { createTask } from './taskcreator_services';
import { Container } from './taskcreator_styles';
import { smartReloadContext } from '../../Context/smartReload/smartReload';

const TaskCreator = () => {
  const [task, setTask] = useState<Task>({ ...({} as Task), text: '' });
  const { Load } = useContext(smartReloadContext);
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
    await createTask(task)
      .then(() => {
        setTask({ ...task, text: '' });
        Load();
      })
      .catch(() => {
        setTask({ ...task, text: '' });
      });
  };

  return (
    <Container>
      <h5>Crie sua tarefa</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Nome da tarefa</label>
        <input
          required
          data-testid="task-input"
          onChange={handleInput}
          type="text"
          id="text"
          value={task.text}
          placeholder="Insira um nome"
        />
        <label htmlFor="day">Dia da tarefa</label>
        <select
          data-testid="day-input"
          required
          onChange={handleInput}
          id="day"
        >
          <option value="">Selecione o dia</option>
          {days.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button data-testid="createButton" type="submit">
          Criar Tarefa
        </button>
      </form>
    </Container>
  );
};

export default TaskCreator;
