import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const Home = () => {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
