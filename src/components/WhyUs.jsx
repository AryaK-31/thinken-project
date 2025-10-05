import React from "react";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-950 to-black text-white px-4 md:px-10 py-8 h-[80vh]">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          The One-Stop Shop for <br />
          <span className="text-white">Automotive Enthusiasts</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/20 text-white gap-2">
          <div className="border-b sm:border-b-0 sm:border-r border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Free in-store
              <br />
              or curbside pickup
            </p>
          </div>
          <div className="border-b sm:border-b-0 border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Personalized care including
              <br />
              battery testing and installation
            </p>
          </div>
          <div className="sm:border-r border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Certified
              <br />
              technicians only
            </p>
          </div>
          <div className="p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Get points for every purchase.
              <br />
              Redeem points for rewards
            </p>
          </div>
        </div>

        <button
          className="self-start bg-cyan-400 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Explore Now
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end h-full">
        <img
          src="https://images.pexels.com/photos/12227356/pexels-photo-12227356.jpeg"
          alt="Tower"
          className="h-full object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyUs;
