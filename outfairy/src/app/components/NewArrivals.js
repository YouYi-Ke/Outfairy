// app/components/NewArrivals.js
import Image from "next/image";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <section className="px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">本週新品</h2>
        <Link href="#" className="text-sm text-gray-600">查看更多</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Image src="/product1.jpg" alt="product1" width={200} height={300} className="object-cover rounded" />
        <Image src="/product2.jpg" alt="product2" width={200} height={300} className="object-cover rounded" />
        <Image src="/product3.jpg" alt="product3" width={200} height={300} className="object-cover rounded" />
        <Image src="/product4.jpg" alt="product4" width={200} height={300} className="object-cover rounded" />
      </div>
    </section>
  );
}