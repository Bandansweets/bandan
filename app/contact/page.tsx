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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
            Let's Connect
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether you have a question, feedback, or gifting inquiry.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-8 text-center hover:border-black/30 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-heading text-black mb-3">
                  {method.title}
                </h3>
                <p className="text-black/60 text-sm mb-4">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  className="text-sm text-black border-b border-black/30 hover:border-black transition-all"
                >
                  {method.action} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-heading text-black mb-2">
                Send a Message
              </h2>
              <div className="w-12 h-0.5 bg-black/30 mb-6" />
              <p className="text-black/60 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  ✨ Thank you for reaching out! We'll respond shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="Your Name *"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="Email Address *"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="">Select Subject *</option>
                    <option value="order">Order Inquiry</option>
                    <option value="gifting">Corporate Gifting</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors bg-white resize-none"
                    placeholder="Your Message *"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading text-black mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold text-black">Visit Us</div>
                      <p className="text-black/60 text-sm">
                        Bandan Sweets<br />
                        Mumbai, Maharashtra<br />
                        India 400001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="font-semibold text-black">Call Us</div>
                      <p className="text-black/60 text-sm">
                        +91 XXXXXXXXXX<br />
                        Mon-Sat, 10 AM - 7 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <div className="font-semibold text-black">Email Us</div>
                      <p className="text-black/60 text-sm">
                        hello@bandansweets.com<br />
                        support@bandansweets.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-semibold text-black">WhatsApp</div>
                      <p className="text-black/60 text-sm">
                        +91 XXXXXXXXXX<br />
                        24/7 Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading text-black mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Monday - Friday</span>
                    <span className="text-black">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Saturday</span>
                    <span className="text-black">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/60">Sunday</span>
                    <span className="text-black">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-heading text-black mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-2xl hover:bg-black hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
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
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-black/10 rounded-xl p-6 hover:border-black/30 transition-all"
              >
                <h3 className="font-heading text-black mb-2">
                  {faq.question}
                </h3>
                <p className="text-black/60 text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-block text-sm text-black border-b border-black/30 hover:border-black transition-all"
            >
              View All FAQs →
            </Link>
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
          <h2 className="text-3xl md:text-4xl font-heading text-black mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-black/60 mb-8">
            For urgent inquiries, reach out to us on WhatsApp for quick responses.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all"
          >
            Chat on WhatsApp →
          </a>
        </motion.div>
      </section>
    </main>
  );
}

// Data Arrays
const contactMethods = [
  {
    icon: "💬",
    title: "WhatsApp",
    description: "Quickest response time. Chat with our support team.",
    link: "https://wa.me/91XXXXXXXXXX",
    action: "Start Chat",
  },
  {
    icon: "📞",
    title: "Phone Call",
    description: "Speak directly with our customer care team.",
    link: "tel:+919XXXXXXXXX",
    action: "Call Now",
  },
  {
    icon: "✉️",
    title: "Email",
    description: "Send us a detailed message and we'll respond promptly.",
    link: "mailto:hello@bandansweets.com",
    action: "Send Email",
  },
];

const socialLinks = [
  { name: "Instagram", icon: "📷", link: "https://instagram.com" },
  { name: "Facebook", icon: "👍", link: "https://facebook.com" },
  { name: "LinkedIn", icon: "💼", link: "https://linkedin.com" },
  { name: "Twitter", icon: "🐦", link: "https://twitter.com" },
];

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We typically respond within 24 hours on business days. For urgent matters, please reach out via WhatsApp for faster response.",
  },
  {
    question: "Do you offer corporate gifting solutions?",
    answer: "Yes! We specialize in bespoke corporate gifting. Please select 'Corporate Gifting' in the subject dropdown for priority handling.",
  },
  {
    question: "Can I place a bulk order for an event?",
    answer: "Absolutely. Contact us at least 7-10 days in advance for bulk orders, and our team will assist you with customization and delivery.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, UPI, net banking, and bank transfers for bulk orders.",
  },
];