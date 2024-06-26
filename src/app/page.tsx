import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { ThemeProvider } from '@/context/ThemeContext';
import About from '@/components/About';

const Home = () => {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
    </ThemeProvider>
  );
};

export default Home;
