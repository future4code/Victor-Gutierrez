import { useState, useEffect, useContext } from 'react';
import { Task } from '../Types';
import planner from '../Services/planner';
import { smartReloadContext } from '../Context/smartReload/smartReload';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);
  const { reloadSwitch } = useContext(smartReloadContext);

  useEffect(() => {
    getTasks();
  }, [reloadSwitch]);

  const getTasks = async () => {
    await planner
      .get('/')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return [tasks];
};

export default useTasks;
