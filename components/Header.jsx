import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4 text-center text-2xl font-semibold">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/account" className="hover:underline">
          Account
        </Link>
      </nav>
    </header>
  );
};

export default Header;
