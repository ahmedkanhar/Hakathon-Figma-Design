const BannerSection = () => {
  return (
    <section className="w-full h-auto bg-[#FAFAF4] pt-32 pb-32 px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row">

     
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center mb-8 sm:mb-0 sm:px-4 relative">
        <div className="w-full h-[300px] sm:h-[500px] flex justify-center items-center mb-6">
          <img
            src="/images/table.png" 
            alt="Rocket Single Seater"
            className="w-[300px] sm:w-[400px] h-auto object-contain" 
          />
        </div>
        
        <div className="absolute bottom-16 left-4 text-2xl sm:text-3xl font-bold text-gray-800">
          Side Table
        </div>

       
        <a href="#" className="absolute bottom-4 left-4 text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
          Shop Now
        </a>
      </div>

      
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center sm:px-4 relative">
        <div className="w-full h-[300px] sm:h-[500px] flex justify-center items-center mb-6">
          <img
            src="/images/sofa.png" 
            alt="Another Product"
            className="w-[300px] sm:w-[400px] h-auto object-contain" 
          />
        </div>
        
        <div className="absolute bottom-16 left-4 text-2xl sm:text-3xl font-bold text-gray-800">
          Sofa
        </div>

       
        <a href="#" className="absolute bottom-4 left-4 text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800">
          View More
        </a>
      </div>

    </section>
  );
};

export default BannerSection;
