import { TasksContext } from '@/context/TasksContext';
import React, { useContext, useEffect, useState } from 'react';

interface ITasks {
  text: string;
  isDone: boolean;
}

export default function ListHeader() {
  const { tasks } = useContext(TasksContext);
  const [doneTasks, setDoneTasks] = useState<ITasks[]>([]);

  // useEffect(() => {
  //   setDoneTasks(
  //     tasks.filter((task) => {
  //       task.isDone === true;
  //     })
  //   );
  // }, [tasks]);

  return (
    <div className="flex justify-between">
      <div className="text-blue-700">
        Taks{' '}
        <span className="text-white bg-gray-700 px-1 rounded-xl text-xs">
          0
        </span>
      </div>
      <div className="text-violet-800">
        Done{' '}
        <span className="text-white bg-gray-700 px-1 rounded-xl text-xs">
          {doneTasks.length}
        </span>
      </div>
    </div>
  );
}
