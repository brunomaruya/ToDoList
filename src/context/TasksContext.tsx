'use client';
import React, { createContext, ReactNode, useState } from 'react';

type TasksContextType = {
  tasks: String[];
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<String[]>(['task1', 'task2']);
  const values = { tasks, setTasks };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
