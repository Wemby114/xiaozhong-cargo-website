'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '服务覆盖', href: '#coverage' },
  { label: '物流服务', href: '#services' },
  { label: '核心优势', href: '#advantages' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="晓众物流 Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <span
              className={`text-lg font-bold tracking-tight ${
                scrolled ? 'text-[#0f2744]' : 'text-white'
              }`}
            >
              晓众物流
            </span>
            <span
              className={`ml-2 text-xs font-medium tracking-wider ${
                scrolled ? 'text-[#666666]' : 'text-white/70'
              }`}
            >
              XIAO ZHONG CARGO
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#c8954c] ${
                scrolled ? 'text-[#1a1a1a]' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-lg bg-[#c8954c] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b8853c] hover:shadow-lg lg:block"
        >
          获取报价
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? 'text-[#0f2744]' : 'text-white'}`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#e0ddd8] bg-white px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full py-3 text-left text-sm font-medium text-[#1a1a1a] hover:text-[#c8954c]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-3 w-full rounded-lg bg-[#c8954c] px-5 py-2.5 text-sm font-semibold text-white"
          >
            获取报价
          </button>
        </div>
      )}
    </header>
  );
}
