import Link from "next/link";
import React from "react";

export default function MenuPage() {
  const menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];

  return (
    <div className="container  grid lg:grid-cols-3 m-auto px-4 py-16 ">
      
      {menu.map((item) => (
        <Link href={`/menu/${item.slug}`}
          key={item.id}
          className="relative h-96 w-full  overflow-hidden  shadow-lg"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div
            className={`absolute  inset-0 bg-gradient-to-r flex items-center px-5 `}
          >
            <div className="w-48 ">
              <h2
                className={`text-xl md:text-2xl font-bold mb-2 ${
                  item.color === "black" ? "text-black" : "text-white"
                }`}
              >
                {item.title}
              </h2>

              <p
                className={`text-sm  ${
                  item.color === "black" ? "text-gray-700" : "text-gray-200"
                }`}
              >
                {item.desc}
              </p>

              <button className={`mt-6 cursor-pointer ${item.color === "black" ? "bg-primaryColor text-white" : "bg-black text-white"} px-8  py-2 rounded-full font-normal   transition`}>
                Explore
              </button>


            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
