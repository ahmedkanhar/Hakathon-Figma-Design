"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type for the wishlist
interface WishlistContextType {
  wishlist: string[]; // Array of product IDs
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

// WishlistProvider component to manage the wishlist state
interface WishlistProviderProps {
  children: ReactNode;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  // Add product to wishlist
  const addToWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const newWishlist = [...prevWishlist, productId];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const newWishlist = prevWishlist.filter(id => id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
