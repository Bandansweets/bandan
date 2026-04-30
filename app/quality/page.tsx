"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function QualityPage() {
  const [activeCert, setActiveCert] = useState("fssai");

  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-white overflow-hidden">
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
            Our Promise
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Quality & Hygiene
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Zero compromise. 100% purity. Unmatched hygiene.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Quality Statement */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-black/10 rounded-2xl p-8 bg-black/5"
          >
            <div className="text-6xl mb-4">✨</div>
            <p className="text-xl md:text-2xl font-heading text-black leading-relaxed">
              "We never compromise on quality. <br />
              Not for profit. Not for convenience. Never."
            </p>
            <div className="w-16 h-0.5 bg-black/30 mx-auto my-4" />
            <p className="text-black/60 text-sm">
              Every sweet that leaves our kitchen carries our reputation. <br />
              That's why we inspect, test, and verify at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Raw Material Philosophy */}
      <section className="px-6 py-16 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                No Adulteration
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Pure Ingredients. <br />No Shortcuts.
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                We source only from verified, trusted suppliers. Every batch of milk, ghee, 
                khoya, and dry fruits undergoes rigorous testing before entering our kitchen.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">100% pure cow milk from local farms</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">No vanaspati or dalda — only pure desi ghee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Premium dry fruits — no cheap substitutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Real saffron, cardamom, and natural flavors — no artificial essences</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">No preservatives, no artificial colors</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-black/10"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🚫</div>
                <h3 className="font-heading text-black">What We NEVER Use</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Refined Oil</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Vanaspati/Dalda</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Artificial Colors</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Preservatives</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Cheap Fillers</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Starch/Flour</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Chemical Sweeteners</div>
                <div className="flex items-center gap-2"><span className="text-red-500">✗</span> Expired Stock</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="px-6 py-16 bg-white">
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
              Hygiene Standards
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Cleanliness isn't just a requirement — it's our culture
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {hygieneStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-5 border border-black/10 rounded-xl hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{standard.icon}</div>
                <h3 className="font-heading text-black text-sm mb-2">{standard.title}</h3>
                <p className="text-black/50 text-xs">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Flow */}
      <section className="px-6 py-16 bg-black/5">
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
              Our Production Process
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2" />
            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              {productionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl mx-auto mb-2 shadow-md">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-black">{step.title}</div>
                  <div className="text-black/40 text-[10px] mt-1">{step.check}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4 text-center text-xs text-black/50">
            {processDetails.map((detail, i) => (
              <div key={i} className="p-3 bg-white rounded-lg border border-black/10">
                🔍 {detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Checks */}
      <section className="px-6 py-16 bg-white">
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
              Multi-Stage Quality Checks
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {qualityChecks.map((check, index) => (
              <motion.div
                key={check.stage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-black/10 rounded-xl p-5 bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-black">{check.stage}</h3>
                </div>
                <ul className="space-y-2">
                  {check.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-black/70">
                      <span className="text-green-600 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Incentive Program */}
      <section className="px-6 py-16 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                Our Team, Our Strength
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Rewarding Quality & Hygiene
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                We believe quality starts with people. That's why we've built a culture where 
                hygiene and excellence are celebrated and rewarded.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h3 className="font-heading text-black text-sm">Monthly Hygiene Champion Award</h3>
                    <p className="text-black/50 text-xs">₹5,000 bonus + Certificate for the cleanest workstation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <h3 className="font-heading text-black text-sm">Zero Defect Bonus</h3>
                    <p className="text-black/50 text-xs">Quarterly bonus for teams with zero quality complaints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h3 className="font-heading text-black text-sm">Regular Training Incentives</h3>
                    <p className="text-black/50 text-xs">Paid certifications for food safety and hygiene</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💎</span>
                  <div>
                    <h3 className="font-heading text-black text-sm">Employee of the Year</h3>
                    <p className="text-black/50 text-xs">₹25,000 + Trophy + Recognition across all platforms</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 bg-white rounded-2xl p-6 border border-black/10 text-center"
            >
              <div className="text-6xl mb-4">👨‍🍳</div>
              <h3 className="font-heading text-black mb-3">Our Quality Pledge</h3>
              <p className="text-black/60 text-sm leading-relaxed">
                "Every employee is empowered to stop production if they spot a quality issue. 
                No question asked. No penalty. Because quality is everyone's responsibility."
              </p>
              <div className="mt-4 pt-4 border-t border-black/10">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-black/5 rounded">
                    <span className="font-bold text-black">100%</span>
                    <span className="text-black/50"> Staff trained in hygiene</span>
                  </div>
                  <div className="p-2 bg-black/5 rounded">
                    <span className="font-bold text-black">Monthly</span>
                    <span className="text-black/50"> Health checkups</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 py-16 bg-white">
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
              Certifications & Compliance
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 border border-black/10 rounded-xl bg-white min-w-[120px]"
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="font-heading text-black text-sm">{cert.name}</div>
                <div className="text-black/40 text-[10px]">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Confidence */}
      <section className="px-6 py-16 bg-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-black/10"
          >
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-heading text-black mb-3">Our Quality Guarantee</h3>
            <p className="text-black/70 text-sm leading-relaxed mb-4">
              If you're not completely satisfied with the quality of our sweets, we'll replace your order 
              or provide a full refund. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-black/90 transition-all"
              >
                Report Quality Concern
              </Link>
              <Link
                href="/products"
                className="inline-block border border-black/30 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all"
              >
                Shop with Confidence →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-heading text-black mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-16 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-3">
            {qualityFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-black/10 rounded-xl p-4"
              >
                <h3 className="font-heading text-black text-sm mb-1">{faq.q}</h3>
                <p className="text-black/60 text-xs">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Data Arrays
const hygieneStandards = [
  { icon: "🧤", title: "Gloves & Hairnets", description: "Mandatory for all food handlers" },
  { icon: "🧼", title: "30+ Handwash Stations", description: "Sanitizers at every workstation" },
  { icon: "🌡️", title: "Temperature Control", description: "Real-time monitoring of all units" },
  { icon: "🧹", title: "Daily Deep Cleaning", description: "Sanitized floors & equipment every night" },
];

const productionSteps = [
  { icon: "🥛", title: "Raw Material", check: "Lab tested" },
  { icon: "👨‍🍳", title: "Preparation", check: "In-process check" },
  { icon: "🔥", title: "Cooking", check: "Temp monitoring" },
  { icon: "🎨", title: "Shaping", check: "Visual inspection" },
  { icon: "📦", title: "Packing", check: "Final QC" },
];

const processDetails = [
  "Every batch has a unique batch number for traceability",
  "Random samples collected hourly for quality testing",
  "Rejected batches are destroyed — never reworked"
];

const qualityChecks = [
  {
    stage: "Raw Material Entry",
    items: [
      "Visual inspection of all incoming ingredients",
      "Expiry date verification",
      "Random sampling for adulteration tests",
      "Supplier certificate validation"
    ]
  },
  {
    stage: "During Production",
    items: [
      "Temperature logs every 30 minutes",
      "Taste testing by master sweet maker",
      "Texture & consistency checks",
      "Color & aroma verification"
    ]
  },
  {
    stage: "Before Dispatch",
    items: [
      "Final visual inspection of each piece",
      "Packaging integrity check",
      "Seal verification",
      "Random weight check"
    ]
  }
];

const certifications = [
  { icon: "✅", name: "FSSAI", year: "Licensed" },
  { icon: "🌱", name: "ISO 22000", year: "Food Safety" },
  { icon: "✨", name: "HACCP", year: "Certified" },
  { icon: "🛡️", name: "GMP", year: "Compliant" }
];

const qualityFaqs = [
  { q: "How do you ensure no adulteration?", a: "We test every batch of milk, ghee, and khoya at our in-house lab. Random samples are also sent to external NABL-accredited labs quarterly." },
  { q: "What happens if a batch fails quality check?", a: "The entire batch is rejected and destroyed immediately. We never rework or reuse rejected products." },
  { q: "How often are employees trained?", a: "Monthly refresher training on hygiene and quarterly certification programs. New employees undergo 2 weeks of training before handling food." },
  { q: "Do you use artificial colors or preservatives?", a: "Never. All colors come from natural sources like saffron, beetroot, or cardamom. Our sweets have a shorter shelf life because we use zero preservatives." },
  { q: "What's your shelf life guarantee?", a: "Fresh sweets: 5-7 days when refrigerated. Packaged sweets: 15-20 days. Always check the 'best before' date on each package." }
];