import React from 'react';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-[#ffffff] text-[#101010] px-6 md:px-20">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Effortlessly Check Your Health Status with a Single Click</h1>
        <p className="text-md md:text-lg text-gray-600">
          Explore your health status with the help of our BMI AI. Understanding your Body Mass Index can provide valuable insights into your wellbeing. Because your health matters to us.
        </p>
        <button className="bg-[#163326] text-white px-6 py-3 rounded-[16px] hover:bg-[#0E4E30] transition duration-300">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={heroImage} alt="BMI Calculator" className="w-3/4 md:w-full max-w-sm md:max-w-lg" />
      </div>
      
    </div>
  );
};

export default Hero;

