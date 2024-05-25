import React from 'react';

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-5xl font-bold mb-4">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://github.com/yeraaaa/AliBuild" className="text-gradient text-gradient-hover">AliBuild</a>
          </h3>
          <p>🏡 AI integrated website for imaginary construction company.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://github.com/yeraaaa/BookShelf" className="text-gradient text-gradient-hover">BookShelf</a>
          </h3>
          <p>📖 A web application, that allows to find any book and ask any questions about it from AI chat.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://github.com/yeraaaa/Chef.in" className="text-gradient text-gradient-hover">Chef.in</a>
          </h3>
          <p>🍲 Chef.in is a web application for <span className='text-green-500'><a href="https://www.nfactorial.school/">nFactorial</a></span> Incubator, that allows users to find, share and discuss cooking recipes. It has searching function with variety of recipes and AI adviser.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://example.com/hakykpass" className="text-gradient text-gradient-hover">HakykPass</a>
          </h3>
          <p>🏦 A web application for Halyk OIY Hackathon, with AI advisory, which helps to navigate through the <span className='text-green-500'><a href="https://halykbank.kz/">HalykBank</a></span> website.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
  