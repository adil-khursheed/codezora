import React from "react";
import Link from "next/link";

import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as motion from "motion/react-client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroCanvas from "./hero-canvas";

const Hero = () => {
  return (
    <div className="max-w-7xl w-full h-full mx-auto flex items-center justify-center py-10 px-5">
      <div className="flex-1 flex flex-col justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            variant="outline"
            className="glassmorphism h-10 px-5 text-xs/relaxed"
          >
            Your Growth, Our Mission
          </Badge>
        </motion.div>

        <motion.h1 className="text-3xl md:text-5xl font-bold text-primary">
          {"Empowering Your Business Through Digital Innovation"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={word + index}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                {word}{" "}
              </motion.span>
            ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
          className="text-lg text-muted-foreground md:text-xl max-w-4xl tracking-wide leading-tight"
        >
          Powerful digital solutions that fuel business growth. From innovative
          websites to data-driven marketing — we turn your vision into results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2, ease: "easeInOut" }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "glass", size: "xl" }),
              "pr-2 gap-3 group/btn",
            )}
          >
            <span>Choose a service</span>
            <span className="size-8 flex items-center justify-center glassmorphism rounded-full group-hover/btn:rotate-130 transition-transform duration-300">
              <HugeiconsIcon icon={ArrowUpRight03Icon} />
            </span>
          </Link>

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "glass", size: "xl" }),
              "pr-2 gap-3 group/quote",
            )}
          >
            <span>Get a quote</span>
            <span className="size-8 flex items-center justify-center glassmorphism rounded-full group-hover/quote:rotate-360 transition-transform duration-300">
              <HugeiconsIcon icon={ArrowUpRight03Icon} />
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="flex-1 flex">
        <HeroCanvas />
      </div>
    </div>
  );
};

export default Hero;
