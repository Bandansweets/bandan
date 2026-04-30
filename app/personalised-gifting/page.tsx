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

export default function PersonalisedGiftingPage() {
  const [activeTab, setActiveTab] = useState("sweets");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
            Make It Uniquely Yours
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Personalised Gifting
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Create unforgettable moments with customised sweets, personalised messages, and bespoke packaging
          </motion.p>
        </motion.div>
      </section>

      {/* What is Personalised Gifting */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black/60 text-xs mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Gifts That Tell a Story
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                Personalised gifting goes beyond just sweets. It's about creating an experience 
                that resonates with the recipient. From custom messages on each box to selecting 
                specific sweets based on dietary preferences, we handle every detail.
              </p>
              <p className="text-black/70 leading-relaxed">
                Whether it's a birthday, anniversary, wedding favor, or corporate appreciation, 
                we transform your vision into a sweet reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/5 rounded-2xl p-8 border border-black/10"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-heading text-black">100%</div>
                  <div className="text-black/40 text-xs">Customizable</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">⏱️</div>
                  <div className="font-heading text-black">5-7 Days</div>
                  <div className="text-black/40 text-xs">Lead Time</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">💝</div>
                  <div className="font-heading text-black">Free</div>
                  <div className="text-black/40 text-xs">Personal Note</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-heading text-black">Pan-India</div>
                  <div className="text-black/40 text-xs">Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personalisation Options - Tabbed */}
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
              How You Can Personalise
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {personalisationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "border border-black/30 text-black hover:bg-black/5"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-black/10 p-8">
            {activeTab === "sweets" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {sweetCustomisation.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-black/10 rounded-xl hover:border-black/30 transition-all">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-heading text-black mb-2">{item.title}</h3>
                    <p className="text-black/50 text-xs">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "packaging" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {packagingCustomisation.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-black/10 rounded-xl hover:border-black/30 transition-all">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-heading text-black mb-2">{item.title}</h3>
                    <p className="text-black/50 text-xs">{item.description}</p>
                    <div className="text-xs text-black/40 mt-2">{item.price}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "messages" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {messageCustomisation.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-black/10 rounded-xl hover:border-black/30 transition-all">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-heading text-black mb-2">{item.title}</h3>
                    <p className="text-black/50 text-xs">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "addons" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {addonCustomisation.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-black/10 rounded-xl hover:border-black/30 transition-all">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-heading text-black mb-2">{item.title}</h3>
                    <p className="text-black/50 text-xs">{item.description}</p>
                    <div className="text-xs text-black/40 mt-2">{item.price}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How We Process Personalised Orders - Flowchart */}
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
              Our Personalisation Process
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              A meticulous 7-step journey from your idea to their doorstep
            </motion.p>
          </motion.div>

          {/* Desktop Flowchart */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2" />
            <div className="grid grid-cols-7 gap-2 relative z-10">
              {personalisationProcess.map((step, index) => (
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
                  <div className="text-black/40 text-[10px] mt-1">{step.time}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flowchart */}
          <div className="md:hidden space-y-4">
            {personalisationProcess.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border border-black/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="font-heading text-black text-sm">{step.title}</div>
                  <div className="text-black/40 text-xs">{step.time}</div>
                </div>
                {index < personalisationProcess.length - 1 && (
                  <div className="ml-auto text-black/30">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {processDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-black text-lg mb-2">{detail.title}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">{detail.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalisation Features Showcase */}
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
              What Makes Our Personalisation Special
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-black/10 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading text-black mb-2">{feature.title}</h3>
                <p className="text-black/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sweet Selection Guide */}
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
              Choose Your Sweets
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Mix and match from our premium collection
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {sweetOptions.map((sweet, index) => (
              <motion.div
                key={sweet.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-black/10 rounded-xl p-4 text-center hover:border-black/30 transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{sweet.icon}</div>
                <div className="font-heading text-black text-sm">{sweet.name}</div>
                <div className="text-black/40 text-xs">{sweet.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
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
              Personalisation Pricing
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black/20">
                  <th className="text-left py-3 px-4 font-heading text-black">Customisation Type</th>
                  <th className="text-left py-3 px-4 font-heading text-black">Base Price</th>
                  <th className="text-left py-3 px-4 font-heading text-black">Premium Option</th>
                  <th className="text-left py-3 px-4 font-heading text-black">Lead Time</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((item, index) => (
                  <motion.tr
                    key={item.type}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-black/10"
                  >
                    <td className="py-3 px-4 text-black">{item.type}</td>
                    <td className="py-3 px-4 text-black/70">{item.basePrice}</td>
                    <td className="py-3 px-4 text-black/70">{item.premiumPrice}</td>
                    <td className="py-3 px-4 text-black/70">{item.leadTime}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-black/5 rounded-xl text-center">
            <p className="text-black/60 text-sm">
              <span className="font-semibold text-black">Note:</span> Minimum order for personalised packaging is 20 units. 
              For bulk personalised orders (100+ units), contact our corporate desk for special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery / Examples */}
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
              Personalisation Examples
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Real examples of how customers have personalised their gifts
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center text-6xl">
                  {example.icon}
                </div>
                <div className="p-5">
                  <div className="text-xs text-black/40 mb-1">{example.occasion}</div>
                  <h3 className="font-heading text-black mb-2">{example.title}</h3>
                  <p className="text-black/60 text-xs mb-3">{example.description}</p>
                  <div className="text-xs text-black/40">
                    <span className="font-semibold">Personalisation:</span> {example.personalisation}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
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
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-4">
            {personalisationFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-black/10 rounded-xl p-5"
              >
                <h3 className="font-heading text-black mb-2">{faq.question}</h3>
                <p className="text-black/60 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-6 py-20 bg-black/5">
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
              className="text-3xl md:text-4xl font-heading text-black mb-4"
            >
              Start Your Personalised Order
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Tell us your vision and we'll bring it to life
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
          >
            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Thank you! Our personalisation expert will contact you within 24 hours with a custom quote.
              </div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); setTimeout(() => setFormSubmitted(false), 5000); }} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" required placeholder="Full Name *" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                <input type="email" required placeholder="Email Address *" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="tel" required placeholder="Phone Number *" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                <input type="text" required placeholder="Delivery Location (City)" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black">
                  <option value="">Occasion *</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>
                <input type="number" required placeholder="Quantity (Number of boxes) *" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Budget per box (optional)" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                <input type="text" placeholder="Delivery Date (DD/MM/YYYY)" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
              </div>

              <textarea
                rows={4}
                required
                placeholder="Describe your personalisation requirements (sweet preferences, packaging ideas, message, etc.) *"
                className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black resize-none"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                Request Personalisation Quote →
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Make Every Bite Memorable
          </h2>
          <p className="text-white/70 mb-8">
            Let us help you create a gift that speaks from the heart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919818150911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all"
            >
              💬 WhatsApp Personalisation Expert
            </a>
            <Link
              href="/products"
              className="inline-block border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              🍬 Browse Sweets
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const personalisationTabs = [
  { id: "sweets", label: "Sweet Selection", icon: "🍬" },
  { id: "packaging", label: "Packaging", icon: "🎁" },
  { id: "messages", label: "Messages & Notes", icon: "💌" },
  { id: "addons", label: "Add-ons", icon: "✨" },
];

const sweetCustomisation = [
  { icon: "🎯", title: "Mix & Match", description: "Choose any combination of sweets" },
  { icon: "🌿", title: "Dietary Preferences", description: "Nut-free, gluten-free, vegan options" },
  { icon: "⭐", title: "Premium Upgrade", description: "Add Gold Leaf or Luxury variants" },
];

const packagingCustomisation = [
  { icon: "📦", title: "Standard Box", description: "Elegant gift-ready box", price: "Included" },
  { icon: "✨", title: "Premium Box", description: "Gold foil + satin ribbon", price: "+₹50/box" },
  { icon: "💎", title: "Luxury Wooden Box", description: "Engravable wooden chest", price: "+₹300/box" },
];

const messageCustomisation = [
  { icon: "💝", title: "Handwritten Notes", description: "Personal message on premium paper", price: "Free" },
  { icon: "🖨️", title: "Printed Cards", description: "Custom design with logo/photo", price: "+₹20/card" },
  { icon: "🎥", title: "Video Message", description: "QR code linking to video", price: "+₹50/box" },
];

const addonCustomisation = [
  { icon: "🏷️", title: "Custom Stickers", description: "Name/logo stickers on each box", price: "+₹10/box" },
  { icon: "🎀", title: "Ribbon Selection", description: "Choose from 10+ ribbon colors", price: "+₹15/box" },
  { icon: "📸", title: "Polaroid Insert", description: "Add a photo with the gift", price: "+₹25/box" },
];

const personalisationProcess = [
  { icon: "📝", title: "Share Brief", time: "Day 1" },
  { icon: "💬", title: "Consultation", time: "Day 1-2" },
  { icon: "🎨", title: "Design Mockup", time: "Day 2-3" },
  { icon: "✅", title: "Approval", time: "Day 3" },
  { icon: "👨‍🍳", title: "Production", time: "Day 4-6" },
  { icon: "📦", title: "Quality Check", time: "Day 6" },
  { icon: "🚚", title: "Delivery", time: "Day 7" },
];

const processDetails = [
  { title: "Initial Consultation", description: "Discuss your requirements, occasion, budget, and preferences with our personalisation expert." },
  { title: "Design Mockup", description: "We create a digital mockup of the packaging and layout for your approval before production." },
  { title: "Sample Creation", description: "For bulk orders, we produce a physical sample for your approval before full production." },
  { title: "Sweet Selection", description: "Choose from our menu or let us recommend based on occasion and recipient preferences." },
  { title: "Production", description: "Handcrafted with care, each sweet is prepared fresh and packed according to specifications." },
  { title: "Quality Assurance", description: "Multi-stage quality check including packaging integrity, freshness seals, and message accuracy." },
  { title: "Final Delivery", description: "Temperature-controlled shipping with real-time tracking and delivery confirmation." },
  { title: "Follow-up", description: "Post-delivery follow-up to ensure satisfaction and gather feedback." },
];

const features = [
  { icon: "🎨", title: "Unlimited Revisions", description: "We work with you until the design is perfect" },
  { icon: "📸", title: "Photo Proof", description: "Receive photos before dispatch for approval" },
  { icon: "⏰", title: "Urgent Orders", description: "Express personalisation available (3-4 days)" },
];

const sweetOptions = [
  { name: "Kaju Katli", category: "Classic", icon: "🍬" },
  { name: "Gulab Jamun", category: "Classic", icon: "🍡" },
  { name: "Rasgulla", category: "Classic", icon: "⚪" },
  { name: "Peda", category: "Classic", icon: "🍪" },
  { name: "Gold Leaf Peda", category: "Premium", icon: "✨" },
  { name: "Royal Selections", category: "Premium", icon: "👑" },
  { name: "Chocolate Barfi", category: "Fusion", icon: "🍫" },
  { name: "Dry Fruit Ladoo", category: "Healthy", icon: "🥜" },
];

const pricingTable = [
  { type: "Custom Message Card", basePrice: "Free", premiumPrice: "₹20 (Printed)", leadTime: "2 days" },
  { type: "Logo/Brand Sticker", basePrice: "₹10/box", premiumPrice: "₹25 (Holographic)", leadTime: "3 days" },
  { type: "Custom Packaging", basePrice: "₹50/box", premiumPrice: "₹300 (Wooden Box)", leadTime: "5 days" },
  { type: "Sweet Mix Selection", basePrice: "Standard", premiumPrice: "Premium (+30%)", leadTime: "2 days" },
];

const examples = [
  { icon: "💍", occasion: "Wedding", title: "Ankit & Priya's Wedding Favors", description: "Miniature boxes with custom name tags for 200 guests", personalisation: "Names printed + Thank you note" },
  { icon: "🎂", occasion: "Birthday", title: "Rohan's 30th Celebration", description: "Gold foil box with photo collage", personalisation: "Photo collage on box + video QR" },
  { icon: "🏢", occasion: "Corporate", title: "TechCorp Diwali Gifting", description: "Branded wooden boxes with logo", personalisation: "Logo engraving + custom message" },
];

const personalisationFaqs = [
  { question: "What's the minimum order for personalisation?", answer: "Standard personalisation (messages/stickers): 10 units. Custom packaging: 20 units. Bulk orders: 50+ units." },
  { question: "How far in advance should I order?", answer: "Standard lead time is 5-7 days. For urgent orders (3-4 days), express charges apply. During peak season (Diwali), order 10-12 days in advance." },
  { question: "Can I see a sample before full production?", answer: "Yes, for orders above 50 units, we provide a physical sample for approval (sample charges may apply, refundable on order)." },
  { question: "Do you offer vegetarian/vegan options?", answer: "Yes! We have a dedicated selection of vegetarian, vegan, and nut-free sweets. Please specify requirements." },
  { question: "What if I don't like the design?", answer: "We offer unlimited revisions until you're completely satisfied with the design mockup." },
];