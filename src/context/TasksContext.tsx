'use client';
import React, { createContext, ReactNode, useState } from 'react';

type TasksContextType = {
  tasks: string[];
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const values = { tasks, setTasks };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
