import { Task } from '../../Types/interfaces';
import planner from '../../Services/planner';

export const createTask = async (task: Task) => {
  await planner.post('', task).catch((error) => {
    console.error(error);
  });
};
