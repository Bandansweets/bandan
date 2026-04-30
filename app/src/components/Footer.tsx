"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2024);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Complete footer sections with all pages
  const footerSections = [
    {
      title: "✦ EXPLORE ✦",
      links: [
        { href: "/products", label: "Our Collection" },
        { href: "/about", label: "Our Story" },
        { href: "/philosophy", label: "Our Philosophy" },
        { href: "/mission", label: "Our Mission" },
        { href: "/vision", label: "Our Vision" },
        { href: "/achievements", label: "Achievements" },
      ],
    },
    {
      title: "✦ GIFTING ✦",
      links: [
        { href: "/personalised-gifting", label: "Personalised Gifting" },
        { href: "/corporate-gifting", label: "Corporate Gifting" },
        { href: "/gifting", label: "Gifting Guide" },
        { href: "/corporate-clients", label: "Corporate Clients" },
        { href: "/partners", label: "Partnerships" },
      ],
    },
    {
      title: "✦ INFORMATION ✦",
      links: [
        { href: "/delivery", label: "Delivery Info" },
        { href: "/ordering", label: "Ordering Guide" },
        { href: "/quality", label: "Quality & Hygiene" },
        { href: "/contact", label: "Contact Us" },
        { href: "/complaints", label: "Grievance Redressal" },
      ],
    },
    {
      title: "✦ LEGAL ✦",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/cookies", label: "Cookie Policy" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "https://instagram.com" },
    { name: "Facebook", icon: "👍", href: "https://facebook.com" },
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com" },
    { name: "YouTube", icon: "📺", href: "https://youtube.com" },
  ];

  const paymentMethods = [
    { icon: "💳", name: "Credit Card" },
    { icon: "📱", name: "UPI" },
    { icon: "🏦", name: "Net Banking" },
    { icon: "💎", name: "Crypto" },
  ];

  const quickContact = [
    { icon: "📞", text: "+91 98765 43210", link: "tel:+919876543210" },
    { icon: "✉️", text: "sweet@bandansweets.com", link: "mailto:sweet@bandansweets.com" },
    { icon: "📍", text: "Mumbai, India", link: null },
    { icon: "⏰", text: "10 AM - 8 PM (Mon-Sat)", link: null },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 mt-20 overflow-hidden">
      
      {/* Ornate Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="absolute top-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
        <div className="absolute top-0 left-0 w-12 h-px bg-amber-500" />
        <div className="absolute top-0 left-0 w-px h-12 bg-amber-500" />
        <div className="absolute bottom-0 right-0 w-12 h-px bg-amber-500" />
        <div className="absolute bottom-0 right-0 w-px h-12 bg-amber-500" />
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
        <div className="absolute top-0 right-0 w-12 h-px bg-amber-500" />
        <div className="absolute top-0 right-0 w-px h-12 bg-amber-500" />
        <div className="absolute bottom-0 left-0 w-12 h-px bg-amber-500" />
        <div className="absolute bottom-0 left-0 w-px h-12 bg-amber-500" />
      </div>

      {/* Vintage Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
        
        {/* Top Section with Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 pb-8 border-b border-amber-500/20"
        >
          {/* Ornate Divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber-500/40 text-sm">✦</span>
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/40" />
            <span className="text-amber-500/60 text-xs tracking-[0.3em]">EST. 2024</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/40" />
            <span className="text-amber-500/40 text-sm">✦</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">✨</span>
            <h2 className="text-3xl md:text-4xl font-heading tracking-wider">
              <span className="text-amber-500">BANDAN</span>
              <span className="text-gray-500 text-xl mx-2">✦</span>
              <span className="text-gray-400 text-xl">SWEETS</span>
            </h2>
            <span className="text-3xl">✨</span>
          </div>
          
          <p className="text-gray-500 text-sm tracking-wide mt-3 max-w-md mx-auto">
            "Crafting moments of sweetness with timeless elegance"
          </p>
          
          {/* Small decorative line */}
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-amber-500/30" />
            ))}
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Contact Section - Classical Style */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Classical Ornament */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-amber-500/40" />
                <span className="text-amber-500/60 text-xs">❦</span>
                <div className="w-8 h-px bg-amber-500/40" />
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                "In every sweet we craft, we preserve the legacy of traditional recipes 
                while embracing the elegance of modern presentation."
              </p>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-amber-500/20" />
                <span className="text-amber-500/40 text-xs">❦</span>
                <div className="w-8 h-px bg-amber-500/20" />
              </div>

              {/* Contact Info - Vintage Style */}
              <div className="space-y-3 pt-4">
                {quickContact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <span className="text-amber-500/60 w-6">{item.icon}</span>
                    {item.link ? (
                      <a href={item.link} className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-amber-500/80 font-heading text-sm tracking-wider mb-5">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-amber-400 transition-all duration-300 hover:pl-2 inline-block font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Middle Ornamental Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#0a0a0a] text-amber-500/30 text-sm">❦ ❦ ❦</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-4">
          
          {/* Social Links - Classical Style */}
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="group relative w-10 h-10 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500/60 hover:border-amber-500/60 hover:text-amber-400 transition-all duration-300"
              >
                <span className="text-lg">{social.icon}</span>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-amber-500/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-600 text-[10px] tracking-wider">SECURE PAYMENTS</span>
            <div className="flex gap-2">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="w-10 h-7 bg-black/50 border border-amber-500/15 rounded flex items-center justify-center text-lg group hover:border-amber-500/30 transition-colors"
                  title={method.name}
                >
                  {method.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-xs tracking-wide">
              © {year} BANDAN SWEETS
            </p>
            <p className="text-gray-700 text-[10px] tracking-wider mt-1">
              CRAFTED WITH ELEGANCE ✦ ALL RIGHTS RESERVED
            </p>
          </div>
        </div>

        {/* Bottom Ornamental Line */}
        <div className="flex justify-center gap-1 mt-8 pt-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-amber-500/20" />
          ))}
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </footer>
  );
}

// Back to Top Button Component with Classical Design
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-[#0a0a0a] border border-amber-500/30 text-amber-500 flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 z-40 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="text-xl group-hover:animate-bounce">↑</span>
      <span className="absolute -top-8 right-0 text-[10px] text-amber-500/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Back to Top
      </span>
    </motion.button>
  );
}