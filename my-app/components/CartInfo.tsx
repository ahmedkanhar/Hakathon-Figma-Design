import Image from 'next/image';
import Link from 'next/link';

const CartInfo = () => {
  return (
    <div className="w-full h-auto p-8 sm:p-16 bg-white flex justify-center items-center">
      
      <div className="w-full h-full flex flex-col sm:flex-row bg-white">
        
        <div className="w-full sm:w-[70%] p-8">
          
          <div className="hidden sm:grid bg-[#FFF5EF] grid-cols-4 mb-6">
            <h1 className="text-lg font-bold">Product</h1>
            <h1 className="text-lg font-bold">Price</h1>
            <h1 className="text-lg font-bold">Quantity</h1>
            <h1 className="text-lg font-bold">Subtotal</h1>
          </div>

          
          <div className="flex flex-col bg-[#FFF5EF] sm:grid sm:grid-cols-4 items-center gap-4">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
              <Image
                src="/images/Asgaard.png" 
                alt="Asgaard Sofa"
                width={50} 
                height={50} 
                className="mr-4" 
              />
              <p className="text-gray-700 mt-2 sm:mt-0">Asgaard Sofa</p>
            </div>
          
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
              <h1 className="text-gray-700 font-bold sm:hidden">Price</h1>
              <p className="text-gray-700 text-sm mt-2 sm:mt-0">$2500.00</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
              <h1 className="text-gray-700 font-bold sm:hidden">Quantity</h1>
              <p className="text-gray-700 text-sm mt-2 sm:mt-0">1</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
              <h1 className="text-gray-700 font-bold sm:hidden">Subtotal</h1>
              <p className="text-gray-700 text-sm mt-2 sm:mt-0">$2500.00</p>
            </div>
          </div>
        </div>

        
        <div className="w-full sm:w-[30%] p-8">
          
          <div className="w-full h-[100%] bg-[#FFF5EF] p-8">
            <h2 className="text-xl font-bold mb-14 text-center">Cart Total</h2>

    
            <div className="flex justify-between mb-6">
              <p className="text-black font-bold text-lg">Subtotal</p>
              <p className="text-gray-700 text-lg">$2500.00</p>
            </div>

            
            <div className="flex justify-between mb-6">
              <p className="text-black font-bold text-lg">Total</p>
              <p className="text-yellow-500 text-lg">$2500.00</p>
            </div>
            <Link href="/checkout">
              <button
                className="w-full sm:w-[222px] h-[58px] mt-14 border-2 border-black bg-transparent text-black font-semibold flex items-center justify-center rounded-md hover:bg-gray-800 transition duration-300"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
