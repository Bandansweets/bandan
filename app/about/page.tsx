"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
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

export default function About() {
  return (
    <main className="bg-dark text-softwhite overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        {/* Animated Gold Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"
        />

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center z-10 px-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-sm mb-6 backdrop-blur-sm"
          >
            Our Story
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-gold mb-6"
          >
            About Bandan Sweets
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-gold/50 mx-auto"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-sm"
        >
          Discover Our Legacy
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative bg-black/40 border border-gold/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-heading text-gold mb-3">Since 2024</h3>
              <p className="text-gray-400 leading-relaxed">
                A new standard in premium sweet craftsmanship, blending centuries-old
                recipes with contemporary elegance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gold mb-6">
              A Legacy of <br />
              <span className="text-softwhite">Sweet Excellence</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold/50 mb-6" />
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              Rooted in tradition and refined for modern elegance, Bandan Sweets
              represents a legacy of taste and presentation that spans generations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every piece is handcrafted with precision, ensuring quality, purity,
              and an unforgettable experience that transforms ordinary moments into
              extraordinary memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-6 py-20 md:py-28 bg-black/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-heading text-gold mb-6"
            >
              Our Philosophy
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-gold/50 mx-auto mb-8"
            />
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 leading-relaxed text-lg md:text-xl font-light mb-8"
            >
              We believe that sweets are more than confections—they are expressions
              of love, celebration, and thoughtful gifting.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 leading-relaxed"
            >
              Our commitment to excellence drives every decision, from sourcing the
              finest ingredients to designing packaging that elevates the act of giving.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-heading text-gold mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-0.5 bg-gold/50 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-black/40 border border-gold/20 rounded-2xl p-8 text-center backdrop-blur-sm hover:border-gold/60 transition-all duration-500 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-heading text-gold mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="relative px-6 py-20 md:py-28 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-heading text-gold leading-tight">
                Artisan <br />
                <span className="text-softwhite">Craftsmanship</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold/50" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Each sweet is meticulously handcrafted by master artisans who bring
                decades of experience and unwavering dedication to their craft.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-gold">✦</span> Traditional recipes preserved
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">✦</span> Premium ingredients sourced globally
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">✦</span> Small-batch production for quality
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">✦</span> Artisanal attention to detail
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-1">
                <div className="bg-black/60 rounded-2xl p-8 backdrop-blur-sm border border-gold/20">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍🍳</div>
                    <p className="text-gold font-heading text-xl italic">
                      "Tradition meets artistry in every creation"
                    </p>
                    <div className="mt-6 text-gray-500 text-sm">
                      — Master Artisan
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-heading text-gold mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-0.5 bg-gold/50 mx-auto"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/20 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className="flex-1">
                  <div className="bg-black/40 border border-gold/20 rounded-2xl p-6 backdrop-blur-sm hover:border-gold/60 transition-all">
                    <div className="text-gold text-2xl mb-2">{item.year}</div>
                    <h3 className="text-xl font-heading text-gold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-gold rounded-full border-2 border-dark" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-black/80 to-black/40 border border-gold/20 rounded-3xl p-12 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-gold mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Discover our exquisite collection of handcrafted sweets,
            perfect for every celebration and gifting occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold px-8 py-3 rounded-full text-gold font-semibold hover:bg-gold hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const values = [
  {
    icon: "💎",
    title: "Quality First",
    description: "Only the finest ingredients, sourced ethically and handled with care.",
  },
  {
    icon: "🎨",
    title: "Artistic Excellence",
    description: "Every creation is a masterpiece of flavor and presentation.",
  },
  {
    icon: "🤝",
    title: "Trust & Integrity",
    description: "Building lasting relationships through honesty and transparency.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Bandan Sweets was founded with a vision to redefine premium gifting.",
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Launched our signature collection and corporate gifting division.",
  },
  {
    year: "2026",
    title: "Present Day",
    description: "Continuing to delight customers with unparalleled quality and service.",
  },
];