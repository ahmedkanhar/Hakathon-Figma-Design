"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Heart } from "lucide-react";
import Description from "@/components/Discription";
import RelatedPost from "@/components/RelatedPost";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const AsgaardSofaDetailPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: "1",
      name: "Asgaard Sofa",
      price: 30000,
      image: "/images/Asgaard.png",
      quantity: 1,
    };
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar bgColor="bg-white" />
      <div className="w-full h-[100px] bg-[#FFFFFF] flex items-center justify-start pl-12 text-sm text-gray-600">
        <span>Home</span>
        <span className="mx-2 text-black ml-4"> &gt; </span>
        <span className="ml-4">Shop</span>
        <span className="mx-2 text-black ml-4"> &gt; | </span>
        <span className="ml-4">Asgaard Sofa</span>
      </div>

      <section className="w-full px-8 py-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[553px] h-auto flex flex-col lg:flex-row lg:h-[500px]">
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[76px] lg:h-[416px] mb-4 lg:mb-0">
            {["1", "2", "3", "4"].map((img, index) => (
              <div
                key={index}
                className={`w-[80px] h-[80px] ${
                  index === 2 ? "bg-[#FF9E5]" : ""
                } flex justify-center items-center`}
              >
                <Image
                  src={`/images/${img}.png`}
                  alt={`Small Image ${index + 1}`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[423px] h-auto flex justify-center items-center lg:mt-4">
            <Image
              src="/images/Asgaard.png"
              alt="Asgaard Sofa"
              width={481}
              height={391}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-[500px] h-full pl-8 my-1 flex flex-col justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
            Asgaard Sofa
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">
            Rs. 30,000.00
          </p>

          <div className="flex items-center mt-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <span className="text-gray-600 ml-2">| 5 reviews</span>
          </div>

          <p className="text-gray-700 mb-4 mt-1">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="w-full sm:w-[140px] mb-4">
            <h3 className="text-sm sm:text-lg font-semibold text-black mt-1">
              Available Sizes
            </h3>
            <div className="flex text-black gap-4 mt-2">
              {["L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="py-2 px-4 border border-gray-300 rounded-lg"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mt-1">
              Select Color
            </h3>
            <div className="flex gap-4 mt-2">
              {["gray-800", "blue-500", "red-500"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full bg-${color}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <button
              className="py-2 px-6 bg-white border-2 border-black text-black rounded-lg mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </div>
        </div>
      </section>

      <Description />
      <RelatedPost />
      <Footer />
    </div>
  );
};

export default AsgaardSofaDetailPage;
