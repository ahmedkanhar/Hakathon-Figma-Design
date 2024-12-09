"use client";

import Link from "next/link";
import { FaUserAlt, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface NavbarProps {
  bgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor = "bg-[#FBEBB5]" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`relative w-full ${bgColor} text-gray-800 flex justify-between items-center px-4 sm:px-6 h-[70px] sm:h-[100px]`}
    >
      
      <div className="w-[50px] sm:w-[100px]"></div>

  
      <ul className="hidden sm:flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>

    
      <button
        className="sm:hidden absolute  sm:space-x-6 text-xl"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent className="absolute top-0 left-0 w-full h-full bg-white sm:hidden">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold px-4">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-start space-y-4 py-4 px-4">
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 mt-4">
              <Link href="/account" className="hover:text-gray-600">
                <FaUserAlt className="text-xl" />
              </Link>
              <Link href="/search" className="hover:text-gray-600">
                <FaSearch className="text-xl" />
              </Link>
              <Link href="/favorites" className="hover:text-gray-600">
                <FaHeart className="text-xl" />
              </Link>
              <Link href="/cart" className="hover:text-gray-600">
                <FaShoppingCart className="text-xl" />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

    
      <div className="flex space-x-4 sm:space-x-6 text-lg">
        <Link href="/account">
          <FaUserAlt className="hover:text-gray-600" />
        </Link>
        <Link href="/search">
          <FaSearch className="hover:text-gray-600" />
        </Link>
        <Link href="/favorites">
          <FaHeart className="hover:text-gray-600" />
        </Link>
        <Link href="/cart">
          <FaShoppingCart className="hover:text-gray-600" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
