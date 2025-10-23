"use client";
import Link from "next/link";
import React from "react";

export default function CategoryPage() {


  const Products = [
    {
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
    },
    {
      id: 2,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 26.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p10.png",
      price: 28.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
      ],
    },
    {
      id: 5,
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p11.png",
      price: 24.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
      ],
    },
    {
      id: 6,
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img: "/temporary/p12.png",
      price: 22.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Our Pizzas</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className=" flex items-center justify-center object-contain  overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-52 h-52 object-cover hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-56">
              <div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.desc}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primaryColor">
                  ${product.price.toFixed(2)}
                </span>

                <Link href={`/products/${product.id}`} className={`bg-primaryColor cursor-pointer text-white px-4 py-2 rounded-full text-sm hover:bg-primaryColor/90 transition`}>
                 Add To Cart
                </Link>

                </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
