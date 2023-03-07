import { TasksContext } from '@/context/TasksContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Trash } from 'phosphor-react';
import React, { useContext, useState } from 'react';

interface ITasks {
  text: string;
  isDone: boolean;
}
interface ITask {
  task: ITasks;
}

export default function Task({ task }: ITask) {
  const { removeTask, setTasks, tasks } = useContext(TasksContext);
  const [isChecked, setIsChecked] = useLocalStorage('check', false);

  return (
    <div className="flex justify-between rounded-lg items-center gap-2 py-2 px-4 bg-gray-800 border-gray-600 border-[1px]">
      <input
        type="checkbox"
        checked={isChecked}
        id={task.text}
        className=" checked:bg-violet-500  rounded-full"
        onChange={(e) => {
          setIsChecked(e.target.checked);
          tasks.map((mapTask) => {
            if (mapTask.text === task.text) {
              task.isDone = isChecked;
            }
          });
        }}
      />
      <label className={isChecked ? 'line-through' : ''} htmlFor={task.text}>
        {task.text}
      </label>
      <div className="ml-auto">
        <Trash
          className="hover:cursor-pointer"
          onClick={() => removeTask(task.text)}
        />
      </div>
    </div>
  );
}
