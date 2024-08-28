import React from "react";

const Development = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Under Development
        </h1>
        <p className="text-lg md:text-xl">
          We are working hard to bring this page to life. Stay tuned!
        </p>
        <div className="mt-8">
          <div className="w-24 h-24 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Development;
