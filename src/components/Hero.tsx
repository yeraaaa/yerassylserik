'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen transition-colors duration-300 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-[#1a202c] text-white'
      }`}
    >
      <div className={`flex flex-col md:flex-row items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className={`md:w-1/2 md:pr-8 text-center md:text-left transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Hello, I am Yerassyl Serik</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-4">
            I am an active learner, 3D artist, and web developer who is highly interested in creating something new to this world. Let&apos;s follow my journey together!
          </p>
        </div>
        <div className={`mb-8 md:w-1/2 md:mb-0 md:mt-0 flex justify-center md:justify-end transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
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
