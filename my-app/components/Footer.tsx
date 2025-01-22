import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-8 py-8 bg-white text-black flex flex-col items-center justify-between">
      
      <div className="w-full max-w-[1024px] flex flex-col gap-8 md:flex-row md:gap-16">
        
        <div className="flex-1 text-center mt-10 md:text-left">
          <p className="text-[14px] sm:text-[16px] text-black leading-relaxed">
            400 University Drive Suite 200 Coral Gables&#44;
            <br />
            <span>FL 33134 USA</span>
          </p>
        </div>

        
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          
          <div className="flex-1">
            <span className="block text-sm text-black mb-4 md:mb-6">Quick Links</span>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-black hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-black hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-black hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-black hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-black hover:underline">
                  Dashboard
                </Link>
              </li>
              
            </ul>
          </div>

          
          <div className="flex-1">
            <span className="block text-sm text-black mb-4 md:mb-6">Help</span>
            <ul className="space-y-3">
              <li className="text-sm text-black">Payment Options</li>
              <li className="text-sm text-black">Returns</li>
              <li className="text-sm text-black">Privacy Policy</li>
              <Link href="/form" className="text-sm text-black hover:underline">
                  Sign Up
                </Link>
                
            </ul>
          </div>
        </div>

        
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-black mb-4 md:mb-6">Newsletter</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 text-sm px-4 py-2 bg-transparent border-b border-black focus:outline-none placeholder-gray-400 text-black"
            />
            <button className="text-sm underline text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <div className="w-full mt-8 sm:mt-20 h-[1px] bg-gray-200"></div>

      
      <div className="w-full flex justify-center md:justify-start mt-4 md:mt-6">
        <p className="text-sm text-black">© 2024 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
