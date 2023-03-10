'use client';
import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';
import Task from './Task';

export default function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      <div className="flex flex-col gap-3 text-white">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
