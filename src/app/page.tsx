'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Input from '@/components/Input';
import { useContext, useState } from 'react';
import ListHeader from '@/components/ListHeader';
import Empty from '@/components/Empty';
import TaskList from '@/components/TaskList';
import { TasksContext, TasksProvider } from '@/context/TasksContext';

export default function Home() {
  const { tasks } = useContext(TasksContext);
  console.log(tasks);

  return (
    <main className="max-w-screen-md mx-auto">
      <div className="mt-[-20px]">
        <Input />
      </div>
      <div className="mt-10">
        <ListHeader />
      </div>
      {tasks && (
        <div className="mt-4">
          {tasks.length > 0 ? <TaskList /> : <Empty />}
        </div>
      )}
    </main>
  );
}
