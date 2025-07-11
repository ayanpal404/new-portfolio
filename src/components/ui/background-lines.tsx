"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full", // Removed background colors
        className
      )}
    >
      <SVG svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  // Generate paths that emanate from center (where the image will be)
  const generateRadialPaths = () => {
    const paths = [];
    const centerX = 720; // Center of viewBox
    const centerY = 450;
    const numPaths = 20;
    
    for (let i = 0; i < numPaths; i++) {
      const angle = (i / numPaths) * Math.PI * 2;
      const length = 300 + Math.random() * 200;
      const curvature = 50 + Math.random() * 100;
      
      // Create curved paths emanating from center
      const endX = centerX + Math.cos(angle) * length;
      const endY = centerY + Math.sin(angle) * length;
      
      // Add some curves for organic feel
      const cp1X = centerX + Math.cos(angle) * (length * 0.3) + Math.random() * curvature - curvature/2;
      const cp1Y = centerY + Math.sin(angle) * (length * 0.3) + Math.random() * curvature - curvature/2;
      const cp2X = centerX + Math.cos(angle) * (length * 0.7) + Math.random() * curvature - curvature/2;
      const cp2Y = centerY + Math.sin(angle) * (length * 0.7) + Math.random() * curvature - curvature/2;
      
      paths.push(`M${centerX} ${centerY} C${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`);
    }
    
    return paths;
  };

  const paths = generateRadialPaths();

  const colors = [
    "#46A5CA",
    "#8C2F2F",
    "#4FAE4D",
    "#D6590C",
    "#811010",
    "#247AFB",
    "#A534A0",
    "#A8A438",
    "#D6590C",
    "#46A29C",
    "#670F6D",
    "#D7C200",
    "#59BBEB",
    "#504F1C",
    "#55BC54",
    "#4D3568",
    "#9F39A5",
    "#363636",
    "#860909",
    "#6A286F",
    "#604483",
  ];

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 5 + 2,
          }}
          key={`path-first-${idx}`}
        />
      ))}

      {/* Second set with different timing */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 3 + 2,
            repeatDelay: Math.random() * 3 + 1,
          }}
          key={`path-second-${idx}`}
        />
      ))}
    </motion.svg>
  );
};