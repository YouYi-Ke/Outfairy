// app/components/NewArrivals.js
import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  { id: 1, src: "/image1.jpg", alt: "product1", href:"/shop", label:"男裝"  },
  { id: 2, src: "/image2.jpg", alt: "product2", href:"/shop", label:"女裝"  },
  { id: 3, src: "/image3.png", alt: "product3", href:"/shop", label:"童裝"  },
  { id: 4, src: "/image4.png", alt: "product4", href:"/shop", label:"配件" },
];

export default function NewArrivals() {
  return (
    <section className="px-8 py-18 w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">本週新品</h2>
        <Link href="#" className="text-xl font-semibold hover:underline">
          查看更多
        </Link>
      </div>

       <div className="grid grid-cols-4 md:grid-cols-4 gap-2 w-full">
        {newArrivals.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group block w-full aspect-square relative rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-103"
          >
            {/* 圖片 */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />

            {/* Hover 遮罩與文字 */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white px-18 py-2 rounded-xl text-[#ac8a46] text-2xl font-semibold">
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}