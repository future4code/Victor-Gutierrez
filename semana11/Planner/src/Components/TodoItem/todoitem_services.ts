import planner from '../../Services/planner';
import { toast } from 'react-toastify';

export const deleteTask = async (id: string) => {
  await planner.delete(`/${id}`).then(() =>  toast.success("Tarefa deletada com sucesso")).catch((error) => {
        console.error(error)
    })
}
