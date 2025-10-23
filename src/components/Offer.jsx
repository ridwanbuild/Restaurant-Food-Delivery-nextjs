"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Offer() {
 
  return (
    <section className="bg-primaryColor text-white  py-20">
      
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text content */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl md:text-5xl font-bold text-white">
            Delicious Burger & French Fry
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.
          </p>

          {/* Countdown */}
          <div className=" text-gray-200 font-bold text-2xl md:text-3xl">
            <h2>Count Down</h2>
          </div>

          {/* Button */}
          <button className="mt-1 bg-white text-primaryColor font-medium cursor-pointer px-8 py-3 rounded-full w-max transition">
            Order Now
          </button>

        </div>

        {/* Image content */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/temporary/p1.png" // replace with your burger+fries image in public folder
            alt="Burger & Fries"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
