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

export default function TopPicks() {
  const [data, setData] = useState<Product[]>([]);

  // Sanity query to fetch 4 products (you can also apply filters or order by a specific field if needed)
  const query = `*[_type == "product"][0..3]{
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
      setData(fetchedData);
    };
    fetchData();
  }, [query]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item) => {
        return (
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
