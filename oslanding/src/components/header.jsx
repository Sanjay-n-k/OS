import React, { useState } from "react";
import Logo from '../Assets/Logo.png';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  return (
    <header className="flex flex-col justify-center w-full text-sm font-semibold leading-none bg-stone-50 min-h-[100px] text-zinc-600">
      <nav className="flex justify-between items-center px-4 py-2 w-full bg-stone-50">
        {/* Logo */}
        <img
          loading="lazy"
          src={Logo}
          alt="Optimum Sync Logo"
          className="object-contain w-[250px] h-auto max-sm:w-[200px]"
        />        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/" className="px-3 py-2" aria-label="Go to Home">
            Home
          </a>
          <a href="/about" className="px-3 py-2" aria-label="Learn About Us">
            About Us
          </a>
          <a href="/contact" className="px-3 py-2" aria-label="Contact Us">
            Contact Us
          </a>
        </div>
      </nav>      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-stone-50 w-full px-4 py-2`}
      >
        <a href="/" className="block px-3 py-2 border-b border-gray-300">
          Home
        </a>
        <a href="/about" className="block px-3 py-2 border-b border-gray-300">
          About Us
        </a>
        <a href="/contact" className="block px-3 py-2">
          Contact Us
        </a>
      </div>
    </header>
  );
}