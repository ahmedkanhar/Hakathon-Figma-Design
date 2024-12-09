import { ChevronRight } from "lucide-react";

export default function Banner4() {
  return (
    <div>
      <section
        className="w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner3.png')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8">
          <img
            src="/images/logo.png"
            alt="Shop Logo"
            className="h-20 sm:h-40" 
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-white mt-2">
            Checkout
          </h1>
          <div className="text-white mt-2 tracking-wider text-base sm:text-lg flex items-center gap-1">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Checkout</span>
          </div>
        </div>
      </section>
    </div>
  );
}
