import planner from '../../Services/planner';
import { toast } from 'react-toastify';

export const deleteTask = async (id: string) => {
  await planner.delete(`/${id}`).then(() =>  toast.success("Tarefa deletada com sucesso")).catch((error) => {
        console.error(error)
    })
}

export const completeTask = async (id: string) => {
  await planner.put(`/${id}`, { done: true }).then(() => toast.success("Tarefa completa!")).catch((error) => {
    console.error(error)
  })
}

export const editTask = async (id: string, newText: string) => {
  await planner.put(`/${id}`, { text: newText }).then(() => toast.success("Tarefa editada!")).catch((error) => {
    console.error(error)
  })
}