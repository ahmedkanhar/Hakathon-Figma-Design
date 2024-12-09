import { LuUser, LuCalendar, LuTag } from 'react-icons/lu'; 

const BlogInfo = () => {
  return (
    <div className="w-full px-4 py-16 bg-[#FFFFFF]">
      
      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-[70%]">
          {/* Blog Post 1 */}
          <div className="mb-8 p-4 border border-gray-300 rounded-md shadow-sm">
            <img
              src="/images/bloginfo1.png" 
              alt="Blog 1"
              className="w-full h-auto md:h-[450px] object-cover rounded-md mb-4"
            />
            <div className="flex items-center space-x-6 mb-4"> 
              <div className="flex items-center">
                <LuUser className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Admin</span>
              </div>
              <div className="flex items-center">
                <LuCalendar className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">January 1&#44; 2024</span>
              </div>
              <div className="flex items-center">
                <LuTag className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Wood</span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mb-4">Going all-in with milliniel design </h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor&#44; sit amet consectetur adipisicing elit. Ducimus maiores&#44; esse similique quae ipsam enim repellendus placeat molestiae doloribus nesciunt nihil necessitatibus consequatur&#44; eligendi ea animi fuga incidunt nemo sequi.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          {/* Blog Post 2 */}
          <div className="mb-8 p-4 border border-gray-300 rounded-md shadow-sm">
            <img
              src="/images/bloginfo2.png" 
              alt="Blog 2"
              className="w-full h-auto md:h-[450px] object-cover rounded-md mb-4"
            />
            <div className="flex items-center space-x-6 mb-4"> 
              <div className="flex items-center">
                <LuUser className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Admin</span>
              </div>
              <div className="flex items-center">
                <LuCalendar className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">January 2&#44; 2024</span>
              </div>
              <div className="flex items-center">
                <LuTag className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Wood</span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mb-4">Exploring new ways of decorating</h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor&#44; sit amet consectetur adipisicing elit. Ducimus maiores&#44; esse similique quae ipsam enim repellendus placeat molestiae doloribus nesciunt nihil necessitatibus consequatur&#44; eligendi ea animi fuga incidunt nemo sequi.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          {/* Blog Post 3 */}
          <div className="mb-8 p-4 border border-gray-300 rounded-md shadow-sm">
            <img
              src="/images/bloginfo3.png" 
              alt="Blog 3"
              className="w-full h-auto md:h-[450px] object-cover rounded-md mb-4"
            />
            <div className="flex items-center space-x-6 mb-4"> 
              <div className="flex items-center">
                <LuUser className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Admin</span>
              </div>
              <div className="flex items-center">
                <LuCalendar className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">January 3&#44; 2024</span>
              </div>
              <div className="flex items-center">
                <LuTag className="text-2xl mr-2 text-gray-700" />
                <span className="text-gray-700">Wood</span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mb-4">Handmade pieces that took time to make</h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor&#44; sit amet consectetur adipisicing elit. Ducimus maiores&#44; esse similique quae ipsam enim repellendus placeat molestiae doloribus nesciunt nihil necessitatibus consequatur&#44; eligendi ea animi fuga incidunt nemo sequi.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>

      
        <div className="w-full p-8 md:w-[30%]">
        
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search Blogs"
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />
          </div>

          
          <div className="mb-12 flex flex-wrap justify-between">
            <span className="font-semibold text-gray-700">Crafts</span>
            <span className="text-gray-700">2</span>
          </div>
          <div className="mb-12 flex flex-wrap justify-between">
            <span className="font-semibold text-gray-700">Design</span>
            <span className="text-gray-700">8</span>
          </div>
          <div className="mb-12 flex flex-wrap justify-between">
            <span className="font-semibold text-gray-700">Handmade</span>
            <span className="text-gray-700">7</span>
          </div>
          <div className="mb-12 flex flex-wrap justify-between">
            <span className="font-semibold text-gray-700">Interior</span>
            <span className="text-gray-700">1</span>
          </div>
          <div className="mb-12 flex flex-wrap justify-between">
            <span className="font-semibold text-gray-700">Wood</span>
            <span className="text-gray-700">6</span>
          </div>

        
          <h2 className="text-xl font-semibold mb-8">Latest Posts</h2>
          <div className="space-y-4">
            {/* Blog 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/article5.png" 
                alt="Post 1"
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <span className="font-semibold text-gray-700">Going all-in with milliniel design</span>
                <p className="text-gray-700 text-sm">January 1&#44; 2024</p>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/article4.png" 
                alt="Post 2"
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <span className="font-semibold text-gray-700">Exploring new ways of decorating</span>
                <p className="text-gray-700 text-sm">January 2&#44; 2024</p>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/article3.png" 
                alt="Post 3"
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <span className="font-semibold text-gray-700">Handmade pieces that took time to make</span>
                <p className="text-gray-700 text-sm">January 3&#44; 2024</p>
              </div>
            </div>
            {/* Blog 4 */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/article2.png" 
                alt="Post 4"
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <span className="font-semibold text-gray-700">Modern home in Milan</span>
                <p className="text-gray-700 text-sm">January 4&#44; 2024</p>
              </div>
            </div>
            {/* Blog 5 */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/article1.png" 
                alt="Post 5"
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <span className="font-semibold text-gray-700">Colorful office design</span>
                <p className="text-gray-700 text-sm">January 5&#44;, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
