"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function TermsPage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
        
        {/* Decorative background elements */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-black/5 rounded-full" />
        
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
            Legal Agreement
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-md mt-6 max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="text-black/40 text-sm mt-4"
          >
            Last updated: January 2024
          </motion.div>
        </motion.div>
      </section>

      {/* Terms Content */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >

            {/* Introduction */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">1. Introduction</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <p className="text-black/70 text-sm leading-relaxed pl-4">
                Welcome to Bandan Sweets. By accessing our website, placing an order, or using our services, 
                you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, 
                please do not use our services.
              </p>
            </motion.div>

            {/* Eligibility */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">2. Eligibility</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>You must be at least 18 years of age to place an order</li>
                <li>You must provide accurate, complete, and current information</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>We reserve the right to refuse service to anyone at our discretion</li>
              </ul>
            </motion.div>

            {/* Orders & Pricing */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">3. Orders & Pricing</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>All prices are in Indian Rupees (INR) and inclusive of GST unless stated otherwise</li>
                <li>We reserve the right to modify prices without prior notice</li>
                <li>Order confirmation is subject to product availability and payment verification</li>
                <li>In case of pricing errors, we may cancel or refuse orders at our discretion</li>
                <li>Bulk orders (50+ units) require a minimum 7-day lead time</li>
              </ul>
            </motion.div>

            {/* Payment Terms */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">4. Payment Terms</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>Full payment is required before order processing and dispatch</li>
                <li>We accept UPI, credit/debit cards, net banking, and bank transfers</li>
                <li>Cash on Delivery (COD) is available only in select locations</li>
                <li>For bulk orders, 50% advance payment is required, balance before dispatch</li>
                <li>All transactions are secured with industry-standard encryption</li>
              </ul>
            </motion.div>

            {/* Delivery & Shipping */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">5. Delivery & Shipping</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>Delivery timelines are estimates and not guaranteed</li>
                <li>We are not liable for delays caused by weather, logistics partners, or unforeseen circumstances</li>
                <li>Shipping charges are calculated at checkout based on location and order value</li>
                <li>Orders above ₹2,000 qualify for free standard shipping</li>
                <li>International shipping is currently not available</li>
              </ul>
            </motion.div>

            {/* Returns & Refunds */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">6. Returns & Refunds</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>Due to the perishable nature of sweets, returns are not accepted for change of mind</li>
                <li>If you receive damaged or incorrect items, please contact us within 24 hours of delivery</li>
                <li>We will arrange for replacement or refund after verifying the issue</li>
                <li>Refunds are processed within 7-10 business days after approval</li>
                <li>Customised/personalised orders cannot be returned or refunded</li>
              </ul>
            </motion.div>

            {/* Product Quality */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">7. Product Quality</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>All sweets are made with premium, preservative-free ingredients</li>
                <li>Our products contain milk, nuts, and gluten unless specified otherwise</li>
                <li>Please check ingredient labels for allergen information</li>
                <li>Best consumed within 5-7 days of delivery when stored properly</li>
                <li>We are not liable for improper storage after delivery</li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">8. Intellectual Property</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>All content on this website is owned by Bandan Sweets</li>
                <li>You may not reproduce, distribute, or modify our content without permission</li>
                <li>Bandan Sweets is a registered trademark</li>
                <li>Unauthorized use may result in legal action</li>
              </ul>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">9. Limitation of Liability</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <p className="text-black/70 text-sm leading-relaxed pl-4">
                To the maximum extent permitted by law, Bandan Sweets shall not be liable for any indirect, 
                incidental, or consequential damages arising from your use of our products or services. 
                Our total liability shall not exceed the amount you paid for the specific order.
              </p>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">10. Cancellation Policy</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <ul className="list-disc pl-8 text-black/70 text-sm space-y-1">
                <li>Orders can be cancelled within 2 hours of placement for a full refund</li>
                <li>After 2 hours, cancellations may incur a 20% processing fee</li>
                <li>Orders already dispatched cannot be cancelled</li>
                <li>For bulk orders, cancellations require 7 days notice</li>
              </ul>
            </motion.div>

            {/* Force Majeure */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">11. Force Majeure</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <p className="text-black/70 text-sm leading-relaxed pl-4">
                We are not liable for delays or failures in performance due to causes beyond our reasonable control, 
                including natural disasters, pandemics, strikes, government actions, or logistics disruptions.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">12. Governing Law</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <p className="text-black/70 text-sm leading-relaxed pl-4">
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive 
                jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">13. Changes to Terms</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <p className="text-black/70 text-sm leading-relaxed pl-4">
                We may update these terms periodically. Continued use of our services constitutes acceptance 
                of the revised terms. Please review this page regularly for updates.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-black/30" />
                <h2 className="text-2xl font-heading text-black">14. Contact Us</h2>
                <div className="flex-1 h-px bg-black/30" />
              </div>
              <div className="pl-4 space-y-2">
                <p className="text-black/70 text-sm">For questions about these Terms & Conditions, please contact us:</p>
                <div className="p-4 bg-black/5 rounded-xl space-y-1 text-sm">
                  <p className="text-black/70">📧 <span className="font-semibold">Email:</span> legal@bandansweets.com</p>
                  <p className="text-black/70">📞 <span className="font-semibold">Phone:</span> +91 XXXXXXXXXX</p>
                  <p className="text-black/70">📍 <span className="font-semibold">Address:</span> Bandan Sweets, Mumbai, India</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Acceptance Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-black/5 rounded-xl text-center border border-black/10"
          >
            <p className="text-black/60 text-sm">
              <span className="font-heading text-black">By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="px-6 py-10 bg-black/5 text-center border-t border-black/10">
        <Link href="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors text-sm">
          <span>←</span> Back to Home
        </Link>
        <span className="mx-4 text-black/20">|</span>
        <Link href="/privacy-policy" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors text-sm">
          Privacy Policy →
        </Link>
      </section>
    </main>
  );
}