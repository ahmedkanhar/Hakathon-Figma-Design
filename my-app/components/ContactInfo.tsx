import { LuMapPin, LuPhone, LuClock } from 'react-icons/lu'; 

const ContactInfo = () => {
  return (
    <div className="w-full h-auto px-8 sm:px-16 py-8 sm:py-16 bg-[#FFFFFF]">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <p className="text-sm font-medium text-gray-700 mt-4 max-w-[600px] mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        
        <div className="w-full sm:w-[48%]">
    
          <div className="mb-8 flex items-start">
            <LuMapPin className="text-3xl mr-4 text-black" />
            <div>
              <h1 className="text-xl font-semibold">Address</h1>
              <p className="text-gray-700">236 5th SE Avenue</p>
              <p className="text-gray-700">New York NY10000&#44; United States</p>
            </div>
          </div>

      
          <div className="mb-8 flex items-start">
            <LuPhone className="text-3xl mr-4 text-gray-700" />
            <div>
              <h1 className="text-xl font-semibold">Phone</h1>
              <p className="text-gray-700">Mobile: +(84) 546-6789</p>
              <p className="text-gray-700">Hotline: +(84) 456-678</p>
            </div>
          </div>

          
          <div className="mb-8 flex items-start">
            <LuClock className="text-3xl mr-4 text-gray-700" />
            <div>
              <h1 className="text-xl font-semibold">Working Hours</h1>
              <p className="text-gray-700">Mon - Fri: 9:00 AM - 10:00 PM</p>
              <p className="text-gray-700">Sat - Sun: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        
        <div className="w-full sm:w-[48%]">
          <form>
        
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="Enter your name"
              />
            </div>

            
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="Enter your email"
              />
            </div>

            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-lg font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="Enter subject"
              />
            </div>

      
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>

          
            <button
              type="submit"
              className="w-full p-3 border border-black bg-transparent text-black font-semibold rounded-md mt-4 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
