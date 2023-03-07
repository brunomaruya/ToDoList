import React from 'react';

export default function ListHeader() {
  return (
    <div className="flex justify-between">
      <div className="text-blue-700">
        Taks{' '}
        <span className="text-white bg-gray-700 px-1 rounded-xl text-xs">
          0
        </span>
      </div>
      <div className="text-violet-800">
        Done{' '}
        <span className="text-white bg-gray-700 px-1 rounded-xl text-xs">
          0
        </span>
      </div>
    </div>
  );
}
