"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // New state to handle mounting
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Check if the device has a mouse/fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    // Initial check
    if (mediaQuery.matches) setIsVisible(true);

    // Listener for window resizing/device switching
    const handler = (e: MediaQueryListEvent) => setIsVisible(e.matches);
    mediaQuery.addEventListener("change", handler);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      mediaQuery.removeEventListener("change", handler);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // If mobile or touch-only device, don't render anything
  if (!isVisible) return null;

  return (
    <>
      {/* 1. The Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-luxury-bronze rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. The Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-luxury-bronze/30 pointer-events-none z-[9998]"
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          backgroundColor: isHovering ? "rgba(238, 187, 77, 0.1)" : "rgba(238, 187, 77, 0)",
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}