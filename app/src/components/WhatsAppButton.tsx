"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          href="https://wa.me/919818150911"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.031 2.002c-5.517 0-9.998 4.481-9.998 9.997 0 1.75.453 3.467 1.31 4.996L2.023 22.02l5.232-1.322c1.48.85 3.155 1.3 4.867 1.3 5.516 0 9.997-4.481 9.997-9.997s-4.481-9.998-9.997-9.998zm0 18.394c-1.492 0-2.956-.403-4.225-1.157l-.303-.18-3.107.785.83-3.028-.197-.313c-.821-1.299-1.255-2.8-1.255-4.343 0-4.603 3.746-8.349 8.349-8.349s8.349 3.746 8.349 8.349-3.746 8.349-8.349 8.349z"/>
            <path d="M17.063 13.929c-.223-.112-1.319-.651-1.523-.725-.204-.074-.353-.112-.501.112-.149.224-.576.725-.706.874-.13.149-.26.168-.483.056-.223-.112-.943-.347-1.796-1.108-.664-.592-1.112-1.322-1.242-1.546-.13-.224-.014-.345.098-.456.1-.1.223-.261.335-.391.112-.13.149-.224.224-.373.074-.149.037-.28-.019-.392-.056-.112-.501-1.206-.686-1.65-.18-.428-.363-.37-.501-.374-.13-.003-.279-.003-.428-.003-.149 0-.391.056-.595.28-.204.224-.78.761-.78 1.857s.799 2.154.91 2.303c.112.149 1.573 2.401 3.81 3.366.532.23 1.005.367 1.35.47.567.18 1.083.155 1.491.094.455-.067 1.319-.539 1.504-1.06.185-.521.185-.967.13-1.06-.056-.093-.205-.149-.428-.261z"/>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}