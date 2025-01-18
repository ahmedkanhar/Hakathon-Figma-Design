"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { CircleX } from "lucide-react";

const Cart = ({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        </SheetHeader>

        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p>{item.name}</p>
                  <p>{`Rs. ${item.price} x ${item.quantity}`}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <CircleX size={24} />
                </button>
              </div>
            ))
          ) : (
            <p>Cart is empty.</p>
          )}
        </div>

        <Link href="/cart">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Cart
          </button>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
