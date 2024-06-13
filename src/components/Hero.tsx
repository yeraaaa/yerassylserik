'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen transition-colors duration-300 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-[#1a202c] text-white'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I am Yerassyl Serik</h1>
          <p className="text-lg md:text-xl mb-4">
            I am an active learner, 3D artist and web developer who is highly interested in creating something new to this world. Let&apos;s follow my journey together!
          </p>
        </div>
        <div className="mb-8 md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/profile.jpeg"
            alt="Profile Photo"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
