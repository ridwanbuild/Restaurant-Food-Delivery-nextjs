"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero_Section() {
  const heroSectionData = [
    {
      id: 1,
      title: "Fresh & Crispy",
      subtitle: "Delicious taste in every bite",
      description:
        "Experience the crunch and flavor in every slice. Our pizzas are made with fresh dough, hand-picked ingredients, and baked to perfection so you always get that hot, crispy bite you crave.",
      image: "/slide1.png",
      buttonText: "Order Now",
    },
    {
      id: 2,
      title: "Fast Delivery",
      subtitle: "Reliable & On-Time",
      description:
        "No matter where you are in New York, our delivery team brings your favorite pizza straight to your door. We ensure speed, freshness, and the same authentic taste every single time.",
      image: "/slide2.png",
      buttonText: "Get Delivery",
    },
    {
      id: 3,
      title: "Family Pizza",
      subtitle: "Perfect for gatherings",
      description:
        "Pizza is better when shared! Gather your family and friends around a large box of our cheesy, flavorful pizzas that make every meal memorable and every bite truly special.",
      image: "/slide3.jpg",
      buttonText: "Explore Menu",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {

    const interval = setInterval(
      () => setCurrentSlider((prev) => prev + 1),
      3000
    );

    return () => clearInterval(interval);

  }, []);



  return (
    <div className="relative container m-auto px-4 overflow-hidden">
      <div className="">
        {heroSectionData.map(
          (item, index) =>
            index === currentSlider % heroSectionData.length && (
              <div
                className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 "
                key={item.id}
              >
                {/* ✅ Text Content */}
                <div className="md:text-left max-w-lg">
                  <h2 className="lg:text-5xl text-2xl font-bold text-primaryColor mb-5">
                    {item.title}
                  </h2>

                  <h4 className="text-sm bg-secondaryColor text-bodyColor inline px-4 py-1 rounded-full uppercase font-normal">
                    {item.subtitle}
                  </h4>

                  <p className="text-base   mt-4 md:text-lg text-bodyColor leading-relaxed">
                    {item.description}
                  </p>

                  {/* ✅ CTA Button */}
                  <button className="mt-6 cursor-pointer bg-primaryColor text-white px-8  py-2 rounded-full font-medium  hover:bg-primaryColor/90 transition">
                    {item.buttonText}
                  </button>
                  
                </div>

                {/* ✅ Image Content */}
                <div className="w-full  lg:h-[600px] flex justify-end">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="object-cover "
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
