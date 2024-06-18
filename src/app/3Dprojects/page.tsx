import Header from '@/components/Header';
import Projects3D from '@/components/Projects3D';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';

export default function ChatPage() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Projects3D />
    </ThemeProvider>
    </>
  );
}
