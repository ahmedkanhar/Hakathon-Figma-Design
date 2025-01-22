"use client";

import React, { useEffect, useState } from "react";
import { useWishlist } from "@/components/wishlist-context";
import { client } from "@/sanity/lib/client"; // For fetching product data


const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [wishlistProducts, setWishlistProducts] = useState<any[]>([]);

  // Fetch product details for each item in the wishlist
  useEffect(() => {
    const fetchWishlistProducts = async () => {
      const query = `*[_type == "product" && _id in ${JSON.stringify(wishlist)}]{
        _id,
        name,
        description,
        price,
        image{
          asset->{
            url
          }
        }
      }`;
      const products = await client.fetch(query);
      setWishlistProducts(products);
    };

    if (wishlist.length > 0) {
      fetchWishlistProducts();
    }
  }, [wishlist]);

  return (
    <div>
      {/* Navbar should appear at the top */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistProducts.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product._id} className="p-6 bg-white shadow-lg rounded-lg">
                {/* Display Product Image */}
                <div className="w-full h-[250px] overflow-hidden mb-4 relative">
                  <img
                    src={product.image.asset.url}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Display Product Name, Description, and Price */}
                <h2 className="text-gray-800 text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-500 text-sm my-2">{product.description}</p>
                <h3 className="font-bold text-xl text-black mt-2">${product.price}</h3>

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="text-red-500 hover:text-red-700 mt-4"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
