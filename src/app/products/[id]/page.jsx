"use client";
import React, { useState } from "react";

export default function SingleProductPizza() {
  // Product data
  const singleProduct = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  };

  // Selected size
  const [size, setSize] = useState(singleProduct.options[0]);

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Increase or decrease quantity
  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1); // decrease quantity
    }
    if (type === "inc") {
      setQuantity(quantity + 1); // increase quantity
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={singleProduct.img}
            alt={singleProduct.title}
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-4">
            {singleProduct.title}
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {singleProduct.desc}
          </p>

          {/* Display price based on selected size and quantity */}
          <span className="block text-xl sm:text-2xl font-semibold text-primaryColor mb-6">
            ${((singleProduct.price + size.additionalPrice) * quantity).toFixed(2)}
          </span>

          {/* Size selection buttons */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {singleProduct.options.map((opt) => (
              <button
                key={opt.title}
                onClick={() => setSize(opt)}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition 
                  ${
                    size.title === opt.title
                      ? "bg-primaryColor text-white border-primaryColor"
                      : "bg-white border text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {opt.title}
              </button>
            ))}
          </div>

          {/* Quantity selector and Add to Cart button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Quantity System */}
            <div className="flex border justify-between items-center rounded-md">
              <button
                onClick={() => handleQuantity("dec")}
                className="px-3 cursor-pointer py-2 text-lg font-bold"
              >
                -
              </button>

              <span className="px-4">{quantity}</span>

              <button
                onClick={() => handleQuantity("inc")}
                className="px-3 cursor-pointer py-2 text-lg font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-primaryColor cursor-pointer w-full sm:w-auto text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
