"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCarouselSimple({ title, products, viewMoreHref }) {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="px-4 py-10 relative">
      {/* 標題區 */}
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <Link href={viewMoreHref} className="text-xl font-semibold hover:underline">
          查看更多
        </Link>
      </div>

      {/* 商品與箭頭區 */}
      <div className="relative max-w-[90%] mx-auto">
        {/* 商品卡容器 */}
        <div className="flex justify-between gap-6 transition-all duration-300">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="flex-1">
              <Card product={product} />
            </Link>
          ))}
        </div>

        {/* 左右箭頭 */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="bg-[#FCF8F3] w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-105 transition disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="bg-[#FCF8F3] w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-105 transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots 分頁器 */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentPage ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
