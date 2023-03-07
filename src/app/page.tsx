'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Input from '@/components/Input';
import { useState } from 'react';
import ListHeader from '@/components/ListHeader';
import Empty from '@/components/Empty';

export default function Home() {
  const [tasks, setTasks] = useState(['task1', 'task2']);
  return (
    <main className="max-w-screen-md mx-auto">
      <div className="mt-[-20px]">
        <Input />
      </div>
      <div className="mt-10">
        <ListHeader />
      </div>
      <div className="mt-4">{tasks.length > 0 ? 'test' : <Empty />}</div>
    </main>
  );
}
