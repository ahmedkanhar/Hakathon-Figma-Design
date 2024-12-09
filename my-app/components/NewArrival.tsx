import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <section className="w-full min-h-screen pt-16 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-8 bg-[#FFF9EF]">
      
      <div className="grid grid-cols-12 gap-6 sm:gap-8">

        <div className="col-span-12 md:col-span-8">
          <div className="w-full h-full">
            <Link href="/sofadetails">
              <Image
                src="/images/Asgaard.png"
                alt="New Arrival"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </Link>
          </div>
        </div>

        
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center text-center md:text-left h-full">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            New Arrival
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6">
            Asgaard sofa
          </h2>

          
          <Link href="/sofadetails">
            <button className="w-full sm:w-[180px] h-[50px] text-base sm:text-lg border-2 border-yellow-300 font-medium text-black bg-transparent py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
