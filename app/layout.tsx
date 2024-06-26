import * as React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains_mono",
});

export const metadata: Metadata = {
  title: "Webpics - Image to WebP Converter",
  description:
    "Convert images to WebP format with ease. Webpics is a free online tool that allows you to convert images to WebP format.",
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
          storageKey="webpics-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
