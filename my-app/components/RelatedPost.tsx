"use client";

import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { useCart } from "@/app/context/CartContext"; // Adjust the path if necessary

const fetchRelatedProducts = async () => {
  const query = `*[_type == "product"] | order(publishedAt desc) [0...4] {
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
};

const RelatedPost = () => {
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchRelatedProducts().then(setRelatedProducts);
  }, []);

  if (!relatedProducts.length) {
    return <p>No related products available.</p>; // Optionally, you could show a "No related products" message
  }

  return (
    <div className="w-full px-8 py-16 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-sm">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">Rs. {product.price}</p>
            <button
              onClick={() =>
                addToCart({
                  id: product._id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.imageUrl,
                })
              }
              className="mt-4 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
