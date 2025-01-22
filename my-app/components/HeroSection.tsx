import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-[#FBEBB5] flex justify-center items-center relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-start items-center w-full px-6 sm:px-12">
        <div className="w-full md:w-[440px] h-auto flex flex-col justify-between items-start space-y-4 md:mr-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Rocket Single
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Seater</span>
          </h1>
          <a
            href="#"
            className="text-sm sm:text-lg font-medium text-gray-800 hover:underline border-b-2 border-gray-800"
          >
            Shop Now
          </a>
        </div>

        <div className="w-full md:w-[70%] h-full md:ml-6 mb-6 md:mb-0">
          <Image
            src="/images/seater.png"
            alt="Rocket Single Seater"
            width={600}
            height={600}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
