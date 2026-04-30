"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Geometric square opening animation + fade to persistent pattern
  useEffect(() => {
    const rows = 12;
    const cols = 16;
    const squares: HTMLDivElement[] = [];
    
    if (!overlayRef.current) return;
    
    const overlay = overlayRef.current;
    const containerRect = { width: window.innerWidth, height: window.innerHeight };
    const cellW = containerRect.width / cols;
    const cellH = containerRect.height / rows;
    
    // Create grid squares
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const div = document.createElement('div');
        const left = j * cellW;
        const top = i * cellH;
        div.style.position = 'absolute';
        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        div.style.width = `${cellW + 1}px`;
        div.style.height = `${cellH + 1}px`;
        // Alternate shades for dynamic look
        div.style.backgroundColor = (i + j) % 2 === 0 ? '#000000' : '#1a1a1a';
        div.style.transform = 'scale(0)';
        div.style.opacity = '0';
        div.style.transition = `transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.4s ease`;
        div.style.transformOrigin = 'center center';
        overlay.appendChild(div);
        squares.push(div);
      }
    }
    
    // Staggered opening
    squares.forEach((sq, idx) => {
      setTimeout(() => {
        sq.style.transform = 'scale(1)';
        sq.style.opacity = '1';
      }, idx * 8);
    });
    
    // Fade out and remove overlay
    setTimeout(() => {
      squares.forEach((sq, idx) => {
        setTimeout(() => {
          sq.style.opacity = '0';
          sq.style.transform = 'scale(0.95)';
        }, idx * 3);
      });
      setTimeout(() => {
        setAnimationComplete(true);
        if (overlay) {
          overlay.style.opacity = '0';
          setTimeout(() => {
            if (overlay) overlay.style.display = 'none';
          }, 500);
        }
      }, 800);
    }, 1200);
    
    return () => {
      while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
      }
    };
  }, []);

  return (
    <main className="bg-white text-black overflow-x-hidden relative">
      {/* Geometric Opening Animation Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1000] pointer-events-none"
        style={{ opacity: animationComplete ? 0 : 1, transition: 'opacity 0.5s ease' }}
      />

      {/* Persistent Black & White Geometric Background Pattern (cubes/triangles) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base pattern: subtle repeating cubes / isometric triangles */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px),
            repeating-linear-gradient(135deg, #000 0px, #000 2px, transparent 2px, transparent 8px)
          `,
          backgroundSize: '24px 24px'
        }} />
        {/* Additional floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-black/10 rotate-12" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border-2 border-black/5 rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 border border-black/10 transform rotate-12" />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cubes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#000" strokeWidth="1" />
              <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <pattern id="triangles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,0 40,20 20,40 0,20" fill="none" stroke="#000" strokeWidth="0.8" />
              <polygon points="20,10 30,20 20,30 10,20" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cubes)" />
          <rect width="100%" height="100%" fill="url(#triangles)" style={{ mixBlendMode: 'multiply' }} />
        </svg>
      </div>

      {/* Mouse-following glow (subtle) */}
      <div
        className="fixed w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 z-0"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-transparent z-10">
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
        
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"
        />

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="z-20 relative"
          style={{ opacity, scale }}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6 bg-white/50 backdrop-blur-sm"
          >
            Since 2024
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-heading text-black mb-6 tracking-tight"
          >
            Bandan Sweets
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl text-black/60 mb-10 font-light"
          >
            Crafted with tradition. Presented with elegance.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/919818150911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-black/90 transition-all duration-300 shadow-lg shadow-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Order on WhatsApp →
            </motion.a>
            <Link
              href="/products"
              className="inline-block border border-black/30 px-10 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10"
        >
          <div className="text-black/40 text-sm mb-2">Scroll to Explore</div>
          <div className="w-6 h-10 border border-black/20 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-black/40 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* All other sections with semi-transparent backgrounds to let pattern shine through */}
      <div className="relative z-10">
        {/* --- FEATURED CATEGORIES --- */}
        <section className="px-6 py-20 md:py-28 bg-black/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-heading text-black mb-4"
              >
                Our Collections
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-20 h-0.5 bg-black/30 mx-auto"
              />
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-black/10 group-hover:border-black/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="aspect-square flex items-center justify-center bg-white/80">
                      <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                        {category.icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95">
                      <h3 className="text-black font-heading text-xl">{category.title}</h3>
                      <p className="text-black/60 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                  <h3 className="text-center text-black font-heading mt-4">{category.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SIGNATURE COLLECTION --- */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-white/80 backdrop-blur-sm max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading text-black mb-4"
            >
              Signature Collection
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto mb-6"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 max-w-2xl mx-auto"
            >
              A curation of our most exquisite handcrafted sweets, presented in
              luxurious packaging designed for memorable gifting.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/90 border border-black/10 rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-500 shadow-sm hover:shadow-xl backdrop-blur-sm"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white/80">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                      {product.imagePlaceholder}
                    </div>
                  </div>
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-black font-semibold text-xl">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-black/40 text-sm line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <motion.a
                      href={`https://wa.me/919818150911?text=I'm%20interested%20in%20your%20${encodeURIComponent(
                        product.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/70 text-sm font-medium tracking-wide hover:text-black transition-all inline-flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      Order Now →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="inline-block border border-black/30 px-8 py-3 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              View All Products →
            </Link>
          </motion.div>
        </section>

        {/* --- BRAND STORY --- */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden bg-black/5 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6 bg-white/30"
              >
                Our Legacy
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-heading text-black mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-16 h-0.5 bg-black/30 mx-auto mb-8"
              />
              <motion.p
                variants={fadeInUp}
                className="text-black/70 leading-relaxed text-lg md:text-xl font-light mb-6"
              >
                At Bandan Sweets, we believe that a sweet is more than a confection
                — it is a memory, a celebration, and a gesture of love. Born from a
                passion for preserving traditional recipes while embracing modern
                elegance, every creation is handcrafted with the finest ingredients.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-black/50 leading-relaxed max-w-3xl mx-auto"
              >
                We blend timeless artistry with refined presentation, transforming
                the act of gifting into an experience of pure sophistication.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-black hover:gap-3 transition-all"
                >
                  Discover More →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="px-6 py-20 bg-white/80 backdrop-blur-sm border-y border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-heading text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-black/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CORPORATE GIFTING --- */}
        <section className="px-6 py-24 md:py-32 bg-white/80 backdrop-blur-sm max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm bg-white/30">
                B2B Services
              </div>
              <h2 className="text-4xl md:text-6xl font-heading text-black leading-tight">
                Corporate <br /> Gifting
              </h2>
              <div className="w-16 h-0.5 bg-black/30" />
              <p className="text-black/70 text-lg leading-relaxed">
                Elevate your business relationships with a curated gifting
                experience. Our bespoke hampers and personalized packaging reflect
                your brand&apos;s commitment to quality and thoughtfulness.
              </p>
              <ul className="space-y-3 text-black/60">
                {corporateFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-black text-xl">✦</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/corporate-gifting"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all duration-300 mt-4 shadow-lg shadow-black/20"
              >
                Explore Corporate Services →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-black/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white/90 border border-black/10 rounded-3xl p-8 shadow-sm backdrop-blur-sm">
                <div className="text-7xl mb-4 text-center">🎁</div>
                <h3 className="text-2xl font-heading text-black mb-2 text-center">
                  Bespoke Hampers
                </h3>
                <p className="text-black/60 text-sm text-center">
                  Starting from ₹2,500 <br />
                  Minimum order: 20 units
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Custom Packaging</span>
                    <span className="text-black">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Logo Personalization</span>
                    <span className="text-black">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Pan-India Delivery</span>
                    <span className="text-black">✓</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/919818150911?text=I'm%20interested%20in%20corporate%20gifting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center text-black border border-black/30 rounded-full py-2 hover:bg-black hover:text-white transition-all"
                >
                  Inquire on WhatsApp →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="px-6 py-20 bg-black/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-heading text-black mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-20 h-0.5 bg-black/30 mx-auto"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/90 border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all duration-500 shadow-sm hover:shadow-lg backdrop-blur-sm"
                >
                  <div className="text-black/30 text-4xl mb-4">"</div>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.icon}</div>
                    <div>
                      <div className="text-black font-semibold">{testimonial.name}</div>
                      <div className="text-black/40 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="px-6 py-20 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-heading text-black mb-4"
              >
                The Bandan Promise
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-20 h-0.5 bg-black/30 mx-auto mb-6"
              />
              <motion.p
                variants={fadeInUp}
                className="text-black/60 max-w-2xl mx-auto"
              >
                What makes us different is our unwavering commitment to excellence at every step
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustSignals.map((signal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group text-center space-y-4 p-6 bg-white/90 border border-black/10 rounded-2xl hover:border-black/30 transition-all duration-500 shadow-sm hover:shadow-lg backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-5xl inline-block"
                  >
                    {signal.icon}
                  </motion.div>
                  <h3 className="text-xl font-heading text-black">{signal.title}</h3>
                  <p className="text-black/60 text-sm">{signal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="relative px-6 py-24 text-center overflow-hidden bg-black/5 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto bg-white/90 border border-black/10 rounded-3xl p-12 shadow-sm backdrop-blur-md"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-black/5 rounded-full blur-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-black mb-4">
              Experience the Elegance
            </h2>
            <p className="text-black/60 mb-8 text-lg">
              Order directly on WhatsApp and let us help you choose the perfect
              sweet ensemble for your occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919818150911"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-black/90 transition-all shadow-xl"
              >
                Start Your Order →
              </a>
              <Link
                href="/contact"
                className="inline-block border border-black/30 px-10 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all bg-white/50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

// Data Arrays (unchanged)
const categories = [
  { icon: "🍬", title: "Traditional", description: "Classic recipes passed down generations" },
  { icon: "✨", title: "Premium", description: "Luxury sweets" },
  { icon: "🎁", title: "Gift Hampers", description: "Curated gift boxes" },
  { icon: "💼", title: "Corporate", description: "Bespoke corporate gifting" },
];

const products = [
  {
    name: "The Royal Selections",
    description: "An assortment of classic milk sweets, delicately flavored with saffron and cardamom.",
    price: "₹2,499",
    originalPrice: "₹3,499",
    imagePlaceholder: "🍬",
    badge: "Bestseller",
  },
  {
    name: "Gold Leaf Peda",
    description: "Velvety pedas adorned with edible 24k gold leaf. A symbol of opulence.",
    price: "₹3,999",
    originalPrice: "₹5,499",
    imagePlaceholder: "✨",
    badge: "Premium",
  },
  {
    name: "Celebration Hamper",
    description: "A curated chest of premium sweets, dry fruits, and a personalized note.",
    price: "₹5,499",
    originalPrice: "₹7,499",
    imagePlaceholder: "🎁",
    badge: "Limited",
  },
];

const trustSignals = [
  { icon: "👨‍🍳", title: "Master Artisans", description: "Generations of sweet-making expertise" },
  { icon: "🌿", title: "Pure Ingredients", description: "No preservatives, only natural flavors" },
  { icon: "📦", title: "Elegant Packaging", description: "Gift-ready luxury boxes" },
  { icon: "🚚", title: "Pan-India Delivery", description: "Freshness guaranteed" },
];

const stats = [
  { value: "50+", label: "Premium Varieties" },
  { value: "10k+", label: "Happy Customers" },
  { value: "24/7", label: "Customer Support" },
  { value: "100%", label: "Quality Guarantee" },
];

const corporateFeatures = [
  "Customized packaging with your logo",
  "Tiered hampers for every occasion",
  "Nationwide delivery with temperature control",
  "Dedicated account manager",
  "Volume discounts available",
];

const testimonials = [
  {
    text: "The attention to detail and presentation is exceptional. Bandan Sweets made our corporate gifting truly memorable.",
    name: "Priya Sharma",
    role: "Director, TechCorp",
    icon: "👩‍💼",
  },
  {
    text: "The Gold Leaf Peda is absolutely divine! Perfect for special occasions and gifting.",
    name: "Rajesh Mehta",
    role: "Food Critic",
    icon: "👨‍🍳",
  },
  {
    text: "Outstanding quality and service. Our clients loved the personalized hampers.",
    name: "Anita Desai",
    role: "Event Planner",
    icon: "🎨",
  },
];