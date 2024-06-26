import React from 'react';

const Projects = () => {
  return (
    <section className="p-8 mt-12">
      <h2 className="text-5xl font-bold mb-4">Projects</h2>
      <h3 className="text-3xl font-bold mb-4">Web projects</h3>
      <div className="grid gap-8 grid-cols-1 mb-4 md:grid-cols-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://alibuild.vercel.app" className="text-gradient text-gradient-hover">AliBuild</a>
          </h3>
          <p>🏡 AI integrated website for imaginary construction company.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://yera-book-shelf.vercel.app" className="text-gradient text-gradient-hover">BookShelf</a>
          </h3>
          <p>📖 A web application, that allows to find any book and ask any questions about it from AI chat.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://yera-chef-in.vercel.app" className="text-gradient text-gradient-hover">Chef.in</a>
          </h3>
          <p>🍲 Chef.in is a web application for <span className='text-green-500'><a href="https://www.nfactorial.school">nFactorial</a></span> Incubator, that allows users to find, share and discuss cooking recipes. It has searching function with variety of recipes and AI adviser.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://halykpass.vercel.app" className="text-gradient text-gradient-hover">HalykPass</a>
          </h3>
          <p>🏦 A web application for Halyk OIY Hackathon, with AI advisory, which helps to navigate through the <span className='text-green-500'><a href="https://halykbank.kz/">HalykBank</a></span> website.</p>
        </div>
      </div>
      <h3 className="text-3xl font-bold"><a href='/3Dprojects'>3D projects</a></h3>
      <div className="grid gap-8 grid-cols-1 mt-4 md:grid-cols-2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="" className="text-gradient text-gradient-hover">Porcshe 911 GT3RS</a>
          </h3>
          <p>🏎️ In process...</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://sketchfab.com/3d-models/wagon-73eed6735927434aa1770766621f16c2" className="text-gradient text-gradient-hover">Wagon</a>
          </h3>
          <p>🚃 Detailed 3D model of wagon made throughout the free Kaino Wagon course.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://sketchfab.com/3d-models/football-141073dcdf8b406089ed469027640d50" className="text-gradient text-gradient-hover">Football</a>
          </h3>
          <p>⚽ Simple shaped football/soccer ball with white and black colors.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">
            <a href="https://sketchfab.com/3d-models/basketball-212c9cd541004c2cbfed6f1dd980de95" className="text-gradient text-gradient-hover">Basketball</a>
          </h3>
          <p>🏀 Simple shaped basketball colored in original orange and black.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;