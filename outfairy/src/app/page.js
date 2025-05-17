import Header from "./components/Header";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <NewArrivals />
    </main>
  );
}