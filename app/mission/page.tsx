"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function MissionPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section with Parallax */}
      <section ref={targetRef} className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-black/5 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-black/5 rounded-full"
        />
        
        <motion.div
          style={{ opacity, scale }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6"
          >
            Our Purpose
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading text-black mb-6"
          >
            Our Mission
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Bridging tradition and innovation to create sweet moments for everyone
          </motion.p>
        </motion.div>
      </section>

      {/* Core Mission Statement */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-black/20 text-8xl font-heading mb-4">"</div>
              <p className="text-2xl md:text-3xl font-heading text-black leading-tight mb-6">
                To make exceptional sweets accessible to everyone, from individual celebrations to enterprise-level gifting.
              </p>
              <div className="w-16 h-0.5 bg-black/30 mb-4" />
              <p className="text-black/60">
                — Bandan Sweets Founding Team
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/5 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="font-heading text-black">Zero Compromise</div>
                  <div className="text-black/40 text-xs">On Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">❤️</div>
                  <div className="font-heading text-black">100%</div>
                  <div className="text-black/40 text-xs">Customer Delight</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌍</div>
                  <div className="font-heading text-black">Pan-India</div>
                  <div className="text-black/40 text-xs">Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <div className="font-heading text-black">Premium</div>
                  <div className="text-black/40 text-xs">Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retail Customers Section */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              For Every Celebration
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              Making every personal moment sweeter with handcrafted excellence
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {retailFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3">{item.title}</h3>
                <p className="text-black/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              Enterprise Excellence
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              Elevating business relationships through thoughtful gifting solutions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporateFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/5 border border-black/10 rounded-2xl p-8 text-center hover:bg-black hover:text-white transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3 group-hover:text-white">{item.title}</h3>
                <p className="text-black/60 text-sm group-hover:text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bridge Section */}
      <section className="relative px-6 py-20 bg-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6"
            >
              One Brand, Many Moments
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-heading text-black mb-6"
            >
              Bridging Hearts & Businesses
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto mb-8"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/70 leading-relaxed text-lg mb-6"
            >
              Whether you're celebrating a birthday with loved ones or impressing 
              thousands of clients, our commitment remains the same: uncompromising 
              quality, elegant presentation, and timely delivery.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-black/60"
            >
              From a single box to thousands, every order receives the same 
              dedication to craftsmanship and care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              Guiding Principles
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-heading text-black mb-2">{value.title}</h3>
                <p className="text-black/50 text-xs">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              Our Impact
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading text-black mb-2">
                  {impact.value}
                </div>
                <div className="text-black/50 text-sm">{impact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
            Join Our Journey
          </h2>
          <p className="text-black/60 mb-8">
            Whether you're celebrating a personal milestone or planning corporate gifting, 
            we're here to make every moment sweeter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
            >
              Explore Collection →
            </Link>
            <Link
              href="/corporate-gifting"
              className="inline-block border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              Corporate Solutions
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const retailFocus = [
  {
    icon: "🎂",
    title: "Personal Celebrations",
    description: "Birthdays, anniversaries, and special moments made sweeter",
  },
  {
    icon: "🎁",
    title: "Thoughtful Gifting",
    description: "Express love and appreciation with premium sweets",
  },
  {
    icon: "✨",
    title: "Festive Joy",
    description: "Traditional sweets for every festival and occasion",
  },
];

const corporateFocus = [
  {
    icon: "🏢",
    title: "Client Relations",
    description: "Strengthen business relationships with elegant gifting",
  },
  {
    icon: "👥",
    title: "Employee Recognition",
    description: "Reward and motivate teams with premium treats",
  },
  {
    icon: "🎪",
    title: "Event Partnerships",
    description: "Bulk solutions for conferences, seminars, and galas",
  },
];

const values = [
  { icon: "💎", title: "Quality First", description: "Never compromise on ingredients or craftsmanship" },
  { icon: "❤️", title: "Customer Centric", description: "Your satisfaction drives everything we do" },
  { icon: "🌱", title: "Sustainable", description: "Eco-friendly packaging and practices" },
  { icon: "🎯", title: "Innovation", description: "Continuously evolving to serve you better" },
];

const impacts = [
  { value: "50+", label: "Sweet Varieties" },
  { value: "10k+", label: "Happy Customers" },
  { value: "100+", label: "Corporate Clients" },
  { value: "24/7", label: "Customer Support" },
];