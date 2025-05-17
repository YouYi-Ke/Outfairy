// app/components/Header.js
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
      <header className="flex items-center justify-between px-8 py-4">
        <Link href="/">
        <h1
          className="text-center"
          style={{
            fontFamily: "Cormorant, serif",
            fontSize: "42px",
            lineHeight: "100%",
            letterSpacing: "2px",
          }}
        >
          Outfairy
        </h1>
        </Link>

        <nav
          className="space-x-12 text-sm"
          style={{
            fontFamily: "'Songti TC', 'Noto Serif TC', serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          <Link href="/">首頁</Link>
          <Link href="/shop">男裝</Link>
          <Link href="/shop">女裝</Link>
          <Link href="/shop">童裝</Link>
          <Link href="/shop">配件</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
          <User className="w-5 h-5" />
        </div>
      </header>
    </>
  );
}
