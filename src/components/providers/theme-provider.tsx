"use client";

import React from "react";
import { ThemeProvider, useTheme } from "next-themes";

import { env } from "@/env";
import { Toaster } from "../ui/sonner";

const ThemeClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      defaultTheme="dark"
      attribute="class"
      disableTransitionOnChange
      storageKey={`${env.NEXT_PUBLIC_SITE_NAME}-theme`}
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
};

export default ThemeClientProvider;

function ToastProvider() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      richColors
      closeButton
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
