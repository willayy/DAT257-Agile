import Link from 'next/link';
import React from 'react';
import './header/header.css';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Brottkollen.se</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
            <Link href="pages/about">About</Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
