"use client";

import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="flex items-center justify-between py-15">
      
      {/* 左半：回上頁 + 麵包屑 */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => window.history.back()}
          className="text-black text-xl font-semibold hover:underline"
        >
          回上頁
        </button>

        {/* 麵包屑 */}
        <div className="flex items-center ml-40 gap-1 text-xl">
          <Link href="/" className="text-black font-semibold text-2xl hover:underline">
            首頁
          </Link>
          <span className="text-black">/</span>
          <span className="text-[#ac8a46] font-semibold text-2xl">女裝</span>
        </div>
      </div>

      {/* 右半：篩選按鈕 */}
      <button className="flex items-center gap-1 text-black font-semibold hover:underline">
        <span>篩選</span>
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
}
