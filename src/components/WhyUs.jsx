import React from "react";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-950 to-black text-white px-4 md:px-10 py-8 h-[80vh]">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full">
        <h1 className="text-3xl md:text-3xl font-bold leading-tight">
          What We Bring to the Table: <br />
          <span className="text-white">
            Reliability, Flexibility, and Proven Results
          </span>
        </h1>
        <p className="text-gray-300 max-w-md">
          With proven expertise in delivering high-performance engineering
          solutions, we specialize in designing and manufacturing equipment that
          meets the toughest industrial demands — from reactors, heat
          exchangers, and dryers to material handling systems, thermal
          solutions, and process-specific innovations.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-white gap-2 rounded-3xl">
          <div className="border-b sm:border-b-0 sm:border-r border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Faster Delivery
              <br />
              On time, every time.
            </p>
          </div>
          <div className="border-b sm:border-b-0 border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Cost-Effective <br />
              Quality without the extra cost
            </p>
          </div>
          <div className="sm:border-r border-white/20 p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Custom Solutions
              <br />
              Built around your needs
            </p>
          </div>
          <div className="p-4 bg-black bg-opacity-20 rounded">
            <p className="font-medium">
              Certified Quality
              <br />
              Standards you can trust.
            </p>
          </div>
        </div>

        <button className="self-start bg-cyan-400 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
