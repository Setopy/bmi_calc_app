import React from 'react';
import AccordionDemo from './accordion';

const FAQ = () => {
  return (
    <div className="bg-[#ffffff] py-16 min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h3 className='text-3xl md:text-3xl font-bold text-[#101010] mb-4'>
                Frequently Asked Questions
                </h3>
                <p className='max-w-3xl mx-auto text-base md:text-lg text-gray-600'>
                A guide to assist you with our services
                </p>
            </div>
            <AccordionDemo/>
        </div>    
        
    </div>
  );
}

export default FAQ;
