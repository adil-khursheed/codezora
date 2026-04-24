"use client";

import { motion, useSpring, type MotionValue } from "motion/react";

const FooterSpotlight = ({
  isHovering,
  mouseX,
  mouseY,
}: {
  isHovering: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  // Smooth spring animation for fluid spotlight movement
  const spotlightX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const spotlightY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  return (
    <div className="relative w-full aspect-1000/436 mask-[url(/codezora.svg)] mask-size-cover mask-no-repeat opacity-40">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/noise.png)] bg-repeat z-10"></div>
      <motion.div
        className="absolute size-180 rounded-full pointer-events-none"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
          opacity: isHovering,
          filter: "blur(100px)",
          background: `radial-gradient(circle at center, color-mix(in oklch, var(--color-primary) 30%, transparent), color-mix(in oklch, var(--color-primary) 20%, transparent) 50%, transparent 80%)`,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
    </div>
  );
};

export default FooterSpotlight;
