import { Scroll } from 'phosphor-react';
import React from 'react';

export default function Empty() {
  return (
    <div className="text-gray-500 flex flex-col items-center border-t-2 border-gray-500">
      <Scroll className="mt-12 mb-5 text-6xl" />
      <div>You don&apos;t have any taks yet</div>
      <div>Add tasks and organize your items to do</div>
    </div>
  );
}
