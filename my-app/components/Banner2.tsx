const Banner2 = () => {
  return (
    <div
      className="w-full h-[450px] relative flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/banner2.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="absolute inset-0 bg-white opacity-15"></div>

      
      <div className="relative z-10 text-black px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Instagram</h1>
        <p className="text-base sm:text-lg mb-6">
          follow our store on instagram
        </p>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-indigo-100">
          Follow us
        </button>
      </div>
    </div>
  );
};

export default Banner2;
