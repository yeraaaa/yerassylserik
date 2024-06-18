import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';

export default function ChatPage() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Projects />
    </ThemeProvider>
    </>
  );
}
