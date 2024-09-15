import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-primary -z-10">
      <div className="flex flex-col items-center justify-center py-32">
        <div className="flex items-center justify-center">
          <hr className="horLine" />
          <h3 className="text-white uppercase tracking-wide text-2xl font-bold monaBold">
            Full service design agency
          </h3>
        </div>

        <h1 className="text-white text-5xl uppercase font-extrabold tracking-wider monaBlack my-3">
          for Agencies & for brands
        </h1>

        <h3 class="text-xl monaSemibold font-semibold text-white">
          Delivering creative & digital solutions that drive results
        </h3>
      </div>
    </div>
  );
};

export default Hero;
