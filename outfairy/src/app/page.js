import Header from "./components/Header";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";
import ProductCarousel from "./components/ProductCarousel";
import {Products} from "./data/products";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <NewArrivals />

      <div>
      <ProductCarousel
        title="男裝"
        products={Products.men}
        viewMoreHref="/men"
      />
      <ProductCarousel
        title="女裝"
        products={Products.women}
        viewMoreHref="/women"
      />
      <ProductCarousel
        title="童裝"
        products={Products.kids}
        viewMoreHref="/kids"
      />
      <ProductCarousel
        title="配件"
        products={Products.accessories}
        viewMoreHref="/accessories"
      />
    </div>

    </main>
  );
}