import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-blue-gradient-from to-purple-blue-gradient-to text-white p-4 flex justify-center items-center">
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/yerassylserik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/in/yerassyl-serik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/yeraaaa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaGithub size={30} />
        </a>
        <a href="mailto:serikyer0204@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaEnvelope size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
