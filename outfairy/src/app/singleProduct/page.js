"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Card({ product, onLike }) {
  return (
    <div className="bg-[#fbf8f4] rounded-xl w-full aspect-[262.59/392.49] overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col">
      <div className="bg-[#d9d9d9] w-full aspect-[262.59/279] rounded-t-xl"></div>
      <div className="flex flex-col justify-between flex-1 px-2 pb-2">
        <h3 className="mt-[11.21px] text-base text-black">{product.name}</h3>
        <div className="my-[11.21px] flex items-center justify-between">
          <p className="text-black">${product.price}</p>
          <div className="flex gap-3 text-black">
            <Heart
              onClick={onLike}
              className={`w-5 h-5 cursor-pointer ${
                product.isLiked ? "fill-black text-black" : ""
              } hover:fill-black hover:text-black`}
            />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}


function ProductCarousel({ title }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState(
    Array.from({ length: 16 }, (_, i) => ({
      name: `商品 ${i + 1}`,
      price: 120,
      isLiked: false,
    }))
  );
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIdx = currentPage * itemsPerPage;
  const currentItems = products.slice(startIdx, startIdx + itemsPerPage);

  const handleHeartClick = (index) => {
    const updated = [...products];
    updated[index].isLiked = !updated[index].isLiked;
    setProducts(updated);
  };

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <button className="text-sm text-black hover:underline transition-all">
          查看更多
        </button>
      </div>

      <div className="relative">
      <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#FCF8F3] rounded-md p-2 shadow hover:bg-[#f0e8dd] active:scale-90 transition-all duration-200"
        onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

        <div className="flex justify-center space-x-4 overflow-hidden px-8">
          {currentItems.map((item, i) => (
            <div key={i} className="w-[180px] shrink-0">
              <Card
                product={item}
                onLike={() => handleHeartClick(startIdx + i)}
              />
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#FCF8F3] rounded-md p-2 shadow hover:bg-[#f0e8dd] active:scale-90 transition-all duration-200"
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
              idx === currentPage ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


export default function SingleProductPage() {
  const [isLiked, setIsLiked] = useState(false);
  const handleHeartClick = () => setIsLiked((prev) => !prev);

  const Crumb = ({ children }) => (
    <span className="cursor-pointer text-black hover:underline">{children}</span>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-black">
      <Button
        variant="ghost"
       className="mb-2 px-0 text-xs text-[#888888] hover:underline"
       onClick={() => window.history.back()}
      >
       回上頁
      </Button>

      <div className="text-sm mb-4 flex flex-wrap gap-1">
        <Crumb>首頁</Crumb> <span className="text-black">/</span>
        <Crumb>女裝</Crumb> <span className="text-black">/</span>
        <Crumb>上衣</Crumb> <span className="text-black">/</span>
        <Crumb>針織系列</Crumb> <span className="text-black">/</span>
        <span className="text-[#E5C988]">條紋毛衣</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image
            src="/條紋毛衣.png"
            alt="商品圖片"
            width={600}
            height={600}
            className="w-full object-cover rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">條紋毛衣</h1>
            <Heart
              onClick={handleHeartClick}
              className={`w-6 h-6 cursor-pointer ${
                isLiked ? "fill-black text-black" : "text-gray-400"
              } hover:fill-black hover:text-black`}
            />
          </div>
          <p className="text-xl text-black mt-2">$150</p>

          <Button
            className="mt-6 w-full bg-[#E5C988] hover:bg-[#D4B25D] text-white"
          >
            加入購物車
          </Button>

          <div className="mt-8">
            <Accordion type="multiple">
            <p className="text-black mt-2">
            •標準送貨時間為五至七個工作日
            </p>
            <p className="text-black">
            •請於【客戶服務】頁了解詳細送貨時間
            </p>
            <div className="h-4" />
              <AccordionItem value="item-1">
                <AccordionTrigger>出貨及付款</AccordionTrigger>
                <AccordionContent>寄送時間約3-7天，付款方式支援信用卡。</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>退換與尺碼</AccordionTrigger>
                <AccordionContent>七日內可退換，請保持商品全新。</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>保養指南</AccordionTrigger>
                <AccordionContent>請使用低溫水手洗，不可烘乾。</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>材質</AccordionTrigger>
                <AccordionContent>棉 80%、聚酯纖維 20%</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <ProductCarousel title="猜你會喜歡" />
      <ProductCarousel title="建議穿搭" />
    </div>
  );
}
