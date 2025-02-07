"use client";

import { motion } from "framer-motion";

const AnimatedButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-opacity-80 transition"
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
