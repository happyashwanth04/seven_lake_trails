"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.webp"
              alt="Seven lakes Trail Adventure"
              className="object-contain w-24 rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-emerald-600 transition"
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-gray-700 font-medium hover:text-emerald-600 transition"
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-medium hover:text-emerald-600 transition"
          >
            About
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              // Close icon
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-lg border-t border-gray-100 animate-fadeInDown">
          <Link
            href="/"
            className="block text-gray-700 py-2 font-medium hover:text-emerald-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="block text-gray-700 py-2 font-medium hover:text-emerald-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 py-2 font-medium hover:text-emerald-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
