"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function PrivacyPolicyPage() {
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
            Legal
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-heading text-black mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 mt-4"
          >
            Last updated: January 2024
          </motion.p>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="px-6 py-12 bg-white">
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
              <h2 className="text-2xl font-heading text-black">Introduction</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                At Bandan Sweets ("we", "our", "us"), we respect your privacy and are committed to protecting your personal data.
                This policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Information We Collect</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <ul className="list-disc pl-5 text-black/70 text-sm space-y-1">
                <li><span className="font-semibold">Personal Details:</span> Name, email address, phone number, delivery address</li>
                <li><span className="font-semibold">Order Information:</span> Products purchased, quantity, order history, preferences</li>
                <li><span className="font-semibold">Payment Data:</span> Transaction details (we do not store full payment card information)</li>
                <li><span className="font-semibold">Technical Data:</span> IP address, browser type, device information, cookies</li>
                <li><span className="font-semibold">Communication Data:</span> WhatsApp messages, emails, call recordings for quality purposes</li>
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">How We Use Your Information</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <ul className="list-disc pl-5 text-black/70 text-sm space-y-1">
                <li>Process and fulfill your orders, including delivery and customer support</li>
                <li>Send order confirmations, delivery updates, and tracking information</li>
                <li>Respond to your inquiries via WhatsApp, email, or phone</li>
                <li>Improve our products, services, and website experience</li>
                <li>Send promotional offers and updates (only with your consent)</li>
                <li>Prevent fraud and ensure security of transactions</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Information Sharing</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share data with:
              </p>
              <ul className="list-disc pl-5 text-black/70 text-sm space-y-1 mt-2">
                <li><span className="font-semibold">Delivery Partners:</span> For order fulfillment (name, address, phone number)</li>
                <li><span className="font-semibold">Payment Processors:</span> To complete transactions securely</li>
                <li><span className="font-semibold">Legal Authorities:</span> When required by law or to protect our rights</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Data Security</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                We implement industry-standard security measures including SSL encryption for data transmission,
                secure servers, restricted access to personal data, and regular security audits. However, no method
                of transmission over the internet is 100% secure.
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Cookies</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic.
                You can control cookie settings through your browser preferences.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Your Rights</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <ul className="list-disc pl-5 text-black/70 text-sm space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="text-black/70 text-sm mt-2">
                To exercise these rights, contact us at <span className="font-semibold">privacy@bandansweets.com</span>
              </p>
            </motion.div>

            {/* Data Retention */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Data Retention</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                We retain order information for 7 years as required by tax and accounting laws.
                Marketing data is retained until you unsubscribe. Chat/WhatsApp history is retained for 1 year.
              </p>
            </motion.div>

            {/* Third-Party Links */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Third-Party Links</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                Our website may contain links to external sites (payment gateways, social media).
                We are not responsible for the privacy practices of these third parties.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Children's Privacy</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect data from children.
                If you believe a child has provided us with personal information, please contact us.
              </p>
            </motion.div>

            {/* Updates to Policy */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Updates to This Policy</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                We may update this privacy policy periodically. Changes will be posted on this page with an updated
                "Last updated" date. Continued use of our services constitutes acceptance of the revised policy.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Contact Us</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                For privacy-related questions or concerns, please reach out:
              </p>
              <div className="mt-3 p-4 bg-black/5 rounded-xl text-sm space-y-1">
                <p>📧 <span className="font-semibold">Email:</span> privacy@bandansweets.com</p>
                <p>📞 <span className="font-semibold">Phone:</span> +91 9818150911</p>
                <p>📍 <span className="font-semibold">Address:</span> Bandan Sweets, [City], India</p>
              </div>
            </motion.div>

            {/* Grievance Officer */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl font-heading text-black">Grievance Officer</h2>
              <div className="w-12 h-0.5 bg-black/30" />
              <p className="text-black/70 text-sm leading-relaxed">
                In accordance with Indian data protection laws, our Grievance Officer handles all privacy-related concerns:
              </p>
              <div className="mt-3 p-4 bg-black/5 rounded-xl text-sm">
                <p><span className="font-semibold">Name:</span> [Name]</p>
                <p><span className="font-semibold">Email:</span> grievance@bandansweets.com</p>
                <p><span className="font-semibold">Response Time:</span> 30 business days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="px-6 py-10 bg-black/5 text-center">
        <Link href="/" className="text-black/60 text-sm hover:text-black transition-colors">
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}