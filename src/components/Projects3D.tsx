import React from 'react';
import Spline from "@splinetool/react-spline"

const Projects3D = () => {
  return (
    <section className="p-8 mt-12">
      <h2 className="text-5xl font-bold mb-4">3D Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded shadow h-100">
            <h3 className="text-2xl font-bold mb-2">
              <a href="https://sketchfab.com/3d-models/football-141073dcdf8b406089ed469027640d50">Football</a>
            </h3>
            <p className='mb-4 font-medium'>⚽ Simple shaped football/soccer ball with white and black colors.</p>
            <Spline scene="https://prod.spline.design/Pma9KxRaB4Onot8L/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
