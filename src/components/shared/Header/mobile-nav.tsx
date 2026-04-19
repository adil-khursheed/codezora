"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight03Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import NavLink from "./nav-link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer direction="top" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant={"glass"} size={"icon-lg"}>
            <HugeiconsIcon icon={Menu01Icon} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="before:rounded-2xl">
          <DrawerHeader className="group-data-[vaul-drawer-direction=top]/drawer-content:text-left flex-row items-center justify-between">
            <DrawerTitle>
              <Logo />
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Navigation menu for small devices
            </DrawerDescription>

            <DrawerClose>
              <HugeiconsIcon icon={Cancel01Icon} />
            </DrawerClose>
          </DrawerHeader>

          <ul className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <DrawerFooter>
            <Link
              href={"/contact"}
              className={cn(
                buttonVariants({ variant: "glass", size: "xl" }),
                "gap-2.5",
              )}
            >
              Contact us
              <span>
                <HugeiconsIcon icon={ArrowUpRight03Icon} />
              </span>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
