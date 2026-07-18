"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-background font-serif font-bold">✨</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-accent">Dr Ehi</h1>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-accent transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#testimonials" className="hover:text-accent transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        <button className="btn-primary hidden md:block">Book Now</button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent text-2xl"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-surface border-t border-accent/20 p-4 flex flex-col gap-4">
          <a href="#services" className="hover:text-accent transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#testimonials" className="hover:text-accent transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
          <button className="btn-primary w-full">Book Now</button>
        </nav>
      )}
    </header>
  );
}
