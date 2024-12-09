"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { CircleX } from "lucide-react";

export default function Cart({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cartItems, removeFromCart } = useCart(); 

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
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-2 rounded-lg"
              >
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={80} height={80} />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>{`Rs. ${item.price}`}</p>
                  </div>
                </div>
              
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => removeFromCart(item.id)} // Remove item by ID
                  aria-label={`Remove ${item.name}`}
                >
                  <CircleX size={24} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4">Cart is empty.</p>
          )}
           
         
          
          <div className="mt-6 bg-white">
          
            <div className="fixed right-0 bottom-4 items-center h-[40px] justify-between gap-4 sm:gap-8 w-full sm:w-[360px] mx-auto">
            <div className="sm:flex gap-10">
  {/* Wrapper div for grid on mobile */}
  <div className="grid grid-cols-1 gap-4 sm:flex sm:gap-10">
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

            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
