"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All", icon: "🍬" },
    { id: "traditional", name: "Traditional", icon: "🪔" },
    { id: "premium", name: "Premium", icon: "✨" },
    { id: "gift-hampers", name: "Gift Hampers", icon: "🎁" },
    { id: "festival-special", name: "Festival Special", icon: "🎉" },
  ];

  const products = [
    // Traditional Sweets
    { id: 1, name: "Kaju Katli", category: "traditional", price: "₹499", originalPrice: "₹599", weight: "250g", icon: "🍬", badge: "Bestseller", description: "Classic diamond-shaped cashew fudge", inStock: true },
    { id: 2, name: "Gulab Jamun", category: "traditional", price: "₹349", originalPrice: "₹449", weight: "6 pcs", icon: "🍡", badge: null, description: "Soft, spongy milk dumplings in sugar syrup", inStock: true },
    { id: 3, name: "Rasgulla", category: "traditional", price: "₹299", originalPrice: "₹399", weight: "6 pcs", icon: "⚪", badge: null, description: "Spongy cottage cheese balls in light syrup", inStock: true },
    { id: 4, name: "Soan Papdi", category: "traditional", price: "₹399", originalPrice: "₹499", weight: "250g", icon: "🍯", badge: "Festival Fav", description: "Flaky, melt-in-mouth sweet", inStock: true },
    { id: 5, name: "Motichoor Ladoo", category: "traditional", price: "₹449", originalPrice: "₹549", weight: "250g", icon: "🟡", badge: null, description: "Tiny gram flour pearls bound with sugar", inStock: true },
    { id: 6, name: "Peda", category: "traditional", price: "₹299", originalPrice: "₹399", weight: "6 pcs", icon: "🍪", badge: null, description: "Saffron-infused milk solid delights", inStock: true },
    
    // Premium Sweets
    { id: 7, name: "Gold Leaf Peda", category: "premium", price: "₹999", originalPrice: "₹1,499", weight: "6 pcs", icon: "✨", badge: "Premium", description: "Velvety pedas adorned with 24k gold leaf", inStock: true },
    { id: 8, name: "Royal Kaju Roll", category: "premium", price: "₹1,199", originalPrice: "₹1,699", weight: "250g", icon: "👑", badge: "Premium", description: "Cashew rolls with silver leaf and pistachio", inStock: true },
    { id: 9, name: "Saffron Malai Roll", category: "premium", price: "₹899", originalPrice: "₹1,299", weight: "250g", icon: "🌿", badge: "Limited", description: "Creamy rolls with pure saffron", inStock: true },
    { id: 10, name: "Anjeer Dry Fruit Roll", category: "premium", price: "₹1,099", originalPrice: "₹1,599", weight: "250g", icon: "🥜", badge: "Premium", description: "Fig and dry fruit delight", inStock: false },
    
    // Gift Hampers
    { id: 11, name: "Celebration Hamper", category: "gift-hampers", price: "₹2,499", originalPrice: "₹3,499", weight: "Assorted", icon: "🎁", badge: "Bestseller", description: "Assorted premium sweets + dry fruits", inStock: true },
    { id: 12, name: "Luxury Gift Box", category: "gift-hampers", price: "₹4,999", originalPrice: "₹6,999", weight: "Assorted", icon: "💎", badge: "Limited", description: "Gold leaf sweets + wooden box + personalized note", inStock: true },
    { id: 13, name: "Diwali Delight", category: "gift-hampers", price: "₹3,499", originalPrice: "₹4,999", weight: "Assorted", icon: "🪔", badge: "Festival", description: "Festive special assortment", inStock: true },
    
    // Festival Special
    { id: 14, name: "Rakhi Special", category: "festival-special", price: "₹1,499", originalPrice: "₹2,199", weight: "Assorted", icon: "🧵", badge: "Festival", description: "Sweet box with rakhi thread", inStock: true },
    { id: 15, name: "Diwali Dry Fruit Tray", category: "festival-special", price: "₹2,999", originalPrice: "₹4,499", weight: "500g", icon: "🥨", badge: "Festival", description: "Premium dry fruits + sweets", inStock: true },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="bg-white text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center bg-white overflow-hidden">
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
            Crafted With Love
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-heading text-black mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-0.5 bg-black/30 mx-auto"
          />
          <motion.p
            variants={fadeInUp}
            className="text-black/60 text-md mt-4 max-w-xl mx-auto"
          >
            Traditional recipes. Premium ingredients. Unforgettable taste.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pt-8 pb-4 bg-white sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-1 ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "border border-black/20 text-black hover:bg-black/5"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Results count */}
          <div className="text-sm text-black/50 mb-6 text-center">
            Showing {filteredProducts.length} products
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative bg-white border border-black/10 rounded-2xl overflow-hidden hover:border-black/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.badge === "Premium" ? "bg-black text-white" :
                      product.badge === "Bestseller" ? "bg-amber-500 text-white" :
                      product.badge === "Limited" ? "bg-red-500 text-white" :
                      product.badge === "Festival" ? "bg-orange-500 text-white" :
                      "bg-black/80 text-white"
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Out of stock overlay */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Out of Stock</span>
                  </div>
                )}

                {/* Product Image/Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
                  <motion.div 
                    className="text-7xl"
                    animate={hoveredProduct === product.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.icon}
                  </motion.div>
                  
                  {/* Quick action buttons */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                      ❤️
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-black text-lg leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-black/40 text-xs">{product.weight}</span>
                  </div>
                  
                  <p className="text-black/50 text-xs mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-black font-semibold text-xl">
                      {product.price}
                    </span>
                    <span className="text-black/40 text-sm line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-green-600 text-xs ml-auto">
                      {Math.round((1 - parseInt(product.price.replace(/[^0-9]/g, '')) / parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% off
                    </span>
                  </div>

                  {/* Order Button */}
                  <a
                    href={`https://wa.me/919818150911?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(${product.weight})%20-%20${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-all group-hover:shadow-md"
                  >
                    <span>📱</span> Order on WhatsApp
                  </a>

                  {/* Personalisation option */}
                  <Link
                    href={`/personalised-gifting`}
                    className="w-full flex items-center justify-center gap-1 mt-2 text-black/50 text-xs hover:text-black transition-colors"
                  >
                    <span>✨</span> Customise this gift
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍬</div>
              <h3 className="text-xl font-heading text-black mb-2">No products found</h3>
              <p className="text-black/60">Try selecting a different category</p>
              <button 
                onClick={() => setSelectedCategory("all")}
                className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="px-6 py-12 bg-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-black/10"
          >
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-2xl font-heading text-black mb-2">Need Bulk Quantities?</h3>
            <p className="text-black/60 text-sm mb-4">
              Corporate orders, wedding favors, or festival gifting? Contact our bulk desk for special pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919818150911"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-black/90 transition-all"
              >
                💬 WhatsApp Bulk Desk
              </a>
              <Link
                href="/corporate-gifting"
                className="inline-block border border-black/30 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all"
              >
                View Corporate Gifting →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <div className="font-heading text-black text-sm">{feature.title}</div>
                <div className="text-black/40 text-xs">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Note */}
      <section className="px-6 py-8 bg-black/5 text-center">
        <p className="text-black/50 text-sm">
          🎁 <span className="font-semibold">Don't see what you're looking for?</span> We create custom sweet boxes for any occasion. 
          <Link href="/contact" className="text-black underline ml-1">Contact us</Link>
        </p>
      </section>
    </main>
  );
}

const features = [
  { icon: "🚚", title: "Free Delivery", description: "On orders above ₹2,000" },
  { icon: "✨", title: "Premium Quality", description: "Pure ingredients" },
  { icon: "🎁", title: "Gift Ready", description: "Elegant packaging" },
  { icon: "💬", title: "24/7 Support", description: "WhatsApp assistance" },
];