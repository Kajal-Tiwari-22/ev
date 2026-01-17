'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-xl'
        : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/image/logo.png"
            alt="Shandilya MedTech Logo"
            width={90}
            height={45}
            className="group-hover:scale-105 transition-transform"
          />
          <span className="hidden sm:block text-xl font-extrabold tracking-wide text-gray-900">
            Shandilya <span className="text-orange-500">MedTech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-6 flex flex-col justify-between"
        >
          <span className={`h-1 bg-gray-900 rounded transition-all ${isOpen && 'rotate-45 translate-y-2'}`} />
          <span className={`h-1 bg-gray-900 rounded transition-all ${isOpen && 'opacity-0'}`} />
          <span className={`h-1 bg-gray-900 rounded transition-all ${isOpen && '-rotate-45 -translate-y-2'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="md:hidden bg-white/90 backdrop-blur-xl shadow-xl"
        >
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg"
            >
              Get Quote
            </Link>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
