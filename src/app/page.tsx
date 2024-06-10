import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import About from '@/components/About';

const Home = () => {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
