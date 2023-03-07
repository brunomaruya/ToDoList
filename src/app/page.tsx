import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Input from '@/components/Input';

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto">
      <div className="mt-[-20px]">
        <Input />
      </div>
    </main>
  );
}
