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

// Data Arrays
const partnershipModels = [
  { id: "corporate", title: "Corporate Order Agents", icon: "🏢", shortDesc: "Earn commissions on bulk orders", discount: "15-25% commission" },
  { id: "franchise", title: "Franchise Partners", icon: "🏪", shortDesc: "Own a Bandan Sweets store", discount: "30% margin" },
  { id: "online", title: "Online & Affiliate", icon: "🛒", shortDesc: "Promote & earn commissions", discount: "10-15% commission" },
  { id: "reseller", title: "Reseller Partners", icon: "📦", shortDesc: "Bulk purchasing & distribution", discount: "30-45% off MRP" },
];

const partnerProcess = [
  { icon: "📝", title: "Apply Online", description: "Submit your application form" },
  { icon: "📞", title: "Initial Discussion", description: "Our team contacts you within 48 hrs" },
  { icon: "📄", title: "Agreement Signing", description: "Review and sign partnership agreement" },
  { icon: "🎓", title: "Training & Onboarding", description: "Get trained on products and processes" },
  { icon: "🚀", title: "Start Partnering", description: "Begin earning and growing together" },
];

const creativePartnerships = [
  { icon: "🎨", title: "Event Collaborations", description: "Partner for weddings, corporate events, and festivals as our official sweet partner", benefit: "Cross-promotion & revenue share" },
  { icon: "📱", title: "Influencer Partnerships", description: "Content creators and food bloggers promoting Bandan Sweets to their audience", benefit: "Free products + commission" },
  { icon: "🎯", title: "Loyalty Program Partners", description: "Hotels, restaurants, and cafes featuring Bandan Sweets as part of their offerings", benefit: "Wholesale pricing + exclusivity" },
  { icon: "🌿", title: "Ingredient Suppliers", description: "Premium ingredient suppliers partnering for consistent quality", benefit: "Long-term supply contracts" },
  { icon: "📦", title: "Logistics Partners", description: "Courier and delivery partners for pan-India shipping", benefit: "Volume-based contracts" },
  { icon: "💳", title: "Corporate Gifting Platforms", description: "Integration with corporate gifting marketplaces and platforms", benefit: "API access + bulk discounts" },
];

const discountTiers = [
  { type: "Corporate Agent", baseDiscount: "15% commission", volumeBonus: "+5% for 100+ orders", benefits: "Monthly bonuses" },
  { type: "Franchise", baseDiscount: "30% margin", volumeBonus: "Tiered inventory pricing", benefits: "Territory exclusivity" },
  { type: "Affiliate", baseDiscount: "10% commission", volumeBonus: "+2-5% based on sales", benefits: "Promo codes + incentives" },
  { type: "Reseller", baseDiscount: "30% off MRP", volumeBonus: "Up to 45% off", benefits: "Drop shipping support" },
];

const partnerTestimonials = [
  { text: "Being a corporate agent for Bandan Sweets has been incredibly rewarding. The commission structure is transparent and payments are always on time.", name: "Rajesh Kumar", role: "Corporate Agent, Delhi", icon: "👨‍💼" },
  { text: "The affiliate program is fantastic! I've been promoting Bandan Sweets on my food blog and the conversions are great. My audience loves the quality.", name: "Meera Sharma", role: "Food Blogger, Mumbai", icon: "👩‍🍳" },
  { text: "Opening a Bandan Sweets franchise was the best decision. The brand recognition and support from the central team has been exceptional.", name: "Amit Patel", role: "Franchise Owner, Ahmedabad", icon: "🏪" },
];

const partnerFaqs = [
  { question: "Is there any fee to become a partner?", answer: "Corporate agents and affiliates pay no joining fee. Franchise and reseller partnerships have nominal one-time fees." },
  { question: "How soon do I receive commissions?", answer: "Commissions are processed monthly and paid within 15 days of month-end via bank transfer." },
  { question: "Can I combine multiple partnership models?", answer: "Yes! Many partners start as affiliates and later become resellers or franchise owners." },
  { question: "Do you provide marketing materials?", answer: "Yes, all partners receive access to our partner portal with marketing collateral, product images, and promotional content." },
  { question: "What support do franchise partners receive?", answer: "Complete support including site selection, store setup, staff training, marketing, and ongoing operational guidance." },
];

export default function PartnersPage() {
  const [activePartnership, setActivePartnership] = useState("corporate");

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
            Grow With Us
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-6"
          >
            Partnership Opportunities
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            Join hands with Bandan Sweets and unlock exclusive benefits, discounted pricing, and growth opportunities
          </motion.p>
        </motion.div>
      </section>

      {/* Partnership Models Overview */}
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
              Choose Your Partnership Model
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4 max-w-2xl mx-auto"
            >
              Four ways to partner with us, each designed for different business goals
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {partnershipModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-black/10 rounded-2xl p-6 text-center hover:border-black/30 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setActivePartnership(model.id)}
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-heading text-black mb-2">{model.title}</h3>
                <p className="text-black/50 text-xs">{model.shortDesc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-black/5 rounded-full text-xs text-black/60">
                  {model.discount}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Partnership Sections */}
      <section className="px-6 py-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          {activePartnership === "corporate" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="text-6xl mb-4">🏢</div>
                <h2 className="text-3xl font-heading text-black mb-4">Corporate Order Agents</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-4">
                  Become an authorized corporate agent and earn commissions on every bulk order you bring. 
                  Perfect for event planners, procurement professionals, and B2B sales experts.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>15-20% commission on every order</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Dedicated account manager support</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Marketing collateral and samples provided</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Monthly performance bonuses</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border border-black/10">
                  <div className="text-sm font-heading text-black mb-2">Discounted Pricing for Agents:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Standard: 10% off MRP</span>
                    <span>Premium: 15% off MRP</span>
                    <span>Bulk (100+): 20% off MRP</span>
                    <span>Bulk (500+): 25% off MRP</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <h3 className="text-xl font-heading text-black mb-4">Apply as Corporate Agent</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Company Name (if any)" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <textarea placeholder="Tell us about your experience in B2B sales/event planning" rows={3} className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black resize-none" />
                  <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all">
                    Submit Application →
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activePartnership === "franchise" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="text-6xl mb-4">🏪</div>
                <h2 className="text-3xl font-heading text-black mb-4">Franchise Partners</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-4">
                  Own a Bandan Sweets franchise and bring our premium sweets to your city. 
                  Complete operational support, training, and marketing assistance provided.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Low investment, high returns model</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Comprehensive training and onboarding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Centralized production and supply chain</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>National brand marketing support</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border border-black/10">
                  <div className="text-sm font-heading text-black mb-2">Franchise Benefits:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Inventory: 30% margin</span>
                    <span>Exclusive territory rights</span>
                    <span>Bulk supply at wholesale rates</span>
                    <span>Seasonal promotional support</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <h3 className="text-xl font-heading text-black mb-4">Franchise Inquiry</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Preferred City/Location" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Estimated Investment Capacity" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all">
                    Request Franchise Kit →
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activePartnership === "online" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-3xl font-heading text-black mb-4">Online Partners & Affiliates</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-4">
                  Join our affiliate program and earn commissions by promoting Bandan Sweets 
                  on your website, blog, or social media. Perfect for influencers, content creators, and e-commerce platforms.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>10-15% commission on every sale</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Dedicated affiliate dashboard and tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Monthly payouts via bank transfer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Exclusive promo codes for your audience</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border border-black/10">
                  <div className="text-sm font-heading text-black mb-2">Affiliate Tiers:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Starter: 10% commission</span>
                    <span>Pro (50+ sales/mo): 12%</span>
                    <span>Elite (200+ sales/mo): 15%</span>
                    <span>Bonus: ₹5,000/month incentive</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <h3 className="text-xl font-heading text-black mb-4">Join Affiliate Program</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Website/Social Media Handle" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Monthly Audience Reach" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all">
                    Start Earning →
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activePartnership === "reseller" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <div className="text-6xl mb-4">📦</div>
                <h2 className="text-3xl font-heading text-black mb-4">Reseller & Distribution Partners</h2>
                <div className="w-16 h-0.5 bg-black/30 mb-6" />
                <p className="text-black/70 leading-relaxed mb-4">
                  Become an authorized reseller and distribute Bandan Sweets products through your 
                  retail network. Ideal for existing sweet shops, gift stores, and hospitality businesses.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Wholesale pricing at 30-40% off MRP</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Pan-India drop shipping support</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>No minimum order quantity for resellers</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600">✓</span> <span>Priority restocking and seasonal collections</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border border-black/10">
                  <div className="text-sm font-heading text-black mb-2">Reseller Pricing Tiers:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Monthly order ₹25k+: 30% off</span>
                    <span>Monthly order ₹50k+: 35% off</span>
                    <span>Monthly order ₹1L+: 40% off</span>
                    <span>Annual contract: 45% off</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-black/10">
                <h3 className="text-xl font-heading text-black mb-4">Become a Reseller</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Store/Business Name" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="Owner Name" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <input type="text" placeholder="City & State" className="w-full px-4 py-2 border border-black/20 rounded-lg focus:outline-none focus:border-black" />
                  <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black/90 transition-all">
                    Apply for Reseller Account →
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Partnership Process Flowchart */}
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
              How to Become a Partner
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              A simple 5-step journey to partnership
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              {partnerProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/20 text-black text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-heading text-black text-sm mt-3">{step.title}</h3>
                  <p className="text-black/50 text-xs mt-1 px-2">{step.description}</p>
                  {index < partnerProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-2 text-black/30 text-xl">→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden mt-8 space-y-6">
            {partnerProcess.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="font-heading text-black">{step.title}</div>
                  <div className="text-black/50 text-xs">{step.description}</div>
                </div>
                {index < partnerProcess.length - 1 && (
                  <div className="absolute left-6 mt-10 text-black/30">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Creative Partnerships */}
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
              Creative Partnership Opportunities
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
            <motion.p
              variants={fadeInUp}
              className="text-black/60 mt-4"
            >
              Unique ways to collaborate with Bandan Sweets
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {creativePartnerships.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{partnership.icon}</div>
                <h3 className="text-xl font-heading text-black mb-2">{partnership.title}</h3>
                <p className="text-black/60 text-sm mb-4">{partnership.description}</p>
                <div className="text-xs text-black/40">{partnership.benefit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Tiers Overview */}
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
              Partner Discount Structure
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black/20">
                  <th className="text-left py-4 px-4 font-heading text-black">Partner Type</th>
                  <th className="text-left py-4 px-4 font-heading text-black">Base Discount</th>
                  <th className="text-left py-4 px-4 font-heading text-black">Volume Bonus</th>
                  <th className="text-left py-4 px-4 font-heading text-black">Special Benefits</th>
                </tr>
              </thead>
              <tbody>
                {discountTiers.map((tier, index) => (
                  <motion.tr
                    key={tier.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-black/10"
                  >
                    <td className="py-4 px-4 font-medium text-black">{tier.type}</td>
                    <td className="py-4 px-4 text-black/70">{tier.baseDiscount}</td>
                    <td className="py-4 px-4 text-black/70">{tier.volumeBonus}</td>
                    <td className="py-4 px-4 text-black/70">{tier.benefits}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials from Partners */}
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
              What Our Partners Say
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-20 h-0.5 bg-black/30 mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-6"
              >
                <div className="text-black/30 text-3xl mb-3">"</div>
                <p className="text-black/70 text-sm mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.icon}</div>
                  <div>
                    <div className="font-heading text-black text-sm">{testimonial.name}</div>
                    <div className="text-black/40 text-xs">{testimonial.role}</div>
                  </div>
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
            {partnerFaqs.map((faq, index) => (
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

      {/* Final CTA */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Ready to Grow Together?
          </h2>
          <p className="text-white/70 mb-8">
            Take the first step towards a profitable partnership with Bandan Sweets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all"
            >
              💬 WhatsApp Partnership Desk
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              📧 Email Partnership Team
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}