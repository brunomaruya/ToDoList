'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { createContext, ReactNode, useState } from 'react';

interface ITasks {
  text: string;
  isDone: boolean;
  id: number;
}

type TasksContextType = {
  tasks: ITasks[];
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  doneTasks: ITasks[];
  setDoneTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
  addTask: () => void;
  removeTask: (taskId: string) => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<ITasks[]>('tasks', []);
  const [task, setTask] = useState<string>('');
  const [doneTasks, setDoneTasks] = useLocalStorage<ITasks[]>('done-tasks', []);

  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, { text: task, isDone: false, id: Date.now() }]);
    }
    setTask('');
  };
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => String(task.id) !== taskId));
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const values = {
    tasks,
    setTasks,
    task,
    setTask,
    doneTasks,
    setDoneTasks,
    addTask,
    removeTask,
    handleOnChange,
  };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
