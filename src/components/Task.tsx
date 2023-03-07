import { Trash } from 'phosphor-react';
import React from 'react';

export default function Task({ taskText }: { taskText: string }) {
  return (
    <div className="flex justify-between rounded-lg items-center gap-2 py-2 px-4 bg-gray-800 border-gray-600 border-[1px]">
      <input
        type="checkbox"
        id={taskText}
        className=" checked:bg-violet-500  rounded-full"
      />
      <label htmlFor={taskText}>{taskText}</label>
      <div className="ml-auto">
        <Trash />
      </div>
    </div>
  );
}
