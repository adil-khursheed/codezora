"use client";

import { useRef } from "react";

import { useMotionValue } from "motion/react";

import FooterSpotlight from "./footer-spotlight";
import NewsletterBlock from "./newsletter-block";
import QuickLinks from "./quick-links";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Position relative to container, centered on the spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    isHovering.set(1);
  };

  const handleMouseLeave = () => {
    isHovering.set(0);
  };
  return (
    <footer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-4"
    >
      <div className="max-w-7xl w-full mx-auto glassmorphism rounded-t-4xl p-4 lg:p-10 flex flex-col gap-10 pb-30 overflow-hidden">
        <NewsletterBlock />
        <QuickLinks />

        <div className="relative pt-16 -mb-[400px]">
          <FooterSpotlight
            isHovering={isHovering}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
