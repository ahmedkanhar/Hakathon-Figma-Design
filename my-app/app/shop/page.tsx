"use client";
import Navbar from "@/components/NavBar";
import Products from "@/components/Products";
import { SlidersHorizontal, GripHorizontal, AlignVerticalSpaceAround, ChevronRight } from "lucide-react";
import { useState } from "react";
import ShopBanner from "@/components/ShopBanner";
import Footer from "@/components/Footer";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; 

  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
     
      <Navbar bgColor="bg-white" />

      
      <section
        className="w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner3.png')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <img
            src="/images/logo.png"
            alt="Shop Logo"
            className="h-30 mb-2"
          />
          <h1 className="text-3xl font-bold tracking-wider text-white mt-2">Shop</h1>
          <div className="text-white mt-2 text-lg flex items-center gap-1">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Shop</span>
          </div>
        </div>
      </section>

      
      <div className="flex flex-col sm:flex-row items-center justify-between w-full h-[100px] px-6 bg-gray-100 border-b">
        <div className="flex items-center gap-6 sm:gap-4">
          <SlidersHorizontal className="text-gray-600 text-lg" />
          <span className="text-gray-800 text-sm font-medium">Filter</span>
          <div className="flex items-center gap-4">
            <GripHorizontal className="text-gray-600 text-lg cursor-pointer" />
            <AlignVerticalSpaceAround className="text-gray-600 text-lg cursor-pointer" />
            <div className="w-[2px] h-[30px] bg-gray-400 hidden sm:block" />
            <span className="text-gray-800 text-sm font-medium">
              Showing {currentPage * 16 - 15}-{Math.min(currentPage * 16, 16)} of 16
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-800 text-sm font-medium">
            Show <span className="bg-white pl-1">16</span>
          </span>
          <span className="text-gray-600 text-sm">Sort by:</span>
          <select className="text-gray-800 text-sm border rounded px-2 py-1">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      
      <div className="flex-grow">
        <Products />
      </div>

      
      <div className="flex items-center justify-center mt-4 p-4 bg-white gap-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-50 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-50 text-gray-800 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>

     
      <div>
        <ShopBanner />
      </div>

     
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
