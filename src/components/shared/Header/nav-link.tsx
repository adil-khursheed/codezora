"use client";

import { useState, type ComponentProps } from "react";
import Link from "next/link";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface NavLinkProps extends ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn("relative pb-1", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-primary w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isHovered ? 0 : 1 }}
      />
    </Link>
  );
};

export default NavLink;
