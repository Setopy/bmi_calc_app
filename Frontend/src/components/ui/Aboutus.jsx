import React from 'react';
import aboutImage from '../../assets/about.png';

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-[#ffffff] text-[#101010] px-6 md:px-20">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={aboutImage} alt="BMI Calculator" className="w-3/4 md:w-full max-w-sm md:max-w-lg" />
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">We care for you,<br/> we write for you</h1>
        <p className="text-md md:text-lg text-gray-600">
        BMI is a growing community working towards changing the way individuals think and act about their health, how to manage it.
        </p>
        <button className="bg-[#163326] text-white px-6 py-3 rounded-[16px] hover:bg-[#0E4E30] transition duration-300">
        Join our Community
        </button>
      </div>

      
    </div>
  );
};

export default Aboutus;

