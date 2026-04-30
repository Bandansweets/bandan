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

export default function CorporateGiftingPage() {
  const [selectedTier, setSelectedTier] = useState("premium");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    occasion: "",
    quantity: "",
    budget: "",
    customization: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Corporate gifting inquiry:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            Make a Lasting Impression
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Corporate Gifting
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Impress clients, reward teams, and celebrate milestones with curated luxury sweet boxes
          </motion.p>
        </motion.div>
      </section>

      {/* Gifting Tiers */}
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
              Choose Your Gifting Tier
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Three distinct tiers to match your budget and gifting needs
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {giftingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white border rounded-2xl p-8 transition-all shadow-sm hover:shadow-lg ${
                  selectedTier === tier.id
                    ? "border-black scale-105"
                    : "border-black/10 hover:border-black/30"
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <div className="text-5xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-heading text-black mb-2">{tier.name}</h3>
                <div className="text-3xl font-heading text-black mb-4">{tier.price}</div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-black/60 text-sm flex items-center gap-2">
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const element = document.getElementById("inquiry-form");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full border border-black/30 rounded-full py-2 text-sm hover:bg-black hover:text-white transition-all"
                >
                  Select {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
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
              Personalization Options
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {customizations.map((custom, index) => (
              <motion.div
                key={custom.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white border border-black/10 rounded-2xl hover:border-black/30 transition-all"
              >
                <div className="text-4xl mb-3">{custom.icon}</div>
                <h3 className="font-heading text-black mb-2">{custom.title}</h3>
                <p className="text-black/50 text-xs">{custom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Corporate Gifting */}
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
              Why Choose Bandan for Corporate Gifting?
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 border border-black/10 rounded-2xl hover:border-black/30 transition-all"
              >
                <div className="text-3xl">{reason.icon}</div>
                <div>
                  <h3 className="font-heading text-black mb-2">{reason.title}</h3>
                  <p className="text-black/60 text-sm">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Corporate Clients */}
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
              Trusted By Industry Leaders
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{client.icon}</div>
                <div className="text-black/60 text-xs">{client.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="px-6 py-20 bg-white">
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
              Request a Quote
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Fill out the form below and our corporate gifting specialist will contact you
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
          >
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Thank you! Our corporate team will contact you within 24 hours with a customized quote.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Company Name *"
                />
                <input
                  type="text"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Contact Person *"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Email Address *"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Phone Number *"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <select
                  name="occasion"
                  required
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                >
                  <option value="">Occasion *</option>
                  <option value="diwali">Diwali</option>
                  <option value="new-year">New Year</option>
                  <option value="anniversary">Company Anniversary</option>
                  <option value="client-gift">Client Appreciation</option>
                  <option value="employee-gift">Employee Rewards</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                >
                  <option value="">Quantity *</option>
                  <option value="25-50">25 - 50 units</option>
                  <option value="51-100">51 - 100 units</option>
                  <option value="101-250">101 - 250 units</option>
                  <option value="251-500">251 - 500 units</option>
                  <option value="500+">500+ units</option>
                </select>

                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                >
                  <option value="">Budget Per Unit *</option>
                  <option value="under-500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1,000</option>
                  <option value="1000-1500">₹1,000 - ₹1,500</option>
                  <option value="1500-2000">₹1,500 - ₹2,000</option>
                  <option value="2000+">₹2,000+</option>
                </select>
              </div>

              <textarea
                name="customization"
                rows={3}
                value={formData.customization}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black resize-none"
                placeholder="Customization requirements (logo printing, specific products, delivery date, etc.)"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                Request Custom Quote →
              </button>
            </form>

            <p className="text-center text-black/40 text-xs mt-4">
              Our team typically responds within 24 business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="px-6 py-20 bg-black/5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-heading text-black mb-4">
            Need a Quote Immediately?
          </h2>
          <p className="text-black/60 mb-8">
            Connect with our corporate gifting specialist directly on WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919818150911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
            >
              💬 WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-black/30 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              📧 Email Corporate Team
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const giftingTiers = [
  {
    id: "essential",
    name: "Essential",
    price: "₹499 - ₹999",
    icon: "🎁",
    features: [
      "Premium sweet assortment",
      "Elegant standard packaging",
      "Custom message card",
      "3-5 day delivery",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,000 - ₹1,999",
    icon: "✨",
    features: [
      "Luxury sweet selection",
      "Premium gift box packaging",
      "Custom message & branding",
      "2-3 day delivery",
      "Free sample box",
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹2,000+",
    icon: "💎",
    features: [
      "Gold leaf sweets",
      "Bespoke wooden box",
      "Full customization",
      "Priority 24hr delivery",
      "Dedicated account manager",
      "Personalized video message",
    ],
  },
];

const customizations = [
  {
    icon: "🏷️",
    title: "Logo Printing",
    description: "Custom branding on packaging",
  },
  {
    icon: "💌",
    title: "Personalized Notes",
    description: "Handwritten or printed messages",
  },
  {
    icon: "🎨",
    title: "Custom Packaging",
    description: "Brand colors & design",
  },
  {
    icon: "📦",
    title: "Bulk Discounts",
    description: "Volume-based pricing",
  },
];

const reasons = [
  {
    icon: "🎯",
    title: "Memorable Impressions",
    description: "Create lasting brand recall with premium quality sweets",
  },
  {
    icon: "⚡",
    title: "Quick Turnaround",
    description: "Bulk orders delivered within 3-5 business days",
  },
  {
    icon: "🎨",
    title: "Fully Customizable",
    description: "Tailored to your brand identity and gifting goals",
  },
  {
    icon: "📊",
    title: "Budget Flexibility",
    description: "Options available for every budget range",
  },
];

const clients = [
  { name: "TechCorp", icon: "🏢" },
  { name: "Global Bank", icon: "🏦" },
  { name: "Luxury Hotel", icon: "🏨" },
  { name: "Events Co", icon: "🎪" },
  { name: "Retail Giant", icon: "🏬" },
];