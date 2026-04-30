"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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

export default function VisionPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* Hero Section with Parallax */}
      <section ref={targetRef} className="relative h-[70vh] min-h-[550px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />

        {/* Animated Ornamental Background */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 border border-black/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-black/5 rounded-full"
        />

        {/* Floating Ornaments */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-10 text-4xl opacity-20"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/3 right-10 text-4xl opacity-20"
        >
          ❦
        </motion.div>

        <motion.div style={{ opacity, scale }} className="text-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6"
          >
            Looking Ahead
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading text-black mb-6 tracking-tight"
          >
            Our Vision
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            To become India's most trusted sweet brand — where tradition meets trust, and every relationship is celebrated with uncompromising quality.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <div className="text-black/40 text-xs mb-2">Discover Our Vision</div>
          <div className="w-5 h-8 border border-black/20 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-black/30 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Core Vision Statement */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-black/10 rounded-3xl p-12 bg-black/5"
          >
            <div className="text-7xl mb-6">✨</div>
            <p className="text-2xl md:text-3xl font-heading text-black leading-relaxed">
              "To redefine the art of sweet gifting in India — making every celebration sweeter, every relationship stronger, and every bite unforgettable."
            </p>
            <div className="w-16 h-0.5 bg-black/30 mx-auto my-6" />
            <p className="text-black/50 text-sm">
              — The Bandan Promise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Growth Trajectory */}
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
              className="text-3xl md:text-5xl font-heading text-black mb-4"
            >
              Our Growth Trajectory
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              A vision that spans across India and beyond
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {growthMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{milestone.icon}</div>
                <div className="text-amber-600 text-sm font-heading tracking-wider mb-2">{milestone.phase}</div>
                <h3 className="text-xl font-heading text-black mb-3">{milestone.title}</h3>
                <p className="text-black/60 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationships Over Transactions */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                Beyond Business
              </div>
              <h2 className="text-3xl md:text-5xl font-heading text-black mb-4 leading-tight">
                Relationships {'>'} <br />
                <span className="border-b-2 border-black">Transactions</span>
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                We don't just take orders — we build lasting relationships. Every client, whether a first-time
                retail customer or a decade-long corporate partner, is treated with the same warmth and attention.
              </p>
              <p className="text-black/70 leading-relaxed mb-6">
                Our vision is to be more than a vendor. We want to be your trusted partner in celebration —
                understanding your preferences, anticipating your needs, and delivering sweetness that speaks
                directly to the heart.
              </p>
              <div className="flex items-center gap-4 p-4 bg-black/5 rounded-xl">
                <span className="text-3xl">💝</span>
                <p className="text-black/60 text-sm italic">
                  "We remember your last order, your preferred sweetness level, and the occasions that matter to you."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="space-y-6">
                {relationshipPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 border border-black/10 rounded-xl hover:border-black/30 transition-all"
                  >
                    <div className="text-3xl">{pillar.icon}</div>
                    <div>
                      <h3 className="font-heading text-black">{pillar.title}</h3>
                      <p className="text-black/50 text-xs">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality as Growth Catalyst */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl mb-4">💎</div>
              <h2 className="text-3xl md:text-5xl font-heading text-black mb-4 leading-tight">
                Quality: The <br />
                <span className="text-amber-600">Non-Negotiable</span> Foundation
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                In a world of shortcuts, we take the long road. Our unwavering commitment to quality isn't just
                about ingredients — it's about integrity. It's the reason our customers return, our corporate
                partners stay, and our reputation grows.
              </p>
              <p className="text-black/70 leading-relaxed mb-6">
                We believe that compromising on quality for short-term gains is the fastest path to irrelevance.
                Our growth is built on trust — and trust is earned through consistency, transparency, and an
                uncompromising dedication to excellence.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-lg text-center">
                  <div className="text-2xl font-heading text-black">0%</div>
                  <div className="text-black/40 text-xs">Compromise on Ingredients</div>
                </div>
                <div className="p-3 bg-white rounded-lg text-center">
                  <div className="text-2xl font-heading text-black">100%</div>
                  <div className="text-black/40 text-xs">Customer Delight Focus</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-black/10"
            >
              <h3 className="text-xl font-heading text-black mb-4 text-center">The Quality Growth Cycle</h3>
              <div className="space-y-4">
                {qualityCycle.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-sm">{item.step}</p>
                      <p className="text-black/40 text-xs">{item.result}</p>
                    </div>
                    {index < qualityCycle.length - 1 && (
                      <div className="text-black/20 text-xl">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serving Both Worlds */}
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
              className="text-3xl md:text-5xl font-heading text-black mb-4"
            >
              Serving Every Sweet Tooth
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              From intimate celebrations to enterprise-scale gifting — we're built for both
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-black/10 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-heading text-black mb-3">Retail Customers</h3>
              <p className="text-black/70 text-sm leading-relaxed mb-4">
                Every retail customer is the heart of our business. Whether it's a single box for a birthday
                or a dozen for a family gathering, we pour the same love and attention into every order.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> No minimum order</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Personalised recommendations</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Gift-ready packaging</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Pan-India delivery</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-black/10 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-heading text-black mb-3">Corporate Clients</h3>
              <p className="text-black/70 text-sm leading-relaxed mb-4">
                From 50 to 50,000 units — our enterprise infrastructure ensures consistency, customization,
                and timely delivery at scale, without ever compromising on quality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Dedicated account manager</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Branded packaging solutions</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Bulk pricing & flexible terms</li>
                <li className="flex items-center gap-2 text-sm text-black/60"><span>✓</span> Nationwide logistics network</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expansion Roadmap */}
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
              className="text-3xl md:text-5xl font-heading text-black mb-4"
            >
              The Road Ahead
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2" />
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-amber-600 text-sm font-heading tracking-wider">{item.year}</div>
                    <h3 className="text-xl font-heading text-black mt-1">{item.title}</h3>
                    <p className="text-black/60 text-sm mt-2">{item.description}</p>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Dream */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-black/10 rounded-3xl p-12 bg-gradient-to-br from-white to-black/5"
          >
            <div className="text-8xl mb-6">🌟</div>
            <h2 className="text-3xl md:text-5xl font-heading text-black mb-4">
              The Ultimate Dream
            </h2>
            <div className="w-16 h-0.5 bg-black/30 mx-auto mb-6" />
            <p className="text-black/70 text-lg leading-relaxed mb-6">
              To be the name that comes to mind when India thinks of premium sweets —
              a brand synonymous with trust, quality, and the joy of giving.
            </p>
            <p className="text-black/50 text-sm italic">
              "We dream of a India where every celebration, every milestone, and every relationship
              is celebrated with Bandan — because every moment deserves sweetness."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                Begin Your Journey →
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Metrics */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {visionMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-heading text-black mb-2">
                  {metric.value}
                </div>
                <div className="text-black/50 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Data Arrays
const growthMilestones = [
  { phase: "PHASE 1", title: "Digital First", icon: "📱", description: "Establish pan-India online presence with direct-to-consumer model" },
  { phase: "PHASE 2", title: "Experience Centers", icon: "🏪", description: "Open flagship stores in 10 major metropolitan cities" },
  { phase: "PHASE 3", title: "Global Reach", icon: "🌏", description: "Expand to international markets starting with GCC countries" },
];

const relationshipPillars = [
  { icon: "💬", title: "Active Listening", description: "Understanding your needs before suggesting solutions" },
  { icon: "🎯", title: "Personalized Approach", description: "Tailored recommendations based on your history" },
  { icon: "🤝", title: "Long-term Partnership", description: "Loyalty benefits and priority support for repeat clients" },
  { icon: "⭐", title: "Post-Delivery Care", description: "Follow-ups and feedback collection for continuous improvement" },
];

const qualityCycle = [
  { step: "Uncompromising Quality", result: "Customer Trust" },
  { step: "Customer Trust", result: "Repeat Business" },
  { step: "Repeat Business", result: "Word-of-Mouth Growth" },
  { step: "Word-of-Mouth Growth", result: "Brand Leadership" },
];

const roadmapItems = [
  { year: "2024-2025", title: "Digital Expansion", description: "Enhanced website, mobile app, and 24/7 customer support", icon: "📱" },
  { year: "2025-2026", title: "Metro Presence", description: "Experience centers in Mumbai, Delhi, Bangalore, Chennai, Kolkata", icon: "🏪" },
  { year: "2026-2027", title: "Tier-2 Cities", description: "Expansion into 20+ emerging cities across India", icon: "🏙️" },
  { year: "2027-2028", title: "International Launch", description: "First international store in Dubai, followed by London & New York", icon: "🌏" },
];

const visionMetrics = [
  { value: "50+", label: "Cities by 2028" },
  { value: "1M+", label: "Happy Customers" },
  { value: "500+", label: "Corporate Clients" },
  { value: "100%", label: "Quality Guarantee" },
];