import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const Blogs = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-32 px-8 bg-[#FFF9EF]">
      
      <div className="container mx-auto">

        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Blogs
          </h2>
          <p className="text-lg text-gray-600">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Box 1 */}
          <div className="flex flex-col items-center bg-transparent rounded-lg">
            <div className="w-full h-[410px] mb-3">
              <img
                src="/images/blog1.png"
                alt="Blog 1"
                className="w-full h-[393px] object-cover rounded-lg"
              />
            </div>
            <p className="text-md text-gray-600 mb-3 px-4 text-center">
              Going all-in with millennial design
            </p>
            <div className="text-center">
              <a
                href="#"
                className="text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800 mb-3">
                Read More
              </a>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-600" />
                <span className="text-sm text-gray-600">5 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-sm text-gray-600">Dec 5&#44; 2024</span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center bg-transparent rounded-lg">
            <div className="w-full h-[410px] mb-3">
              <img
                src="/images/blog2.png" 
                alt="Blog 2"
                className="w-full h-[393px] object-cover rounded-lg"
              />
            </div>
            <p className="text-md text-gray-600 mb-3 px-4 text-center">
              Going all-in with millennial design
            </p>
            <div className="text-center">
              <a
                href="#"
                className="text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
                Read More
              </a>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-600" />
                <span className="text-sm text-gray-600">4 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-sm text-gray-600">Nov 28&#44; 2024</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center bg-transparent rounded-lg">
            <div className="w-full h-[410px] mb-3">
              <img
                src="/images/blog3.png"
                alt="Blog 3"
                className="w-full h-[393px] object-cover rounded-lg"
              />
            </div>
            <p className="text-md text-gray-600 mb-3 px-4 text-center">
              Going all-in with millennial design
            </p>
            <div className="text-center">
              <a
                href="#"
                className="text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
                Read More
              </a>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-600" />
                <span className="text-sm text-gray-600">6 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-sm text-gray-600">Nov 20&#44; 2024</span>
              </div>
            </div>
          </div>

        </div>

    
        <div className="text-center mt-12">
          <Link href="#">
            <button className="text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
              View All Posts
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
