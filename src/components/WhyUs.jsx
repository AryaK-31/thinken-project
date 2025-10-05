import React from "react";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-red-950 to-black text-white px-4 md:px-10 py-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The One-Stop Shop for <br />
          <span className="text-white">Automotive Enthusiasts</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-white-600 text-white">
          {/* Box 1 */}
          <div className="border-b sm:border-b-1 sm:border-r border-white-600 p-6 bg-black bg-opacity-5">
            <p className="font-medium">
              Free in-store
              <br />
              or curbside pickup
            </p>
          </div>

          {/* Box 2 */}
          <div className="border-b sm:border-b-1 border-white-600 p-6 bg-black bg-opacity-5">
            <p className="font-medium">
              Personalized care including
              <br />
              battery testing and installation
            </p>
          </div>

          {/* Box 3 */}
          <div className="sm:border-r border-white-600 p-6 bg-black bg-opacity-5">
            <p className="font-medium">
              Certified
              <br />
              technicians only
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-6 bg-black bg-opacity-5">
            <p className="font-medium">
              Get points for every purchase.
              <br />
              Redeem points for rewards
            </p>
          </div>
        </div>

        <button className="mt-1 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-black font-semibold transition">
          Learn More
        </button>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src="https://images.pexels.com/photos/12227356/pexels-photo-12227356.jpeg"
          alt="Tower"
          className="w-11/12 max-w-xl object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyUs;
