"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  discountPercentage: number;
  stockLevel: number;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function ComparePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]); // Store selected products for comparison

  const [showDiscount, setShowDiscount] = useState<boolean>(false); // State to toggle between price views

  // Sanity query to fetch product data
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    category,
    discountPercentage,
    stockLevel,
    image{
      asset->{
        url
      }
    }
  }`;

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await client.fetch(query);
      setProducts(fetchedData);
    };
    fetchData();
  }, []);

  // Handle product selection
  const handleSelectProduct = (product: Product) => {
    setSelectedProducts((prevSelected) => {
      // Check if product is already selected
      if (prevSelected.some((p) => p._id === product._id)) {
        return prevSelected.filter((p) => p._id !== product._id); // Deselect product
      } else {
        return [...prevSelected, product]; // Select product
      }
    });
  };

  // Function to calculate discounted price
  const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    return price - (price * discountPercentage) / 100;
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Compare Products</h1>

      {/* Basic Info View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.image.asset.url}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-base text-gray-600 mb-4">{product.description.slice(0, 100)}...</p>
            <p className="text-lg font-bold text-black">${product.price}</p>

            {/* Button to toggle product selection */}
            <button
              onClick={() => handleSelectProduct(product)}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200"
            >
              {selectedProducts.some((p) => p._id === product._id) ? "Deselect" : "Select"}
            </button>
          </div>
        ))}
      </div>

      {/* Show Full Product Details for Selected Products */}
      {selectedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Selected Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedProducts.map((product) => (
              <div
                key={product._id}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-base text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-black">${product.price}</p>

                {/* Show the discounted price if the button is clicked */}
                {showDiscount && (
                  <p className="text-lg font-semibold text-red-500 mt-4">
                    Discounted Price: $
                    {calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2)}
                  </p>
                )}

                {/* Toggle button to show discount only after selection */}
                <button
                  onClick={() => setShowDiscount((prev) => !prev)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
                >
                  {showDiscount ? "Hide Discount" : "Show Discount"}
                </button>

                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-sm text-gray-600">Stock: {product.stockLevel}</p>
                <p className="text-sm text-gray-600">
                  Discount: {product.discountPercentage}%
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
