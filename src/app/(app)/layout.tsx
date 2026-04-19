import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

import "./globals.css";

import Providers from "@/components/providers";
import Footer from "@/components/shared/Footer/footer";
import Navbar from "@/components/shared/Header/navbar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codezora | Your Growth, Our Mission",
  description:
    "Codezora is a digital agency that provides powerful digital solutions that fuel business growth. From innovative websites to data-driven marketing — we turn your vision into results.",
  keywords: [
    "Codezora",
    "Digital Agency",
    "Websites",
    "Marketing",
    "Business Growth",
  ],
  authors: [{ name: "Codezora" }],
  creator: "Codezora",
  publisher: "Codezora",
  openGraph: {
    title: "Codezora | Your Growth, Our Mission",
    description:
      "Codezora is a digital agency that provides powerful digital solutions that fuel business growth. From innovative websites to data-driven marketing — we turn your vision into results.",
    url: "https://codezora.com",
    siteName: "Codezora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codezora | Your Growth, Our Mission",
    description:
      "Codezora is a digital agency that provides powerful digital solutions that fuel business growth. From innovative websites to data-driven marketing — we turn your vision into results.",
    creator: "@codezora",
    images: ["https://codezora.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full")}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} min-h-full flex flex-col antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 px-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
