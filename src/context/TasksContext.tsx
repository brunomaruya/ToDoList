'use client';
import React, { createContext, ReactNode, useState } from 'react';

type TasksContextType = {
  tasks: string[];
  addTask: () => void;
  task: string;
  setTask: any;
  handleOnChange: () => void;
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const values = { tasks, setTasks, addTask, task, setTask, handleOnChange };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
