"use client";


import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
  ];

  
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">

      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between  items-center">
          {/* === Logo / Brand === */}

          <Link
            href="/"
            className="text-2xl font-bold text-primaryColor"
          >
            Food-Cap
          </Link>

          {/* === Desktop Menu === */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-primaryColor transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-primaryColor transition-colors"
            >
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="ml-4 bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-primaryColor/90 transition-colors"
            >
              Login
            </Link>
          </div>

        
          {/* === Mobile Menu Button === */}
          <div className="md:hidden gap-3 flex items-center">

                  {/* Cart link */}
          {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative text-primaryColor hover:text-primaryColor transition-colors"
            >
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>


            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700  hover:text-primaryColor transition-colors"
            >
              <CgMenuRightAlt size={28} />
            </button>




          </div>


        </div>
      </div>

      {/* === Mobile Offcanvas Menu === */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform 
        transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-4 py-6 border-b">
          <h2 className="text-lg font-semibold text-primaryColor">MyBrand</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-primaryColor transition-colors"
          >
            <RxCross1 size={22} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col px-4 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-primaryColor transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

        
          {/* Login Button */}
          <Link
            href="/login"
            className="block w-full bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColor/90 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}


    </nav>
  );
}
