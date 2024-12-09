import Image from 'next/image';

const Description = () => {
  return (
    <div className="w-full h-auto px-8 sm:px-16 py-8 sm:py-16 bg-white">
      
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-8 space-y-4 sm:space-y-0 sm:space-x-8">
        <h1 className="text-lg text-black font-light pb-1">Description</h1>
        <h2 className="text-lg text-gray-700 font-thin">Additional Information</h2>
        <h2 className="text-lg text-gray-700 font-thin">Reviews [5]</h2>
      </div>


      <p className="text-[#9F9F9F] sm:px-32 px-8 text-sm mb-8">
        Embodying the raw wayward spirit of rock ‘n’ roll&#44; the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall&#44; unplugs the chords&#44; and takes the show on the road.
      </p>
      <p className="text-[#9F9F9F] sm:px-32 px-8 text-sm mb-8">
        Weighing in under 7 pounds&#44; the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class&#44; the Kilburn is a compact&#44; stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>

      
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="w-full sm:w-[48%] h-[348px] bg-[#FFFFFF] flex justify-center items-center">
          <Image
            src="/images/d1.png"
            alt="Product 1"
            width={600}
            height={348}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full sm:w-[48%] h-[348px] bg-[#FFFFFF] flex justify-center items-center">
          <Image
            src="/images/d2.png"
            alt="Product 2"
            width={600}
            height={348}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
