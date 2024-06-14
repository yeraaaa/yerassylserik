import React from 'react';
import ModelViewer from "@/components/ModelViewer";

const Projects3D = () => {
  return (
    <section className="p-4 md:p-8 mt-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <a href='https://sketchfab.com/yeraaaa/models' className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 hover:underline">3D Projects</a>
      </h2>
      <div className="mt-4 grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              <a href="https://sketchfab.com/3d-models/football-141073dcdf8b406089ed469027640d50">Football</a>
            </h3>
            <p className='mb-4 font-medium text-white'>Simple shaped football/soccer ball with white and black colors.</p>
            <div className='flex justify-center'>
              <ModelViewer scale={30} modelPath={"/models/football.glb"} />
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              <a href="https://sketchfab.com/3d-models/basketball-212c9cd541004c2cbfed6f1dd980de95">Basketball</a>
            </h3>
            <p className='mb-4 font-medium text-white'>Simple shaped basketball colored in original orange and black.</p>
            <div className='flex justify-center'>
              <ModelViewer scale={30} modelPath={"/models/basketball.glb"} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              <a href="https://sketchfab.com/3d-models/car-eecb5e6e305a41629b58ec1658a6b13a">Car</a>
            </h3>
            <p className='mb-4 font-medium text-white'>Low-poly 3D model of a car, featuring a sporty design. The car is predominantly white with orange accents, including a central stripe on the hood and orange highlights on the sides and front bumper.</p>
            <div className='flex justify-center'>
              <ModelViewer scale={30} modelPath={"/models/car.glb"} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              <a href="https://sketchfab.com/3d-models/wagon-73eed6735927434aa1770766621f16c2">Wagon</a>
            </h3>
            <p className='mb-4 font-medium text-white'>Detailed 3D model of wagon made throughout the free Kaino Wagon course.</p>
            <div className='flex justify-center'>
              <ModelViewer scale={30} modelPath={"/models/kaino.glb"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
