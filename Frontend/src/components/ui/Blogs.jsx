import React from 'react';
import blogImage from '../../assets/blog.png'

const Blogs = () => {
  return (
    <div className="bg-[#EEE4FF] py-16 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className='text-3xl md:text-5xl font-bold text-[#101010] mb-4'>
            Popular News and Blogs
          </h1>
          <p className='max-w-3xl mx-auto text-base md:text-lg text-gray-600'>
            Within the realms of trending news and blogs, you will find a diverse and engaging collection of content that captures the pulses of current discussion.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Blog Card 1 */}
          <div className="bg-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <img src={blogImage} alt=""
            className='w-full h-48 object-cover mb-4 rounded-t-xl'
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[#101010]">Always check your heart rate at all times</h3>
              <p className="text-gray-600 mb-6">
                Explore the latest trends in web development and how modern frameworks are changing the landscape of digital experiences.
              </p>
            </div>
            <div className="px-6 pb-6 ">
              <a href="#" className="text-[#101010] font-medium  inline-flex items-center px-4 py-2 bg-transparent border-[#10101066] border-[0.95px] rounded-[16px]">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <img src={blogImage} alt=""
            className='w-full h-48 object-cover mb-4 rounded-t-xl'
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[#101010]">Always check your heart rate at all times</h3>
              <p className="text-gray-600 mb-6">
                Discover the fundamental principles of user experience design that every developer should know to create intuitive interfaces.
              </p>
            </div>
            <div className="px-6 pb-6 ">
              <a href="#" className="text-[#101010] font-medium  inline-flex items-center px-4 py-2 bg-transparent border-[#10101066] border-[0.95px] rounded-[16px]">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <img src={blogImage} alt=""
            className='w-full h-48 object-cover mb-4 rounded-t-xl'
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[#101010]">Always check your heart rate at all times</h3>
              <p className="text-gray-600 mb-6">
                Why designing for mobile first leads to better user experiences and how to implement this strategy in your projects.
              </p>
            </div>
            <div className="px-6 pb-6 ">
              <a href="#" className="text-[#101010] font-medium  inline-flex items-center px-4 py-2 bg-transparent border-[#10101066] border-[0.95px] rounded-[16px]">
                Read More
              </a>
            </div>
          </div>
          {/* Blog Card 4 */}
          <div className="bg-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <img src={blogImage} alt=""
            className='w-full h-48 object-cover mb-4 rounded-t-xl'
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[#101010]">Always check your heart rate at all times</h3>
              <p className="text-gray-600 mb-6">
                Why designing for mobile first leads to better user experiences and how to implement this strategy in your projects.
              </p>
            </div>
            <div className="px-6 pb-6 ">
              <a href="#" className="text-[#101010] font-medium  inline-flex items-center px-4 py-2 bg-transparent border-[#10101066] border-[0.95px] rounded-[16px]">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;