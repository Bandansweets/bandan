"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Complete navigation links with all pages
  const navLinks = [
    { href: "/", label: "Home", icon: "⌂" },
    { href: "/products", label: "Collection", icon: "🍬" },
    { href: "/about", label: "About", icon: "❦" },
    { href: "/philosophy", label: "Philosophy", icon: "✨" },
    { href: "/gifting", label: "Gifting", icon: "🎁" },
    { href: "/corporate-gifting", label: "Corporate", icon: "🏢" },
    { href: "/contact", label: "Contact", icon: "✉" },
  ];

  // Dropdown menus for desktop
  const dropdowns = [
    {
      title: "About",
      items: [
        { href: "/about", label: "Our Story" },
        { href: "/philosophy", label: "Philosophy" },
        { href: "/mission", label: "Mission" },
        { href: "/vision", label: "Vision" },
        { href: "/achievements", label: "Achievements" },
        { href: "/quality", label: "Quality & Hygiene" },
      ],
    },
    {
      title: "Gifting",
      items: [
        { href: "/personalised-gifting", label: "Personalised Gifting" },
        { href: "/corporate-gifting", label: "Corporate Gifting" },
        { href: "/gifting", label: "Gifting Guide" },
        { href: "/corporate-clients", label: "Corporate Clients" },
        { href: "/partners", label: "Partnerships" },
      ],
    },
    {
      title: "Info",
      items: [
        { href: "/delivery", label: "Delivery Info" },
        { href: "/ordering", label: "Ordering Guide" },
        { href: "/contact", label: "Contact Us" },
        { href: "/complaints", label: "Grievance Redressal" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-amber-500/20 shadow-2xl"
            : "bg-gradient-to-b from-black/80 to-transparent border-b border-amber-500/10"
        }`}
      >
        {/* Top decorative line */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent transition-opacity duration-700 ${isScrolled ? "opacity-100" : "opacity-50"}`} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo Section - Ultra Classical */}
            <Link href="/" className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <div className="flex items-baseline gap-1">
                {/* Decorative left ornament */}
                <span className="hidden md:inline text-amber-500/30 text-sm transition-opacity duration-300 group-hover:text-amber-500/50">❦</span>
                
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-heading tracking-wide">
                    <span className="text-amber-500">BANDAN</span>
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-400 tracking-[0.3em] font-light ml-1">
                    SWEETS
                  </span>
                </div>
                
                {/* Decorative right ornament */}
                <span className="hidden md:inline text-amber-500/30 text-sm transition-opacity duration-300 group-hover:text-amber-500/50">❦</span>
              </div>
              
              {/* Animated underline with classical pattern */}
              <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
                <div className={`w-full h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent transition-transform duration-500 ${isHovered ? "translate-x-0" : "-translate-x-full"}`} />
              </div>
              
              {/* Est. year */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-amber-500/30 tracking-[0.2em] whitespace-nowrap">
                EST. 2024
              </div>
            </Link>

            {/* Desktop Navigation - Classical Style */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Simple Links */}
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.15em] font-light transition-all duration-300 py-2 ${
                    pathname === link.href
                      ? "text-amber-500"
                      : "text-gray-300 hover:text-amber-400"
                  }`}
                >
                  <span className="mr-1 text-amber-500/40 text-[10px]">{link.icon}</span>
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0 left-0 right-0 h-px bg-amber-500/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Dropdown: About */}
              <div className="relative group">
                <button className="text-xs uppercase tracking-[0.15em] font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2 flex items-center gap-1">
                  <span className="text-amber-500/40 text-[10px]">❦</span>
                  About
                  <span className="text-[8px] text-amber-500/40 group-hover:rotate-180 transition-transform duration-300">▼</span>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0a0a0a] border border-amber-500/20 rounded-sm shadow-2xl min-w-[180px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0a0a0a] border-l border-t border-amber-500/20" />
                    {dropdowns[0].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-xs text-gray-400 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300 border-b border-amber-500/10 last:border-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dropdown: Gifting */}
              <div className="relative group">
                <button className="text-xs uppercase tracking-[0.15em] font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2 flex items-center gap-1">
                  <span className="text-amber-500/40 text-[10px]">🎁</span>
                  Gifting
                  <span className="text-[8px] text-amber-500/40 group-hover:rotate-180 transition-transform duration-300">▼</span>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0a0a0a] border border-amber-500/20 rounded-sm shadow-2xl min-w-[200px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0a0a0a] border-l border-t border-amber-500/20" />
                    {dropdowns[1].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-xs text-gray-400 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300 border-b border-amber-500/10 last:border-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dropdown: Info */}
              <div className="relative group">
                <button className="text-xs uppercase tracking-[0.15em] font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2 flex items-center gap-1">
                  <span className="text-amber-500/40 text-[10px]">ℹ</span>
                  Info
                  <span className="text-[8px] text-amber-500/40 group-hover:rotate-180 transition-transform duration-300">▼</span>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0a0a0a] border border-amber-500/20 rounded-sm shadow-2xl min-w-[180px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0a0a0a] border-l border-t border-amber-500/20" />
                    {dropdowns[2].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-xs text-gray-400 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300 border-b border-amber-500/10 last:border-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.15em] font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2 flex items-center gap-1"
              >
                <span className="text-amber-500/40 text-[10px]">✉</span>
                Contact
              </Link>
            </div>

            {/* Right Side - Classical CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Decorative separator */}
              <div className="w-px h-6 bg-amber-500/20" />
              
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-6 py-2 text-xs uppercase tracking-[0.2em] font-light border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Inquire</span>
                <span className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              
              {/* Decorative diamond */}
              <span className="text-amber-500/20 text-xs">✦</span>
            </div>

            {/* Mobile Menu Button - Classical Style */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-20 border border-amber-500/20 rounded-sm hover:border-amber-500/40 transition-all duration-300"
            >
              <span
                className={`w-5 h-px bg-amber-500 transition-all duration-500 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-px bg-amber-500 transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-px bg-amber-500 transition-all duration-500 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent transition-opacity duration-700 ${isScrolled ? "opacity-100" : "opacity-50"}`} />
      </nav>

      {/* Mobile Menu - Classical Elegant Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 w-16 h-16 opacity-30">
              <div className="absolute top-0 left-0 w-8 h-px bg-amber-500" />
              <div className="absolute top-0 left-0 w-px h-8 bg-amber-500" />
            </div>
            <div className="absolute top-6 right-6 w-16 h-16 opacity-30">
              <div className="absolute top-0 right-0 w-8 h-px bg-amber-500" />
              <div className="absolute top-0 right-0 w-px h-8 bg-amber-500" />
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-6 py-20">
              {/* Ornamental header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-8 h-px bg-amber-500/30" />
                  <span className="text-amber-500/40 text-xs tracking-[0.3em]">MENU</span>
                  <span className="w-8 h-px bg-amber-500/30" />
                </div>
                <div className="text-amber-500/20 text-2xl">❦</div>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-5 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-xl font-heading tracking-wide transition-all duration-300 ${
                        pathname === link.href
                          ? "text-amber-500"
                          : "text-gray-300 hover:text-amber-400"
                      }`}
                    >
                      <span className="text-amber-500/40 text-sm mr-2">{link.icon}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Divider */}
              <div className="w-12 h-px bg-amber-500/20 my-6" />
              
              {/* Additional Mobile Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 text-center"
              >
                <Link href="/delivery" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-500 hover:text-amber-400 transition-colors">
                  Delivery Info
                </Link>
                <Link href="/quality" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-500 hover:text-amber-400 transition-colors">
                  Quality Promise
                </Link>
                <Link href="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-500 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-3 border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm"
                >
                  Inquire Now
                </a>
              </motion.div>

              {/* Footer ornament */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-6 h-px bg-amber-500/20" />
                  <span className="text-amber-500/20 text-xs">❦</span>
                  <span className="w-6 h-px bg-amber-500/20" />
                </div>
                <p className="text-[10px] text-gray-600 tracking-[0.2em]">
                  BANDAN SWEETS ✦ EST. 2024
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}