'use client';
import React, { createContext, ReactNode, useState } from 'react';

type TasksContextType = {
  tasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TasksContext = createContext({} as TasksContextType);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState(['task1', 'task2']);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
