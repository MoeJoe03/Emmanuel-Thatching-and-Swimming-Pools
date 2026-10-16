'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightHeader = isScrolled || (pathname !== '/' && !isScrolled);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3.5' 
          : pathname === '/' 
            ? 'bg-transparent py-5' 
            : 'bg-black/85 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-12 sm:h-14">
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col">
            <span className={`font-black tracking-tight text-base sm:text-lg uppercase transition-colors leading-tight ${isScrolled ? 'text-black' : 'text-white'}`}>
              Emmanuel Thatching &amp; Pools
            </span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase leading-tight">
              Pty Ltd
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-bold tracking-wider uppercase transition-colors relative py-1 ${
                  isActive 
                    ? 'text-primary font-black' 
                    : isScrolled 
                      ? 'text-gray-700 hover:text-black' 
                      : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
                )}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="bg-primary text-white px-6 py-2.5 text-[15px] font-bold uppercase tracking-wider hover:bg-[#9a7009] shadow-lg shadow-amber-900/10 transition-colors"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-black" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 flex flex-col items-center space-y-5 border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-bold tracking-wider uppercase ${pathname === item.href ? 'text-primary font-black' : 'text-gray-900 hover:text-primary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-primary text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
