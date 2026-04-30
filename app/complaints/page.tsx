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

export default function CustomerCarePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    issueType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to your backend
    console.log("Form submitted:", formData);
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
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-white overflow-hidden">
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
            We're Here to Help
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Customer Care
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Your satisfaction is our priority. Let us make things right.
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Resolution Options */}
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
              Quick Resolution
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resolutionOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:border-black/30 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3">
                  {option.title}
                </h3>
                <p className="text-black/60 text-sm mb-4">
                  {option.description}
                </p>
                <a
                  href={option.link}
                  className="inline-block text-sm text-black border-b border-black/30 hover:border-black transition-all"
                >
                  {option.action} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Issue Resolution Process */}
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
              Our Resolution Process
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              We follow a transparent and efficient process to address your concerns
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-black/10 hidden md:block" />
            
            <div className="space-y-12">
              {resolutionProcess.map((step, index) => (
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
                      <div className="text-black/20 font-heading text-4xl mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-heading text-black mb-2">
                        {step.title}
                      </h3>
                      <p className="text-black/60 text-sm">
                        {step.description}
                      </p>
                      <div className="mt-3 text-xs text-black/40">
                        ⏱️ {step.timeline}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues & Solutions */}
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
              Common Concerns
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{issue.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading text-black mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-black/60 text-sm mb-3">
                      {issue.description}
                    </p>
                    <div className="text-sm text-black/80">
                      <span className="font-semibold">Solution:</span> {issue.solution}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
              Reach Out to Us
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Fill out the form below and our team will respond within 24 hours
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
                Thank you for reaching out! Our team will contact you shortly.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Order Number
                  </label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="ORD-12345"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Issue Type *
                  </label>
                  <select
                    name="issueType"
                    required
                    value={formData.issueType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="product">Product Quality</option>
                    <option value="delivery">Delivery Issue</option>
                    <option value="packaging">Packaging Concern</option>
                    <option value="hygiene">Hygiene Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white resize-none"
                  placeholder="Please describe your concern in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
              >
                Submit Request
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-black/40">
              We typically respond within 24 hours on business days
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading text-black mb-6">
              Prefer to speak with us directly?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-black/30 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <span>💬</span>
                WhatsApp Support
              </a>
              <a
                href="tel:+919XXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 border border-black/30 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <span>📞</span>
                Call Customer Care
              </a>
              <a
                href="mailto:support@bandansweets.com"
                className="inline-flex items-center justify-center gap-2 border border-black/30 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <span>✉️</span>
                Email Support
              </a>
            </div>
            <p className="text-black/40 text-sm mt-6">
              Support hours: Monday - Saturday, 10 AM - 7 PM IST
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Data Arrays
const resolutionOptions = [
  {
    icon: "🔍",
    title: "Track Your Order",
    description: "Check real-time status of your delivery",
    link: "/delivery",
    action: "Track Order",
  },
  {
    icon: "🔄",
    title: "Return & Exchange",
    description: "Learn about our return policy",
    link: "/terms",
    action: "View Policy",
  },
  {
    icon: "❓",
    title: "FAQ",
    description: "Find answers to common questions",
    link: "/faq",
    action: "Read FAQs",
  },
];

const resolutionProcess = [
  {
    title: "Acknowledgment",
    description: "We acknowledge your concern within 2 hours of submission via email/WhatsApp.",
    timeline: "Within 2 hours",
  },
  {
    title: "Investigation",
    description: "Our team investigates the issue thoroughly, reviewing order details and quality checks.",
    timeline: "4-8 hours",
  },
  {
    title: "Resolution",
    description: "We propose a solution - replacement, refund, or store credit based on the situation.",
    timeline: "24 hours",
  },
  {
    title: "Follow-up",
    description: "We ensure your satisfaction and implement improvements to prevent recurrence.",
    timeline: "48 hours",
  },
];

const commonIssues = [
  {
    icon: "🍬",
    title: "Product Quality Concern",
    description: "Issue with taste, freshness, or appearance of sweets",
    solution: "Share photos of the product. We'll arrange a replacement or refund immediately.",
  },
  {
    icon: "🚚",
    title: "Delivery Delay",
    description: "Order not received within estimated time",
    solution: "Track your order online. Contact us for expedited resolution.",
  },
  {
    icon: "📦",
    title: "Packaging Damage",
    description: "Box arrived damaged or tampered",
    solution: "Share photos. We'll send a replacement with premium packaging.",
  },
  {
    icon: "🧼",
    title: "Hygiene Question",
    description: "Concern about product handling or storage",
    solution: "Review our FSSAI certification and hygiene protocols. Request a factory tour.",
  },
  {
    icon: "🎁",
    title: "Wrong Item Received",
    description: "Received different product than ordered",
    solution: "Keep the incorrect item. We'll ship the correct order immediately.",
  },
  {
    icon: "💳",
    title: "Payment Issue",
    description: "Double charge or payment failure",
    solution: "Share transaction ID. We'll verify and refund within 3-5 business days.",
  },
];