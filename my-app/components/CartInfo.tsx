"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const CartInfo = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate subtotal dynamically
  const subtotal = (cartItems ?? []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  return (
    <div className="w-full h-auto p-8 sm:p-16 bg-white flex justify-center items-center">
      <div className="w-full h-full flex flex-col sm:flex-row bg-white">
        {/* Left Section */}
        <div className="w-full sm:w-[70%] p-8">
          {/* Table Headers for Larger Screens */}
          <div className="hidden sm:grid bg-[#FFF5EF] grid-cols-4 mb-6">
            <h1 className="text-lg font-bold">Product</h1>
            <h1 className="text-lg font-bold">Price</h1>
            <h1 className="text-lg font-bold">Quantity</h1>
            <h1 className="text-lg font-bold">Subtotal</h1>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#FFF5EF] sm:grid sm:grid-cols-4 items-center gap-4 mb-4 rounded-lg p-4"
            >
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <p className="text-gray-700 mt-2 sm:mt-0">{item.name}</p>
              </div>

              {/* Price */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
                <h1 className="text-gray-700 font-bold sm:hidden">Price</h1>
                <p className="text-gray-700 text-sm mt-2 sm:mt-0">
                  Rs. {item.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
                <h1 className="text-gray-700 font-bold sm:hidden">Quantity</h1>
                <p className="text-gray-700 text-sm mt-2 sm:mt-0">
                  {item.quantity}
                </p>
              </div>

              {/* Subtotal */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:col-span-1">
                <h1 className="text-gray-700 font-bold sm:hidden">Subtotal</h1>
                <p className="text-gray-700 text-sm mt-2 sm:mt-0">
                  Rs. {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Empty Cart Message */}
          {cartItems.length === 0 && (
            <p className="text-center text-gray-600 mt-4">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[30%] p-8">
          <div className="w-full h-[100%] bg-[#FFF5EF] p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-14 text-center">Cart Total</h2>

            {/* Subtotal */}
            <div className="flex justify-between mb-6">
              <p className="text-black font-bold text-lg">Subtotal</p>
              <p className="text-gray-700 text-lg">Rs. {subtotal}</p>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-6">
              <p className="text-black font-bold text-lg">Total</p>
              <p className="text-yellow-500 text-lg">Rs. {subtotal}</p>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout">
              <button className="w-full sm:w-[222px] h-[58px] mt-14 border-2 border-black bg-transparent text-black font-semibold flex items-center justify-center rounded-md hover:bg-gray-800 hover:text-white transition duration-300">
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
