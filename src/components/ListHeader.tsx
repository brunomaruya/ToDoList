import { TasksContext } from '@/context/TasksContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { useContext, useEffect, useState } from 'react';

interface ITasks {
  text: string;
  isDone: boolean;
}

export default function ListHeader() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [doneTasks, setDoneTasks] = useLocalStorage<ITasks[]>('done-tasks', []);

  useEffect(() => {
    console.log(tasks);
    setDoneTasks(tasks.filter((task) => task.isDone === true));
    console.log('useeffect');
  }, [tasks, setTasks]);

  return (
    <div className="flex justify-between">
      <div className="text-blue-700">
        Taks{' '}
        <span className="text-white bg-gray-700 px-1 rounded-xl text-xs">
          {tasks.length}
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
