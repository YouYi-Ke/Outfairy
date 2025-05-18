import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-8 py-4">
        <Link href="/">
          <h1
            className="text-center"
            style={{
              fontFamily: "Cormorant, serif",
              fontSize: "46px",
              lineHeight: "100%",
              letterSpacing: "1px",
            }}
          >
            Outfairy
          </h1>
        </Link>

        <nav className="space-x-12 text-black text-xl font-semibold">
          <Link href="/" className="hover:underline">首頁</Link>
          <Link href="/shop" className="hover:underline">男裝</Link>
          <Link href="/shop" className="hover:underline">女裝</Link>
          <Link href="/shop" className="hover:underline">童裝</Link>
          <Link href="/shop" className="hover:underline">配件</Link>
        </nav>

        <div className="flex items-center space-x-6">
          <Search className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>
    </>
  );
}
