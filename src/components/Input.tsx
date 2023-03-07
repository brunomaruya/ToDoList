import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';

export default function Input() {
  const { addTask, handleOnChange } = useContext(TasksContext);
  return (
    <div className="flex gap-2 shadow-xl">
      <input
        className="bg-gray-800 rounded-lg py-2 px-4 w-full text-white"
        placeholder="Add a New Task"
        type="text"
        onChange={handleOnChange}
      />{' '}
      <button
        className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:brightness-75 active:brightness-50"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
}
