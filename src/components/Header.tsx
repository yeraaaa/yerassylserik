'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-r from-purple-blue-gradient-from to-purple-blue-gradient-to z-50">
      <h1 className="text-2xl text-white"><a href="/">Yerassyl Serik</a></h1>
      <div className="flex items-center space-x-8">
        <nav className="flex space-x-4">
          <a href="/projects" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">Projects</a>
          <a href="/honors" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">Honors</a>
          <a href="/activities" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">Activities</a>
        </nav>
        <button
          onClick={toggleTheme}
          className="bg-white text-black px-4 py-2 rounded flex items-center justify-center transition-colors duration-300"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
