import { useState, useEffect } from 'react';
import { Task } from '../Types/interfaces';
import planner from '../Services/planner';

//Why ? I did not want this function to render and call API seven times
// not sure about this fix but it made sense to me at this point

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  useEffect(() => {
    planner
      .get('')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return [tasks];
};

export default useTasks;
