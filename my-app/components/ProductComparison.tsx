"use client";

import React, { useState } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  stockLevel: number;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface ProductComparisonProps {
  products: Product[];
}

export default function ProductComparison({ products }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const toggleProductSelection = (product: Product) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.some((p) => p._id === product._id)
        ? prevSelectedProducts.filter((p) => p._id !== product._id)
        : [...prevSelectedProducts, product]
    );
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col p-4 border rounded-md w-[250px] cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => toggleProductSelection(product)}
          >
            <img
              src={product.image.asset.url}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="text-xl font-bold text-black">${product.price}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-sm text-gray-600">Discount: {product.discountPercentage}%</p>
            <p className="text-sm text-gray-600">Stock: {product.stockLevel}</p>
            <button
              className={`mt-2 py-1 px-3 rounded-md ${
                selectedProducts.some((p) => p._id === product._id)
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {selectedProducts.some((p) => p._id === product._id)
                ? "Deselect"
                : "Select"}
            </button>
          </div>
        ))}
      </div>

      {/* Show Comparison of Selected Products */}
      {selectedProducts.length > 1 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Product Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProducts.map((product) => (
              <div
                key={product._id}
                className="p-4 border rounded-md bg-white shadow-lg"
              >
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-xl font-bold text-black">${product.price}</p>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-sm text-gray-600">Discount: {product.discountPercentage}%</p>
                <p className="text-sm text-gray-600">Stock: {product.stockLevel}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
