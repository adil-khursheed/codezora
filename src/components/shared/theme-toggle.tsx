"use client";

import React, { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { Moon02Icon, SunIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "../ui/button";

const emptySubscribe = () => () => {};

const ThemeToggle = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  const toggleTheme = async () => {
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }).ready;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      ref={ref}
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <HugeiconsIcon icon={SunIcon} className="size-4 text-primary" />
      ) : (
        <HugeiconsIcon icon={Moon02Icon} className="size-4 text-primary" />
      )}

      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ThemeToggle;
