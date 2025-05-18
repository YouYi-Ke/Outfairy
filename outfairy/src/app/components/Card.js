"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Card({ product }) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleCardClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-[#fbf8f4] rounded-xl w-full aspect-[262.59/392.49] overflow-hidden shadow-sm hover:shadow-lg hover:scale-101 transition flex flex-col cursor-pointer"
    >
      <div className="bg-[#d9d9d9] w-full aspect-[262.59/279] rounded-t-xl"></div>

      <div className="flex flex-col justify-between flex-1 px-2 pb-2">
        <h3 className="mt-[11.21px] text-base text-black">{product.name}</h3>
        <div className="my-[11.21px] flex items-center justify-between">
          <p className="text-black">${product.price}</p>
          <div className="flex gap-3 text-black">
            <button
              onClick={(e) => {
                e.stopPropagation(); // 阻止跳轉
                setIsLiked((prev) => !prev);
              }}
            >
              <Heart
                className={`w-5 h-5 transition ${
                  isLiked ? "fill-red-500 stroke-red-500" : ""
                }`}
              />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // 阻止跳轉
                setIsInCart((prev) => !prev);
              }}
            >
              <ShoppingCart
                className={`w-5 h-5 transition ${
                  isInCart ? "fill-yellow-400 stroke-yellow-400" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
