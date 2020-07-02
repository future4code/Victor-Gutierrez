import planner from '../../Services/planner';

export const deleteTask = async (id: string) => {
  await planner.delete(`/${id}`).catch((error) => {
        console.error(error)
    })
}
