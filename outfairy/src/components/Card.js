import { Heart, ShoppingCart } from "lucide-react";

export default function Card({ product }) {
  return (
    <div className="bg-[#fbf8f4] rounded-xl w-full aspect-[262.59/392.49] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div className="bg-[#d9d9d9] w-full aspect-[262.59/279] rounded-t-xl"></div>

      <div className="flex flex-col justify-between flex-1 px-2 pb-2">
        <h3 className="mt-[11.21px] text-base text-black">{product.name}</h3>
        <div className="my-[11.21px] flex items-center justify-between">
          <p className="text-black">${product.price}</p>
          <div className="flex gap-3 text-black">
            <Heart className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
          </div>
       </div>
      </div>
    </div>

  );
}
