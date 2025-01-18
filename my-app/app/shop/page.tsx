"use client";

import { useState } from "react";
import Navbar from "@/components/NavBar";
import Products from "@/components/Products";
import ShopBanner from "@/components/ShopBanner";
import Footer from "@/components/Footer";
import {
  SlidersHorizontal,
  GripHorizontal,
  AlignVerticalSpaceAround,
} from "lucide-react";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Number of products per page
  const [totalProducts, setTotalProducts] = useState(0); // Track total products
  const [sortOption, setSortOption] = useState("default"); // Track sorting option

  const handleTotalProducts = (count: number) => {
    setTotalProducts(count);
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage); // Total number of pages

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
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
          <img src="/images/logo.png" alt="Shop Logo" className="h-30 mb-2" />
          <h1 className="text-3xl font-bold tracking-wider text-white mt-2">Shop</h1>
        </div>
      </section>

      {/* Filter and Sorting Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full h-[100px] px-6 bg-gray-100 border-b">
        <div className="flex items-center gap-6 sm:gap-4">
          <SlidersHorizontal className="text-gray-600 text-lg" />
          <span className="text-gray-800 text-sm font-medium">Filter</span>
          <div className="flex items-center gap-4">
            <GripHorizontal className="text-gray-600 text-lg cursor-pointer" />
            <AlignVerticalSpaceAround className="text-gray-600 text-lg cursor-pointer" />
            <div className="w-[2px] h-[30px] bg-gray-400 hidden sm:block" />
            <span className="text-gray-800 text-sm font-medium">
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-800 text-sm font-medium">
            Show <span className="bg-white pl-1">{itemsPerPage}</span>
          </span>
          <span className="text-gray-600 text-sm">Sort by:</span>
          <select
            className="text-gray-800 text-sm border rounded px-2 py-1"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="Low to High Prices">Price: Low to High</option>
            <option value="High to Low Prices">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-grow">
        <Products
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortOption={sortOption} // Pass the sorting option to Products
          onTotalProducts={handleTotalProducts}
        />
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-center mt-4 p-4 bg-white gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-50 text-gray-800 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>
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

      <ShopBanner />
      <Footer />
    </div>
  );
};

export default Shop;
