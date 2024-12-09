const ShopBanner = () => {
  return (
    <section className="w-full h-auto px-6 py-12 bg-[#FAF4F4] bg-center flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <h1 className="text-black text-2xl sm:text-3xl font-bold">Free Delivery</h1>
        <p className="text-black text-sm sm:text-[18px]">
          For all orders over $50&#44; consectetur adipiscing elit.
        </p>
      </div>

      
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <h1 className="text-black text-2xl sm:text-3xl font-bold">90 Days Return</h1>
        <p className="text-black text-sm sm:text-[18px]">
          If goods have problems&#44; consectetur adipiscing elit.
        </p>
      </div>

      
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <h1 className="text-black text-2xl sm:text-3xl font-bold">Secure Payment</h1>
        <p className="text-black text-sm sm:text-[18px]">
          If goods have problems&#44; consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

export default ShopBanner;
