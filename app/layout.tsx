import * as React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains_mono",
});

export const metadata: Metadata = {
  title: "Webpic - Image to WebP Converter",
  description:
    "Convert images to WebP format with ease. Webpic is a free online tool that allows you to convert images to WebP format.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen antialiased", jetbrains_mono.variable, GeistSans.variable)}>
        <ThemeProvider
          attribute="class"
          storageKey="webpic-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
