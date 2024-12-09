import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { CircleX } from "lucide-react";
import Link from "next/link";

export default function Cart({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <button
          className="py-2 px-6 bg-white border-2 border-black text-black rounded-lg mt-4"
          onClick={() => setIsCartOpen(true)}
        >
          Open Cart
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          
          <div className="border-b-2 border-gray-300 mt-2 mb-4"></div>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4">
        
          <div className="w-[350px] h-[103px] flex items-center justify-between border border-gray-300 p-2 rounded-lg mt-2">
            
            <div className="w-[108px] h-[105px]">
              <Image
                src="/images/Asgaard.png"
                alt="Asgaard Sofa"
                width={108}
                height={105}
                className="object-cover"
              />
            </div>

            
            <div className="flex-1 text-center mx-2">
              <h3 className="text-sm font-semibold text-gray-800">Asgaard Sofa</h3>
              <p className="text-sm text-gray-600">1 x Rs. 25&#44;000</p>
            </div>

            
            <button
              className="text-xl text-gray-500 hover:text-gray-700"
              onClick={() => {
                
              }}
            >
              <CircleX size={24} />
            </button>
          </div>
           
           <div className="h-[240px]"></div>
          
          <div className="flex justify-between mt-6">
            <span className="text-lg font-semibold text-gray-800">Subtotal</span>
            <span className="text-lg font-semibold text-gray-800">Rs. 250000</span>
          </div>

          
          <div className="border-t-2 border-gray-300 my-6"></div>


          
          <div className="flex items-center justify-between gap-4 sm:gap-8 w-full sm:w-[360px] mt-6">
          
            <Link href="/cart">
              <button className="w-[131px] h-[31px] py-2 px-6 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                View Cart
              </button>
            </Link>

          
            <Link href="/checkout">
              <button className="w-[131px] h-[31px] py-2 px-6 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
