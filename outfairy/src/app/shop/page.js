import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import Grid from "@/components/Grid";
import { products } from "@/data/Data";

export default function Shop() {
  return (
    <main className="px-10 mt-[62px]">
  <Breadcrumb />
  <div className="flex items-start">
    <Sidebar />
    <div className="flex-1 max-w-7xl mx-auto">
      <Grid products={products} />
    </div>
  </div>
</main>

  );
}

