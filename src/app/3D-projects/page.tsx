import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';

export default function ChatPage() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Footer />
    </ThemeProvider>
    </>
  );
}
