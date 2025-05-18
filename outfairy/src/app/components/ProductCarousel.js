"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

export default function ProductCarousel({ title, products, viewMoreHref }) {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  // 計算總寬度與滑動距離
  const slideWidth = 100 / totalPages;

  return (
    <section className="relative px-4 py-4">
      {/* 標題區 */}
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <Link href={viewMoreHref} className="text-xl font-semibold hover:underline">
          查看更多
        </Link>
      </div>

      {/* 商品滑動區 */}
      <div className="relative flex justify-center mt-14">
         {/* 外層容器：限制最大寬度，置中 */}
        <div className="relative overflow-hidden max-w-screen-xl w-full mx-auto">
        {/* 外層滑動容器 */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${100 * totalPages}%`,
            transform: `translateX(-${currentPage * slideWidth}%)`,
          }}
        >
        {products.map((product) => (
          <div key={product.id} className="w-1/4 px-4 box-border">
            <Card product={product} />
          </div>
        ))}

        </div>
        </div>

        {/* 左箭頭 */}
        <button
          onClick={handlePrev}
          className="absolute  left-[1.5%] -left-1 top-1/2 -translate-y-10 z-10 bg-[#FCF8F3] w-14 h-14 flex items-center justify-center rounded-xl hover:scale-105 transition"
        >
          <ChevronLeft className="w-12 h-12" strokeWidth={1} />
        </button>

        {/* 右箭頭 */}
        <button
          onClick={handleNext}
          className="absolute right-[1.5%] -right-1 top-1/2 -translate-y-10 z-10 bg-[#FCF8F3] w-14 h-14 flex items-center justify-center rounded-xl hover:scale-105 transition"
        >
          <ChevronRight className="w-12 h-12" strokeWidth={1} />
        </button>
      </div>

      {/* 分頁 dots */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentPage ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
