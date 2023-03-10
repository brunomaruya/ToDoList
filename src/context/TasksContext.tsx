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
  addTask: () => void;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeTask: (taskText: string) => void;
  doneTasks: any;
  setDoneTasks: any;
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<ITasks[]>('tasks', []);
  const [task, setTask] = useState<string>('');
  const [doneTasks, setDoneTasks] = useLocalStorage<ITasks[]>('done-tasks', []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { text: task, isDone: false, id: Date.now() }]);
    setTask('');
  };
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => String(task.id) !== taskId));
  };

  const values = {
    tasks,
    setTasks,
    addTask,
    task,
    setTask,
    handleOnChange,
    removeTask,
    setDoneTasks,
    doneTasks,
  };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
