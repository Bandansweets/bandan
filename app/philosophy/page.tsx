"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function PhilosophyPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
        
        {/* Animated decorative elements */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 border border-black/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-black/5 rounded-full"
        />

        <motion.div style={{ opacity }} className="text-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6"
          >
            The Bandan Way
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading text-black mb-6"
          >
            Our Philosophy
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
            Where tradition meets intention, and every sweet carries meaning
          </motion.p>
        </motion.div>
      </section>

      {/* Core Philosophy Statement */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="text-8xl text-black/10 font-heading mb-4"
            >
              "
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-heading text-black leading-tight"
            >
              We don't just make sweets. We craft moments, memories, and meaningful connections.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="w-16 h-0.5 bg-black/30 mx-auto my-6"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 text-lg"
            >
              Every sweet is a bridge — between tradition and innovation, between giver and receiver, between a simple gesture and an unforgettable memory.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
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
              Three Pillars of Bandan
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-heading text-black mb-3">{pillar.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                Zero Compromise
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Quality is <span className="border-b-2 border-black">Non-Negotiable</span>
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                We source ingredients directly from trusted farms and dairies. No preservatives. 
                No artificial flavors. Just pure, authentic sweetness made the way it should be.
              </p>
              <p className="text-black/70 leading-relaxed">
                Every batch is tasted by our master artisans before it reaches you. Because 
                quality isn't just a standard — it's our promise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/5 rounded-2xl p-8 border border-black/10"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-black">Fresh Milk</span>
                  <span className="text-black/60 text-sm">Local farms, delivered daily</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-black">Pure Ghee</span>
                  <span className="text-black/60 text-sm">Traditionally churned</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-black">Dry Fruits</span>
                  <span className="text-black/60 text-sm">Premium imported varieties</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-black">Saffron & Cardamom</span>
                  <span className="text-black/60 text-sm">Pure, no adulteration</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black">Preservatives</span>
                  <span className="text-black/60 text-sm">Absolutely none</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gifting Philosophy */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <div className="text-7xl mb-4 text-center">🎁</div>
                <h3 className="text-xl font-heading text-black text-center mb-4">Gifting is an Emotion</h3>
                <p className="text-black/60 text-sm text-center leading-relaxed">
                  "A sweet gift says what words cannot. It carries warmth, thoughtfulness, 
                  and the silent message that someone matters. That's why we treat every 
                  order — whether one box or a thousand — as an opportunity to spread joy."
                </p>
                <div className="text-center mt-4 text-black/40 text-xs">— Bandan Sweets</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                Beyond the Sweet
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                The Thought <br />Behind the Gift
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed">
                We believe the best gifts are those that reflect genuine thought. 
                That's why we offer personalisation options, elegant packaging, and 
                attention to every detail. Because when you give Bandan, you're giving 
                more than sweets — you're giving an experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe - Short Statements */}
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
              What We Believe
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-black/10 rounded-2xl bg-white hover:border-black/30 transition-all"
              >
                <div className="text-3xl mb-3">{belief.icon}</div>
                <p className="text-black/80 text-sm italic">"{belief.statement}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4"
            >
              For Tomorrow
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              Sweetness That Doesn't Cost the Earth
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto mb-6"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/70 leading-relaxed max-w-2xl mx-auto"
            >
              We use eco-friendly packaging, minimize food waste through precise production, 
              and partner with local suppliers to reduce our carbon footprint. Because 
              creating joy shouldn't come at the environment's expense.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Closing Philosophy */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-black/10 rounded-3xl p-12 bg-white shadow-sm"
          >
            <div className="text-6xl mb-6">✨</div>
            <p className="text-xl md:text-2xl font-heading text-black leading-relaxed">
              Every sweet tells a story. <br />
              Make yours unforgettable.
            </p>
            <div className="w-16 h-0.5 bg-black/30 mx-auto my-6" />
            <p className="text-black/60">
              Whether celebrating a milestone, expressing gratitude, or simply making someone's day — 
              choose Bandan. Choose sweetness with purpose.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-black/90 transition-all"
              >
                Explore Our Collection
              </Link>
              <Link
                href="/personalised-gifting"
                className="inline-block border border-black/30 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all"
              >
                Create a Personalised Gift
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Data Arrays
const pillars = [
  {
    icon: "👨‍🍳",
    title: "Tradition with Intention",
    description: "We honor generations-old recipes while thoughtfully adapting them for modern palates. Every sweet has a heritage and a purpose.",
  },
  {
    icon: "💝",
    title: "Gifting with Meaning",
    description: "We believe the best gifts reflect genuine thought. That's why we obsess over presentation, personalisation, and the joy of giving.",
  },
  {
    icon: "🌱",
    title: "Quality with Integrity",
    description: "No shortcuts. No compromises. Just pure ingredients, traditional methods, and an unwavering commitment to excellence.",
  },
];

const beliefs = [
  { icon: "💎", statement: "Quality is never an accident. It is always the result of intelligent effort." },
  { icon: "🎁", statement: "The value of a gift lies not in its price, but in the thought behind it." },
  { icon: "🌿", statement: "Good business means leaving the world better than we found it." },
];