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

export default function CookiesPolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handlePreferenceChange = (type: string) => {
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type as keyof typeof cookiePreferences],
    });
  };

  const savePreferences = () => {
    console.log("Preferences saved:", cookiePreferences);
    // Here you would save to localStorage or backend
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
            Transparency Matters
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Cookie Policy
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            How we use cookies to enhance your experience
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-black/70 leading-relaxed mb-4">
              At Bandan Sweets, we believe in transparency. This Cookie Policy explains how we use cookies 
              and similar technologies to provide you with a seamless, personalized experience while respecting 
              your privacy.
            </p>
            <p className="text-black/70 leading-relaxed">
              By continuing to browse our website, you agree to our use of cookies as described in this policy. 
              You can manage your preferences at any time.
            </p>
          </motion.div>

          {/* Cookie Preferences Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-black/5 rounded-2xl p-8 border border-black/10"
          >
            <h2 className="text-2xl font-heading text-black mb-4">
              Manage Your Preferences
            </h2>
            <p className="text-black/60 text-sm mb-6">
              Choose which cookies you want to allow. Essential cookies are necessary for the website to function properly.
            </p>

            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between p-4 bg-white rounded-lg border border-black/10">
                <div>
                  <h3 className="font-heading text-black mb-1">Essential Cookies</h3>
                  <p className="text-black/50 text-xs">Required for basic website functionality</p>
                </div>
                <div className="text-green-600 text-sm">Always Active</div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-white rounded-lg border border-black/10">
                <div>
                  <h3 className="font-heading text-black mb-1">Analytics Cookies</h3>
                  <p className="text-black/50 text-xs">Help us understand how visitors interact with our site</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange("analytics")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    cookiePreferences.analytics ? "bg-black" : "bg-black/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      cookiePreferences.analytics ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-white rounded-lg border border-black/10">
                <div>
                  <h3 className="font-heading text-black mb-1">Marketing Cookies</h3>
                  <p className="text-black/50 text-xs">Used to deliver personalized advertisements</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange("marketing")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    cookiePreferences.marketing ? "bg-black" : "bg-black/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      cookiePreferences.marketing ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            <button
              onClick={savePreferences}
              className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-black/90 transition-all"
            >
              Save Preferences
            </button>
          </motion.div>

          {/* Detailed Cookie Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                What Are Cookies?
              </h2>
              <p className="text-black/70 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us remember your preferences, understand how you use our site, and improve your 
                browsing experience. Think of them as a way for our website to remember you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                How We Use Cookies
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cookieUses.map((use, index) => (
                  <div key={index} className="border border-black/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">{use.icon}</div>
                    <h3 className="font-heading text-black mb-1">{use.title}</h3>
                    <p className="text-black/50 text-xs">{use.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="border border-black/10 rounded-xl p-4">
                    <h3 className="font-heading text-black mb-2">{type.name}</h3>
                    <p className="text-black/60 text-sm mb-2">{type.description}</p>
                    <p className="text-black/40 text-xs">Duration: {type.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-black/70 leading-relaxed mb-4">
                We use trusted third-party services that may place cookies on your device:
              </p>
              <ul className="space-y-2 text-black/60 text-sm">
                <li>• <span className="font-semibold">Analytics:</span> Google Analytics to understand site usage</li>
                <li>• <span className="font-semibold">Payment:</span> Secure payment processing partners</li>
                <li>• <span className="font-semibold">Social Media:</span> For sharing content on platforms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                Managing Cookies
              </h2>
              <p className="text-black/70 leading-relaxed mb-4">
                You can manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-black/60 text-sm mb-4">
                <li>• View what cookies are stored on your device</li>
                <li>• Delete all cookies</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block all cookies from being set</li>
              </ul>
              <p className="text-black/70 leading-relaxed">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                Updates to This Policy
              </h2>
              <p className="text-black/70 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology 
                or legal requirements. We encourage you to review this page periodically for the 
                latest information on our cookie practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-black mb-4">
                Contact Us
              </h2>
              <p className="text-black/70 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-black/60 text-sm">
                <p>📧 Email: privacy@bandansweets.com</p>
                <p>📞 Phone: +91 XXXXXXXXXX</p>
                <p>📍 Address: Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-black/10 text-center"
          >
            <p className="text-black/40 text-xs">
              Last Updated: January 2024 | Version 1.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Banner Simulation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-white border border-black/20 rounded-2xl shadow-2xl p-6 z-50"
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">🍪</span>
          <div>
            <h4 className="font-heading text-black text-sm mb-1">We Value Your Privacy</h4>
            <p className="text-black/50 text-xs">
              We use cookies to enhance your browsing experience and analyze site traffic.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="/cookies"
            className="flex-1 text-center text-xs text-black border border-black/30 rounded-full py-2 hover:bg-black/5 transition-all"
          >
            Learn More
          </Link>
          <button
            onClick={savePreferences}
            className="flex-1 text-center text-xs bg-black text-white rounded-full py-2 hover:bg-black/90 transition-all"
          >
            Accept All
          </button>
        </div>
      </motion.div>
    </main>
  );
}

// Data Arrays
const cookieUses = [
  {
    icon: "🎯",
    title: "Personalization",
    description: "Remember your preferences and settings",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Understand how you interact with our site",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Improve site speed and functionality",
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Protect your data and prevent fraud",
  },
];

const cookieTypes = [
  {
    name: "Session Cookies",
    description: "Temporary cookies that expire when you close your browser. Used to maintain your session as you navigate our site.",
    duration: "Session",
  },
  {
    name: "Persistent Cookies",
    description: "Remain on your device until they expire or you delete them. Used to remember your preferences for future visits.",
    duration: "Up to 2 years",
  },
  {
    name: "First-Party Cookies",
    description: "Set directly by our website to provide core functionality and remember your choices.",
    duration: "Varies",
  },
  {
    name: "Third-Party Cookies",
    description: "Set by external services we use, such as analytics providers and payment processors.",
    duration: "Varies by provider",
  },
];