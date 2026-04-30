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

export default function DeliveryPage() {
  const [orderType, setOrderType] = useState("small");
  const [pincode, setPincode] = useState("");
  const [isServiceable, setIsServiceable] = useState<boolean | null>(null);

  const checkServiceability = () => {
    // Simulate serviceability check
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setIsServiceable(true);
    } else if (pincode.length > 0) {
      setIsServiceable(false);
    }
  };

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
            Seamless Delivery
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Delivery Information
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Freshness guaranteed, delivered with care across India
          </motion.p>
        </motion.div>
      </section>

      {/* Delivery Coverage */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Pan-India Delivery
              </h2>
              <div className="w-16 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/70 leading-relaxed mb-4">
                We deliver to all major cities and towns across India. Our extensive logistics network ensures your sweets reach you fresh, no matter where you are.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span>✓</span> Metro Cities
                </div>
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span>✓</span> Tier-1 & Tier-2 Cities
                </div>
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span>✓</span> Selected Rural Areas
                </div>
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span>✓</span> Corporate Hubs
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/5 rounded-2xl p-8 border border-black/10"
            >
              <h3 className="font-heading text-black mb-4">Check Serviceability</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode"
                  className="flex-1 px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                  maxLength={6}
                />
                <button
                  onClick={checkServiceability}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-all"
                >
                  Check
                </button>
              </div>
              {isServiceable === true && (
                <p className="text-green-600 text-sm mt-3">✓ We deliver to this location!</p>
              )}
              {isServiceable === false && (
                <p className="text-red-500 text-sm mt-3">✗ Currently not serviceable. Contact us for special arrangements.</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
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
              How Delivery Works
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <motion.div
                key={index}
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
                <p className="text-black/50 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Type Toggle */}
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
              Delivery by Order Type
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setOrderType("small")}
              className={`px-6 py-2 rounded-full transition-all ${
                orderType === "small"
                  ? "bg-black text-white"
                  : "border border-black/30 text-black hover:bg-black/5"
              }`}
            >
              Small Orders
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

          {orderType === "small" ? (
            <div className="grid md:grid-cols-2 gap-8">
              {smallOrderDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-black/10 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-3">{detail.icon}</div>
                  <h3 className="font-heading text-black mb-2">{detail.title}</h3>
                  <p className="text-black/60 text-sm">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {bulkOrderDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-black/10 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-3">{detail.icon}</div>
                  <h3 className="font-heading text-black mb-2">{detail.title}</h3>
                  <p className="text-black/60 text-sm">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Packaging Process */}
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
              Our Packaging Promise
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-black mb-2">{feature.title}</h3>
                <p className="text-black/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
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
              Delivery Timeline
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {timelines.map((timeline, index) => (
              <motion.div
                key={timeline.region}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 border border-black/10 rounded-xl"
              >
                <div className="text-2xl mb-2">{timeline.icon}</div>
                <div className="font-heading text-black">{timeline.region}</div>
                <div className="text-2xl font-heading text-black my-1">{timeline.time}</div>
                <div className="text-black/40 text-xs">{timeline.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking & Support */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/10 rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-heading text-black mb-3">Real-Time Tracking</h3>
              <p className="text-black/60 text-sm mb-4">
                Track your order from our kitchen to your doorstep with real-time updates via:
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                <li>✓ SMS notifications at every stage</li>
                <li>✓ Email updates with tracking link</li>
                <li>✓ WhatsApp status updates</li>
                <li>✓ Live chat support for queries</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/10 rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-heading text-black mb-3">Delivery Support</h3>
              <p className="text-black/60 text-sm mb-4">
                Our customer support team is available to assist with delivery-related queries:
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                <li>✓ WhatsApp: +91 XXXXXXXXXX</li>
                <li>✓ Email: delivery@bandansweets.com</li>
                <li>✓ Phone: +91 XXXXXXXXXX</li>
                <li>✓ Support Hours: 10 AM - 7 PM (Mon-Sat)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Policies */}
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
              Delivery Policies
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-black/10 rounded-xl p-5"
              >
                <div className="flex gap-3">
                  <div className="text-2xl">{policy.icon}</div>
                  <div>
                    <h3 className="font-heading text-black mb-1">{policy.title}</h3>
                    <p className="text-black/60 text-sm">{policy.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="space-y-4">
            {deliveryFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-xl p-5"
              >
                <h3 className="font-heading text-black mb-2">{faq.question}</h3>
                <p className="text-black/60 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white text-center">
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
            Experience our seamless delivery process and enjoy fresh, premium sweets at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
            >
              Browse Products →
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const deliverySteps = [
  { icon: "📦", title: "Order Placed", description: "Receive confirmation with order ID" },
  { icon: "👨‍🍳", title: "Fresh Preparation", description: "Handcrafted with care" },
  { icon: "🚚", title: "Dispatched", description: "Track your shipment" },
  { icon: "🏠", title: "Delivered", description: "Freshness guaranteed" },
];

const smallOrderDetails = [
  { icon: "📮", title: "Standard Shipping", description: "3-5 business days delivery via trusted courier partners" },
  { icon: "⚡", title: "Express Delivery", description: "1-2 business days for metro cities (additional charges apply)" },
  { icon: "🎁", title: "Gift Packaging", description: "Elegant gift-ready boxes with all orders" },
  { icon: "📦", title: "Secure Packaging", description: "Tamper-proof, temperature-controlled packaging" },
];

const bulkOrderDetails = [
  { icon: "🚛", title: "Dedicated Logistics", description: "Special vehicle dispatch for bulk orders" },
  { icon: "📋", title: "Priority Handling", description: "Expedited processing and dispatch" },
  { icon: "🎨", title: "Custom Packaging", description: "Branded packaging as per requirements" },
  { icon: "🤝", title: "White-Glove Service", description: "Doorstep delivery with setup assistance" },
];

const packagingFeatures = [
  { icon: "🌡️", title: "Temperature Controlled", description: "Special insulation for freshness" },
  { icon: "🔒", title: "Tamper-Evident", description: "Secure seals on all packages" },
  { icon: "♻️", title: "Eco-Friendly", description: "Sustainable packaging materials" },
];

const timelines = [
  { region: "Metro Cities", time: "1-2 Days", icon: "🏙️", description: "Express Delivery" },
  { region: "Tier-1 Cities", time: "2-3 Days", icon: "🌆", description: "Standard Delivery" },
  { region: "Tier-2 Cities", time: "3-4 Days", icon: "🏘️", description: "Standard Delivery" },
  { region: "Remote Areas", time: "5-7 Days", icon: "🏞️", description: "Extended Delivery" },
];

const policies = [
  { icon: "📅", title: "Same-Day Dispatch", description: "Orders placed before 2 PM are dispatched the same day" },
  { icon: "🔄", title: "Delivery Attempts", description: "2 delivery attempts made before return to warehouse" },
  { icon: "📞", title: "Pre-Delivery Call", description: "Our partner calls before delivery for coordination" },
  { icon: "🎁", title: "Gift Delivery", description: "Special instructions accepted for surprise deliveries" },
];

const deliveryFaqs = [
  { question: "Do you deliver on weekends?", answer: "Yes, we deliver on Saturdays. Sunday deliveries are available in select cities with prior confirmation." },
  { question: "What if I'm not home during delivery?", answer: "Our courier partner will call you to reschedule or leave with a neighbor/security with your permission." },
  { question: "How do you ensure freshness during transit?", answer: "We use temperature-controlled packaging and partner with logistics companies specializing in food delivery." },
  { question: "Can I track my bulk order?", answer: "Yes, all bulk orders receive a dedicated tracking ID and point-of-contact for real-time updates." },
  { question: "What's your return policy for damaged items?", answer: "If packaging is damaged on arrival, please refuse delivery and contact us immediately for replacement." },
];