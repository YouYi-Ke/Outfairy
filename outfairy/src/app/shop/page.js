import Image from "next/image";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";
import { Products } from "../data/products";

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
    <Header />
  <div className="px-10">
    <Breadcrumb />
  <div className="flex items-start">
    <Sidebar />
    <div className="flex-1 max-w-7xl mx-auto">
      <Grid products={Products.women} />
    </div>
  </div>
  </div>
</main>

  );
}

