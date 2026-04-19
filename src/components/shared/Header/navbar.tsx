import { Suspense } from "react";
import Link from "next/link";

import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as motion from "motion/react-client";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import MobileNav from "./mobile-nav";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 h-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 1, width: "30%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-7xl w-full mx-auto flex items-center justify-between px-2 h-16 rounded-full glassmorphism"
      >
        <Link href={"/"} className="flex items-center gap-2 ml-4 flex-col">
          <Logo className="size-8 fill-primary" />
        </Link>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hidden md:flex"
        >
          <ul className="flex items-center gap-6 text-sm tracking-wider">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <NavLink href={link.href}>{link.label}</NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <div className="flex items-center gap-6">
          <Suspense fallback={null}>
            <ThemeToggle />
          </Suspense>
          <Link
            href={"/contact"}
            className={cn(
              buttonVariants({ variant: "glass", size: "xl" }),
              "gap-2.5 hidden md:flex",
            )}
          >
            Contact us
            <span>
              <HugeiconsIcon icon={ArrowUpRight03Icon} />
            </span>
          </Link>

          <MobileNav />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
