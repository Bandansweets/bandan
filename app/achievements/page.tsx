"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function AchievementsPage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center z-10 px-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-sm mb-6"
          >
            Our Journey
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Milestones
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Celebrating the moments that define our commitment to excellence
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Milestones */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-black/10" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:border-black/30">
                      <div className="text-black/30 font-heading text-6xl mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-heading text-black mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed">
                        {milestone.description}
                      </p>
                      {milestone.metric && (
                        <div className="mt-4 pt-4 border-t border-black/10">
                          <span className="text-black font-semibold">{milestone.metric}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="px-6 py-20 bg-black/5">
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
              By The Numbers
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-heading text-black mb-3">
                  {metric.value}
                </div>
                <div className="text-black/60 text-sm uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="w-12 h-px bg-black/20 mx-auto mt-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section - No Certifications */}
      <section className="px-6 py-20 bg-white">
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
              Trusted By
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto mb-6"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 max-w-2xl mx-auto"
            >
              Partnering with discerning clients who value excellence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedBy.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-black/10 rounded-2xl hover:border-black/30 transition-all"
              >
                <div className="text-5xl mb-3">{client.icon}</div>
                <div className="text-black font-heading text-lg">{client.name}</div>
                <div className="text-black/40 text-xs mt-1">{client.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Highlights */}
      <section className="px-6 py-20 bg-black/5">
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
              Defining Moments
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:border-black/30 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="text-6xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3">
                  {highlight.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {highlight.description}
                </p>
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
          className="max-w-3xl mx-auto bg-white border border-black/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
            Be Part of Our Journey
          </h2>
          <p className="text-black/60 mb-8">
            Join our growing family of delighted customers and experience the Bandan difference.
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
          >
            Explore Our Collection
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

// Milestones Timeline Data
const milestones = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Bandan Sweets was founded with a vision to redefine premium sweet gifting, combining traditional recipes with contemporary elegance.",
    metric: "50+ varieties launched",
  },
  {
    year: "2024",
    title: "Pan-India Launch",
    description: "Expanded delivery network across India, ensuring fresh, handcrafted sweets reach customers nationwide.",
    metric: "24+ cities covered",
  },
  {
    year: "2025",
    title: "Corporate Division",
    description: "Launched dedicated corporate gifting division, serving over 100+ businesses with bespoke hampers.",
    metric: "100+ corporate clients",
  },
  {
    year: "2025",
    title: "Signature Collection",
    description: "Introduced the Gold Leaf Peda and Royal Selections, setting new standards in luxury sweets.",
    metric: "3 signature products",
  },
  {
    year: "2026",
    title: "10,000 Happy Customers",
    description: "Reached the milestone of serving 10,000 delighted customers across India.",
    metric: "10,000+ customers",
  },
];

// Key Metrics Data
const metrics = [
  { value: "50+", label: "Premium Varieties" },
  { value: "10k+", label: "Happy Customers" },
  { value: "24/7", label: "Customer Support" },
  { value: "100%", label: "Quality Guarantee" },
];

// Trusted By Data
const trustedBy = [
  { name: "Fortune 500", icon: "🏢", type: "Corporate Clients" },
  { name: "Leading Hotels", icon: "🏨", type: "Hospitality Partners" },
  { name: "Event Planners", icon: "🎪", type: "Industry Partners" },
  { name: "Celebrities", icon: "⭐", type: "Notable Clients" },
];

// Milestone Highlights
const highlights = [
  {
    icon: "🎯",
    title: "Zero Compromise",
    description: "Maintained 100% quality standards across all products since day one.",
  },
  {
    icon: "🚚",
    title: "Fresh Delivery",
    description: "Achieved 99% on-time delivery rate with temperature-controlled logistics.",
  },
  {
    icon: "💎",
    title: "Premium Standards",
    description: "Sourced finest ingredients from trusted suppliers globally.",
  },
];