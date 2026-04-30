"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function GiftingPage() {
  const [giftType, setGiftType] = useState("personal");

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
            The Art of Giving
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Gifting Guide
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Make every occasion special with thoughtful sweet gifting
          </motion.p>
        </motion.div>
      </section>

      {/* Gift Type Toggle */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setGiftType("personal")}
              className={`px-6 py-2 rounded-full transition-all ${
                giftType === "personal"
                  ? "bg-black text-white"
                  : "border border-black/30 text-black hover:bg-black/5"
              }`}
            >
              Personal Gifting
            </button>
            <button
              onClick={() => setGiftType("bulk")}
              className={`px-6 py-2 rounded-full transition-all ${
                giftType === "bulk"
                  ? "bg-black text-white"
                  : "border border-black/30 text-black hover:bg-black/5"
              }`}
            >
              Bulk Gifting
            </button>
          </div>

          {giftType === "personal" ? (
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading text-black mb-4">Personal Gifting</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-6">
                  Perfect for birthdays, anniversaries, festivals, or just because. 
                  Small orders (1-50 units) are processed with special attention to 
                  presentation and personal touches.
                </p>
                <div className="space-y-4">
                  {personalGiftingDetails.map((detail, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="text-2xl">{detail.icon}</span>
                      <div>
                        <h3 className="font-heading text-black">{detail.title}</h3>
                        <p className="text-black/60 text-sm">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-heading text-black mb-4">Perfect For:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {personalOccasions.map((occasion, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-black/60">
                      <span>🎯</span> {occasion}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading text-black mb-4">Bulk Gifting</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-6">
                  Ideal for corporate events, wedding favors, festival giveaways, 
                  and large celebrations. Orders above 50 units receive special 
                  bulk pricing and dedicated handling.
                </p>
                <div className="space-y-4">
                  {bulkGiftingDetails.map((detail, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="text-2xl">{detail.icon}</span>
                      <div>
                        <h3 className="font-heading text-black">{detail.title}</h3>
                        <p className="text-black/60 text-sm">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-heading text-black mb-4">Perfect For:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {bulkOccasions.map((occasion, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-black/60">
                      <span>🏢</span> {occasion}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Gift Packaging Options */}
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
              Gift Packaging Options
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-6 text-center hover:border-black/30 transition-all"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-heading text-black mb-2">{option.name}</h3>
                <p className="text-black/50 text-sm mb-3">{option.description}</p>
                <div className="text-sm text-black/40">{option.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
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
              Gifting Best Practices
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-green-200 rounded-2xl p-6 bg-green-50/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✓</span>
                <h3 className="text-xl font-heading text-green-700">What To Do</h3>
              </div>
              <ul className="space-y-3">
                {dos.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-black/70">
                    <span className="text-green-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-red-200 rounded-2xl p-6 bg-red-50/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✗</span>
                <h3 className="text-xl font-heading text-red-700">What To Avoid</h3>
              </div>
              <ul className="space-y-3">
                {donts.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-black/70">
                    <span className="text-red-600">✗</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ordering Tips */}
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
              Smart Ordering Tips
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {orderingTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-heading text-black mb-2">{tip.title}</h3>
                <p className="text-black/50 text-xs">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Order Processing Differs */}
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
              Why Small & Bulk Orders Are Processed Differently
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-6">
            <div className="border border-black/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎁</span>
                <h3 className="text-xl font-heading text-black">Small Orders (1-50 units)</h3>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                Processed individually with focus on presentation and personal touches. 
                Each box is hand-packed and inspected for quality. Standard timeline: 
                24-48 hours for dispatch.
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📦</span>
                <h3 className="text-xl font-heading text-black">Bulk Orders (50+ units)</h3>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                Processed through dedicated assembly line for consistency and efficiency. 
                Requires 5-7 days lead time for customization and quality checks. 
                Special logistics coordination for temperature-controlled delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Recommendations */}
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
              Gift Recommendations by Occasion
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.occasion}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{rec.icon}</div>
                <h3 className="text-xl font-heading text-black mb-2">{rec.occasion}</h3>
                <p className="text-black/60 text-sm mb-3">{rec.recommendation}</p>
                <div className="text-xs text-black/40">Popular choice: {rec.popular}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/5 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-heading text-black mb-4">
              Need Help Choosing the Perfect Gift?
            </h2>
            <p className="text-black/60 mb-8">
              Our gifting experts are here to help you select the ideal sweet ensemble for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                💬 Chat with Gifting Expert
              </a>
              <Link
                href="/products"
                className="inline-block border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
              >
                Browse Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Data Arrays
const personalGiftingDetails = [
  { icon: "🎨", title: "Hand-Picked Selection", description: "Each item personally selected for presentation" },
  { icon: "💝", title: "Custom Message Cards", description: "Handwritten notes for personal touch" },
  { icon: "🎀", title: "Premium Gift Wrapping", description: "Elegant ribbons and decorative elements" },
  { icon: "📦", title: "Secure Packaging", description: "Tamper-proof with freshness seals" },
];

const bulkGiftingDetails = [
  { icon: "🏷️", title: "Brand Customization", description: "Logo printing and custom messaging" },
  { icon: "📊", title: "Volume Discounts", description: "Tiered pricing based on quantity" },
  { icon: "🚚", title: "Dedicated Logistics", description: "Special handling for large orders" },
  { icon: "📋", title: "Bulk Quality Control", description: "Batch testing for consistency" },
];

const personalOccasions = [
  "Birthdays", "Anniversaries", "Festivals", "Congratulations",
  "Get Well Soon", "Thank You", "Just Because", "Housewarming"
];

const bulkOccasions = [
  "Corporate Events", "Wedding Favors", "Conference Giveaways",
  "Festival Gifting", "Employee Rewards", "Client Appreciation",
  "Product Launches", "Annual Day Celebrations"
];

const packagingOptions = [
  { icon: "🎁", name: "Standard Box", description: "Elegant gift-ready box", price: "Included" },
  { icon: "✨", name: "Premium Box", description: "Gold foil embossing + ribbon", price: "+₹50/unit" },
  { icon: "💎", name: "Luxury Hamper", description: "Wooden box with velvet lining", price: "+₹200/unit" },
];

const dos = [
  "Order at least 5-7 days in advance for bulk orders",
  "Include a personal message for special occasions",
  "Check delivery address carefully before placing order",
  "Request samples for bulk orders before finalizing",
  "Consider dietary preferences of recipients",
  "Store sweets in cool, dry place upon delivery",
];

const donts = [
  "Avoid last-minute orders for personalized gifts",
  "Don't forget to mention allergies or restrictions",
  "Avoid storing sweets in direct sunlight or heat",
  "Don't ignore packaging instructions for delivery",
  "Avoid mixing different products without consultation",
  "Don't wait too long to consume - enjoy fresh!",
];

const orderingTips = [
  { icon: "📅", title: "Plan Ahead", description: "Order 5-7 days before event" },
  { icon: "📏", title: "Know Quantity", description: "Order 10% extra for buffer" },
  { icon: "🎯", title: "Set Budget", description: "Communicate budget clearly" },
  { icon: "📸", title: "Share Examples", description: "Reference images help" },
];

const recommendations = [
  { occasion: "Birthday", icon: "🎂", recommendation: "Gold Leaf Peda or Celebration Hamper", popular: "Celebration Hamper" },
  { occasion: "Anniversary", icon: "💑", recommendation: "Premium Gift Box with Personalized Note", popular: "The Royal Selections" },
  { occasion: "Diwali", icon: "🪔", recommendation: "Festival Special Assorted Box", popular: "Diwali Delight Box" },
  { occasion: "Corporate", icon: "🏢", recommendation: "Branded Hampers with Custom Packaging", popular: "Executive Gift Set" },
  { occasion: "Wedding", icon: "💒", recommendation: "Elegant Wedding Favors", popular: "Mini Peda Boxes" },
  { occasion: "New Baby", icon: "👶", recommendation: "Sweet Celebrations Box", popular: "Welcome Baby Hamper" },
];