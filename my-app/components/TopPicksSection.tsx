const TopPicksSection = () => {
  return (
    <section className="w-full h-auto pt-32 pb-32 px-8 bg-[#FFFFFF]">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Top Picks For You
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Find a bright ideal to suit your taste with our great selection of suspension&#44; floor and table lights
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Box 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[250px] md:w-[300px] h-[300px] mb-4">
            <img
              src="/images/modularsofa.png" 
              alt="Side Table"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-sm sm:text-base font-medium text-black mb-3 text-start w-full">
            Trenton modular sofa_3
          </div>
          <div className="text-xl font-bold text-gray-800 text-start w-full">
            Rs.25000.00
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[250px] md:w-[300px] h-[300px] mb-4">
            <img
              src="/images/outdoor.png" 
              alt="Dining Table"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-sm sm:text-base font-medium text-black mb-3 text-start w-full">
            Granite dining table with chair
          </div>
          <div className="text-xl font-bold text-gray-800 text-start w-full">
            Rs.25000.00
          </div>
        </div>

        
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[250px] md:w-[300px] h-[300px] mb-4">
            <img
              src="/images/diningtable.png" 
              alt="Chair"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-sm sm:text-base font-medium text-black mb-3 text-start w-full">
            Outdoor bar table and stool
          </div>
          <div className="text-xl font-bold text-gray-800 text-start w-full">
            Rs.25000.00
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[250px] md:w-[300px] h-[300px] mb-4">
            <img
              src="/images/plainconsole.png" 
              alt="Console"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-sm sm:text-base font-medium text-black mb-3 text-start w-full">
            Plain console with teak mirror
          </div>
          <div className="text-xl font-bold text-gray-800 text-start w-full">
            Rs.25000.00
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-12">
        <a href="#" className="text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
          View More
        </a>
      </div>
    </section>
  );
};

export default TopPicksSection;
