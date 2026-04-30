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

export default function OrderingPage() {
  const [orderType, setOrderType] = useState("retail");

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
            Simple & Transparent
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Ordering Guide
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            A step-by-step guide to placing orders, sharing requirements, and negotiating the best deal
          </motion.p>
        </motion.div>
      </section>

      {/* Order Type Toggle */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setOrderType("retail")}
              className={`px-6 py-2 rounded-full transition-all ${
                orderType === "retail"
                  ? "bg-black text-white"
                  : "border border-black/30 text-black hover:bg-black/5"
              }`}
            >
              Retail Orders
            </button>
            <button
              onClick={() => setOrderType("bulk")}
              className={`px-6 py-2 rounded-full transition-all ${
                orderType === "bulk"
                  ? "bg-black text-white"
                  : "border border-black/30 text-black hover:bg-black/5"
              }`}
            >
              Bulk Orders
            </button>
          </div>

          {orderType === "retail" ? (
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading text-black mb-4">Retail Order Process</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <div className="space-y-6">
                  {retailProcess.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-black">{step.title}</h3>
                        <p className="text-black/60 text-sm">{step.description}</p>
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
                <h3 className="text-xl font-heading text-black mb-4">Quick Retail Order</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>📱 Order via WhatsApp</span>
                    <span>→</span>
                  </a>
                  <Link
                    href="/products"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>🛍️ Browse Products</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>📞 Call to Order</span>
                    <span>→</span>
                  </Link>
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
                <h2 className="text-3xl font-heading text-black mb-4">Bulk Order Process</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <div className="space-y-6">
                  {bulkProcess.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-black">{step.title}</h3>
                        <p className="text-black/60 text-sm">{step.description}</p>
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
                <h3 className="text-xl font-heading text-black mb-4">Bulk Order Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>💼 WhatsApp Corporate Desk</span>
                    <span>→</span>
                  </a>
                  <Link
                    href="/corporate-gifting"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>🎁 View Corporate Gifting</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between p-3 bg-white border border-black/10 rounded-lg hover:border-black/30 transition-all"
                  >
                    <span>📧 Email Corporate Team</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* How to Share Requirements */}
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
              How to Share Your Requirements
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Clear communication helps us serve you better
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-heading text-black mb-4">Essential Information to Share</h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex gap-3 text-sm">
                    <span className="text-black">•</span>
                    <span className="text-black/70">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-heading text-black mb-4">Requirement Template</h3>
              <div className="bg-black/5 rounded-lg p-4 font-mono text-xs text-black/70 space-y-1">
                <p>📋 ORDER REQUIREMENTS</p>
                <p>━━━━━━━━━━━━━━━━━━━━━━</p>
                <p>Order Type: [Retail / Bulk]</p>
                <p>Product: [Sweet names]</p>
                <p>Quantity: [Number of units]</p>
                <p>Occasion: [Event/celebration]</p>
                <p>Delivery Date: [DD/MM/YYYY]</p>
                <p>Delivery Location: [City, Pincode]</p>
                <p>Budget: [Per unit / Total]</p>
                <p>Customization: [Packaging/Message]</p>
                <p>━━━━━━━━━━━━━━━━━━━━━━</p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText("Order Type: \nProduct: \nQuantity: \nOccasion: \nDelivery Date: \nDelivery Location: \nBudget: \nCustomization: ")}
                className="mt-4 text-sm text-black border border-black/30 rounded-full px-4 py-1 hover:bg-black hover:text-white transition-all"
              >
                Copy Template
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Negotiation Guide */}
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
              How to Negotiate Effectively
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
                <h3 className="text-xl font-heading text-green-700">Tips for Better Negotiation</h3>
              </div>
              <ul className="space-y-3">
                {negotiationTips.map((tip, index) => (
                  <li key={index} className="flex gap-2 text-sm text-black/70">
                    <span className="text-green-600">✓</span> {tip}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-blue-200 rounded-2xl p-6 bg-blue-50/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl font-heading text-blue-700">Discount Tiers</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>50-100 units</span>
                  <span className="font-semibold">5% discount</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>101-250 units</span>
                  <span className="font-semibold">10% discount</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>251-500 units</span>
                  <span className="font-semibold">15% discount</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>500+ units</span>
                  <span className="font-semibold">Custom pricing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Confirmation Process */}
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
              Order Confirmation Process
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {confirmationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading text-black mb-2">{step.title}</h3>
                <p className="text-black/50 text-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
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
              Payment Options
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black/10 rounded-2xl p-6">
              <h3 className="text-xl font-heading text-black mb-4">Retail Orders</h3>
              <ul className="space-y-2 text-sm text-black/70">
                <li>✓ UPI (Google Pay, PhonePe, Paytm)</li>
                <li>✓ Credit/Debit Cards</li>
                <li>✓ Net Banking</li>
                <li>✓ Cash on Delivery (select cities)</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-2xl p-6">
              <h3 className="text-xl font-heading text-black mb-4">Bulk Orders</h3>
              <ul className="space-y-2 text-sm text-black/70">
                <li>✓ Bank Transfer (NEFT/RTGS)</li>
                <li>✓ Corporate Cheques</li>
                <li>✓ Advance + Balance payment</li>
                <li>✓ GST Invoice provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="px-6 py-20 bg-black/5">
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
              Pro Tips for Smooth Ordering
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-4">
            {proTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-xl p-4 flex gap-3"
              >
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h3 className="font-heading text-black">{tip.title}</h3>
                  <p className="text-black/60 text-sm">{tip.description}</p>
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
            {orderingFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black/5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-heading text-black mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-black/60 mb-8">
            Our team is ready to assist you with your order, whether retail or bulk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
            >
              💬 Start Order on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-block border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              📞 Call to Order
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const retailProcess = [
  { title: "Browse Products", description: "Explore our collection and select your favorites" },
  { title: "Share Requirements", description: "Send product names, quantity, and delivery details via WhatsApp" },
  { title: "Get Quote", description: "Receive pricing and delivery timeline" },
  { title: "Make Payment", description: "Pay via UPI, card, or COD where available" },
  { title: "Track Order", description: "Receive tracking details and delivery updates" },
];

const bulkProcess = [
  { title: "Initial Inquiry", description: "Contact corporate desk with basic requirements" },
  { title: "Requirement Gathering", description: "Share detailed specifications and preferences" },
  { title: "Sample Approval", description: "Request samples for quality verification" },
  { title: "Quote & Negotiation", description: "Discuss pricing, discounts, and terms" },
  { title: "Order Confirmation", description: "Confirm order with advance payment" },
  { title: "Production & Delivery", description: "Bulk production and scheduled delivery" },
];

const requirements = [
  "Product names or preferences",
  "Quantity needed (number of units)",
  "Occasion and delivery deadline",
  "Delivery address with pincode",
  "Budget range (per unit or total)",
  "Packaging preferences (standard/custom)",
  "Any customization (logo, message)",
  "Special instructions (allergies, etc.)",
];

const negotiationTips = [
  "Mention your exact quantity for accurate pricing",
  "Ask about early bird or seasonal discounts",
  "Combine multiple occasions for better rates",
  "Request sample tasting before bulk commitment",
  "Inquire about long-term partnership pricing",
  "Be clear about delivery timelines and expectations",
];

const confirmationSteps = [
  { icon: "📋", title: "Quote Received", description: "Detailed price breakdown" },
  { icon: "✅", title: "Order Confirmed", description: "You approve the quote" },
  { icon: "💰", title: "Payment Made", description: "Advance or full payment" },
  { icon: "🚚", title: "Order Dispatched", description: "Tracking provided" },
];

const proTips = [
  { icon: "📅", title: "Order in Advance", description: "For bulk orders, place at least 7-10 days before the event" },
  { icon: "📏", title: "Order Extra", description: "Add 10-15% buffer quantity for unexpected guests" },
  { icon: "🎁", title: "Ask About Samples", description: "Request samples for bulk orders before finalizing" },
  { icon: "💬", title: "Keep Communication Clear", description: "Share all requirements in one message to avoid back-and-forth" },
];

const orderingFaqs = [
  { question: "What's the minimum order for retail?", answer: "No minimum order - you can order even a single box!" },
  { question: "What's considered a bulk order?", answer: "Orders of 50 units or more qualify for bulk pricing." },
  { question: "How long does delivery take?", answer: "Retail: 2-5 days. Bulk: 5-7 days depending on quantity." },
  { question: "Can I get a sample before bulk order?", answer: "Yes, samples are available for bulk inquiries (charges may apply, refundable on order)." },
  { question: "What payment methods are accepted?", answer: "UPI, cards, net banking, bank transfer, and COD for select locations." },
];