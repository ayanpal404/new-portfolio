"use client";

import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
