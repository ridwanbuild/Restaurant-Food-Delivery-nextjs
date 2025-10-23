import React from "react";
import Image from "next/image";

export default function CartPage() {
  // ডেমো কার্ট ডাটা (dummy data)
  const cartItems = [
    {
      id: 1,
      title: "Sicilian Pizza",
      size: "Large",
      price: 24.9,
      img: "/temporary/p1.png",
    }

  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className=" py-16 container m-auto px-4">
      {/* Cart List */}
      <div className="  rounded-2xl shadow-md p-6 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-gray-300 border-b pb-4"
          >
            {/* Product Info */}
            <div className="flex items-center space-x-4">
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold uppercase text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.size}</p>
              </div>
            </div>

            {/* Price and Remove */}
            <div className="flex items-center space-x-6">

              <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>

              <button className="text-red-500 font-bold text-lg hover:text-red-700">
                ×
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 mt-8">
        <div className="flex justify-between text-gray-600 mb-2">

          <span>Subtotal ({cartItems.length} items)</span>

          <span className="font-medium">${subtotal.toFixed(2)}</span>

        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Delivery Cost</span>
          <span className="text-green-500 font-semibold">FREE!</span>
        </div>

        <div className="flex justify-between font-semibold text-lg text-gray-800 border-t pt-4">
          <span>TOTAL (INCL. VAT)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="w-full cursor-pointer mt-6 py-3 bg-primaryColor text-white font-semibold rounded-xl hover:opacity-90 transition">
          CHECKOUT
        </button>
      </div>


    </div>
  );
}
