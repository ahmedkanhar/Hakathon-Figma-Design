"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface ProductsProps {
  currentPage: number;
  itemsPerPage: number;
  sortOption: string;
  selectedCategory: string; // New prop for selected category
  searchQuery: string; // Add searchQuery prop
  onTotalProducts: (count: number) => void;
}

export default function Products({
  currentPage,
  itemsPerPage,
  sortOption,
  selectedCategory, // Destructure new prop
  searchQuery, // Destructure searchQuery prop
  onTotalProducts,
}: ProductsProps) {
  const [data, setData] = useState<Product[]>([]);

  // Sanity query to fetch product data
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    category,
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

      // Filter products based on the selected category
      const filteredByCategory = selectedCategory
        ? fetchedData.filter((product: Product) => product.category === selectedCategory)
        : fetchedData;

      // Filter products based on the searchQuery
      const filteredData = filteredByCategory.filter((product: Product) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(lowerCaseSearchQuery) ||
          product.description.toLowerCase().includes(lowerCaseSearchQuery)
        );
      });

      onTotalProducts(filteredData.length); // Update total products count
      setData(filteredData);
    };
    fetchData();
  }, [query, selectedCategory, searchQuery, onTotalProducts]); // Include searchQuery as a dependency

  // Sorting logic based on selected option
  let sortedData = [...data];

  if (sortOption === "Low to High Prices") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "High to Low Prices") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  // Paginate the sorted data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {currentItems.map((item) => {
        return (
          // The Link component is already wrapping the product card for navigation.
          <Link href={`/productdetails/${item._id}`} key={item._id}>
            <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out flex flex-col">
              {/* Image container */}
              <div className="w-full h-[250px] overflow-hidden mb-4 relative">
                <Image
                  src={item.image.asset.url}
                  width={250}
                  height={250}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Product Information */}
              <div className="text-center flex flex-col justify-between h-full">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-500 text-sm my-2">{item.description}</p>
                <h3 className="font-bold text-xl text-black mt-2">${item.price}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
