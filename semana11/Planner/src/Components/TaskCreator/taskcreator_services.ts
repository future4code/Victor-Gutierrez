import { Task } from '../../Types';
import planner from '../../Services/planner';
import { toast } from 'react-toastify';

export const createTask = async (task: Task) => {
  await planner.post('', task).then(() => {
    toast.success("Tarefa criada com sucesso!")
  }).catch((error) => {
    console.error(error);
    toast.error("Houve um erro na criação da sua tarefa")
  });
};
