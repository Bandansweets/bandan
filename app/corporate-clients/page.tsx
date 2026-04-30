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

export default function CorporateClientsPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    occasion: "",
    quantity: "",
    budget: "",
    requirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Corporate inquiry:", formData);
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
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-white overflow-hidden">
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
            B2B Partnerships
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Corporate Solutions
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Elevate your corporate gifting and events with premium sweets, wholesale pricing, and seamless bulk ordering.
          </motion.p>
        </motion.div>
      </section>

      {/* Key Offerings */}
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
              What We Offer
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:border-black/30 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{offering.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3">
                  {offering.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasion-Based Solutions */}
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
              Perfect For Every Occasion
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all">
                  <div className="text-4xl mb-3">{occasion.icon}</div>
                  <h3 className="font-heading text-black mb-2">{occasion.title}</h3>
                  <p className="text-black/50 text-xs">{occasion.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Process */}
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
              Simple 4-Step Process
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              From inquiry to delivery - we make bulk ordering effortless
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-black/10 hidden md:block" />
            
            <div className="space-y-12">
              {process.map((step, index) => (
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
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md z-10 hidden md:block" />
                  
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition-all">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <h3 className="text-xl font-heading text-black mb-2">
                        {step.title}
                      </h3>
                      <p className="text-black/60 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order Calculator */}
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
              Quick Quote Calculator
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Get an estimated quote based on your requirements
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
                Thank you! Our corporate team will contact you within 24 hours.
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
                  <option value="">Select Occasion *</option>
                  <option value="diwali">Diwali</option>
                  <option value="corporate-event">Corporate Event</option>
                  <option value="seminar">Seminar/Conference</option>
                  <option value="festival">Festival Celebration</option>
                  <option value="party">Office Party</option>
                  <option value="factory-event">Factory Event</option>
                  <option value="annual-day">Annual Day</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                >
                  <option value="">Quantity Range *</option>
                  <option value="50-100">50 - 100 units</option>
                  <option value="101-250">101 - 250 units</option>
                  <option value="251-500">251 - 500 units</option>
                  <option value="501-1000">501 - 1000 units</option>
                  <option value="1000+">1000+ units</option>
                </select>

                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black"
                >
                  <option value="">Budget Range *</option>
                  <option value="under-25k">Under ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k-1lac">₹50,000 - ₹1,00,000</option>
                  <option value="1lac-5lac">₹1,00,000 - ₹5,00,000</option>
                  <option value="5lac+">₹5,00,000+</option>
                </select>
              </div>

              <textarea
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black resize-none"
                placeholder="Specific requirements (packaging, customization, delivery date, etc.)"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                Request Quote →
              </button>
            </form>

            <p className="text-center text-black/40 text-xs mt-4">
              Our corporate team will respond within 24 business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Corporate Clients Trust Us
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-heading text-black mb-2">{benefit.title}</h3>
                <p className="text-black/50 text-xs">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="px-6 py-20 bg-black/5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-heading text-black mb-4">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-black/60 mb-8">
            Our corporate team is ready to assist you with custom quotes, samples, and delivery coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
            >
              💬 WhatsApp Corporate Desk
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
const offerings = [
  {
    icon: "🍬",
    title: "Wholesale Sweets",
    description: "Premium quality sweets at competitive bulk pricing",
  },
  {
    icon: "🎁",
    title: "Custom Gift Packaging",
    description: "Personalized packaging with your company branding",
  },
  {
    icon: "🚚",
    title: "Bulk Delivery",
    description: "Pan-India delivery with temperature control",
  },
];

const occasions = [
  { icon: "🎉", title: "Diwali", description: "Festival of lights" },
  { icon: "🏢", title: "Corporate Events", description: "Conferences & meetings" },
  { icon: "🎊", title: "Office Parties", description: "Celebrations & milestones" },
  { icon: "🏭", title: "Factory Events", description: "Plant inaugurations" },
];

const process = [
  {
    icon: "📋",
    title: "Share Requirements",
    description: "Tell us your occasion, quantity, budget, and customization needs",
  },
  {
    icon: "💬",
    title: "Get Custom Quote",
    description: "Receive a personalized quote with bulk pricing and samples",
  },
  {
    icon: "✅",
    title: "Confirm Order",
    description: "Approve the quote, share delivery details, and make payment",
  },
  {
    icon: "🚚",
    title: "Delivery",
    description: "Receive your order with tracking and quality assurance",
  },
];

const benefits = [
  { icon: "💰", title: "Volume Discounts", description: "Save more on bulk orders" },
  { icon: "🎨", title: "Custom Branding", description: "Logo & message printing" },
  { icon: "⏱️", title: "Timely Delivery", description: "Guaranteed on-time dispatch" },
  { icon: "🤝", title: "Dedicated Support", description: "Single point of contact" },
];