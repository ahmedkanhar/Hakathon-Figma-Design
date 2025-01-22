"use client";

import { client } from '@/sanity/lib/client';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/components/wishlist-context';  // Import wishlist context
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReviewsAndRatings from '@/components/ReviewsAndRatings';

interface Product {
  id: string;
  name: string;
  img: string;
  price: number;
  description: string;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();  // Access wishlist functions
  
  // Notification state
  const [notification, setNotification] = useState<string | null>(null);

  // Fetch product details
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
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

      const data = await client.fetch(query);
      const matchedProduct = data.find((item: any) => item._id === params.id);

      if (matchedProduct) {
        setProduct({
          id: matchedProduct._id,
          name: matchedProduct.name,
          img: matchedProduct.image.asset.url,
          price: Number(matchedProduct.price),
          description: matchedProduct.description,
        });
      }
    };

    fetchData();
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.img,
        quantity: 1,
      });
      setNotification('Product added to cart!');
      setTimeout(() => setNotification(null), 3000); // Dismiss after 3 seconds
    }
  };

  // Check if product is already in the wishlist
  const isInWishlist = wishlist.includes(product.id);

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);  // Remove from wishlist if already there
      setNotification('Product removed from wishlist!');
    } else {
      addToWishlist(product.id);  // Add to wishlist if not there
      setNotification('Product added to wishlist!');
    }
    setTimeout(() => setNotification(null), 3000); // Dismiss after 3 seconds
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <Image
              alt={product.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded zoom-img"
              src={product.img}
              width={300}
              height={300}
            />
            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Rating */}
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* Repeat the rating stars here */}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900 p-2">Price : ${product.price}</span>
                <button
                  onClick={handleAddToCart}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add To Cart
                </button>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={handleAddToWishlist}
                className={`mt-4 px-4 py-2 text-white rounded-full ${isInWishlist ? 'bg-red-500' : 'bg-blue-500'} hover:bg-opacity-80`}
              >
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notification */}
      {notification && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white p-3 rounded-md shadow-md">
          {notification}
        </div>
      )}

      <hr />

      {/* Description Tab Section */}
      <div className="p-9">
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-9 text-center">
          <h1 className="underline font-bold text-[24px] md:text-[30px]">Description</h1>
          <h1 className="text-[24px] md:text-[30px]">Additional information</h1>
          <h1 className="text-[24px] md:text-[30px]">Reviews</h1>
        </div>

        {/* Text Content */}
        <div className="text p-4 text-gray-500 text-sm md:text-base leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum ea blanditiis
            deleniti labore perferendis minus doloribus ducimus eveniet. Tenetur ipsa officia labore ex
            pariatur numquam odio deserunt praesentium deleniti! Dignissimos iste ill dolore aliquam
            magnam ipsum nihil illum.
            <br />
            <br />
            Labore eos cupiditate ipsum vero voluptatibus officiis. Libero harum ducimus quod voluptate
            alias beatae voluptatum, provident, obcaecati iste cumque numquam reprehenderit? In
            delectus provident placeat ei enim recusandae voluptatem dolorum et vero? Ullam dolore
            repellendus animi obcaecati totam dolorem consectetur id sapiente modi quam? Eius ipsum
            minima amet! Nihil distinctio hic sunt pariatur fugiat tenetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima maiores nobis quae esse. Error maxime ex dolorum itaque
            reprehenderit dignissimos mollitia incidunt omnis. Labore dolore dolorem perferendis
            officiis suscipit debitis!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-9 mt-8">
          <div className="w-[250px]  md:w-[400px] md:h-[400px]">
            <Image
              src={product.img}
              width={300}
              height={300}
              alt="hello"
              className=" object-cover"
            />
          </div>
          <div className="w-[250px]  md:w-[400px] md:h-[400px]">
            <Image
              src={product.img}
              width={300}
              height={300}
              alt="hello"
              className=" object-cover"
            />
          </div>
        </div>
        
      </div>
  
      <br /><br /><br />
      <div className='mt-6'>
        <ReviewsAndRatings />
      </div>
      <Footer />
    </div>
  );
}
