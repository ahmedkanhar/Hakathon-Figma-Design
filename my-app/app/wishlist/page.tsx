"use client";

import Wishlist from "@/components/WishList"; // Adjust the import path
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const WishlistPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl flex justify-center font-bold mb-6">Your Wishlist</h1>
        <div className="mt-8">
          <p className="text-gray-600 text-sm sm:text-base">
            Your wishlist helps you keep track of the products you love. Add your favorite items here and revisit them anytime to make your shopping seamless and enjoyable.
          </p>
        </div>
        {/* Wishlist component remains at the start */}
        <Wishlist />
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
