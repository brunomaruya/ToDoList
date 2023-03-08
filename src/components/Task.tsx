import { TasksContext } from '@/context/TasksContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Trash } from 'phosphor-react';
import React, { useContext, useEffect, useState } from 'react';

interface ITasks {
  text: string;
  isDone: boolean;
  id: number;
}
interface ITask {
  task: ITasks;
}

export default function Task({ task }: ITask) {
  const { removeTask, setTasks } = useContext(TasksContext);
  const [isChecked, setIsChecked] = useLocalStorage('check', task.isDone);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, isDone: isChecked } : t))
    );
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(false);
  }, []);

  return (
    <div className="flex justify-between rounded-lg items-center gap-2 py-2 px-4 bg-gray-800 border-gray-600 border-[1px]">
      <input
        type="checkbox"
        checked={isChecked}
        id={String(task.id)}
        className=" checked:bg-violet-500  rounded-full"
        onChange={() => handleCheckBoxChange()}
      />
      <label className={isChecked ? 'line-through' : ''} htmlFor={task.text}>
        {task.text}
      </label>
      <div className="ml-auto">
        <Trash
          className="hover:cursor-pointer"
          onClick={() => removeTask(String(task.id))}
        />
      </div>
    </div>
  );
}
