import * as React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "WebPx - Image Optimization Tool",
  description: "Compress your images with the best quality and smallest size.",
  keywords: ["webpx", "image", "optimization", "tool", "compress", "quality", "smallest", "size"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen antialiased", GeistMono.variable, GeistSans.variable)}>
        <ThemeProvider
          attribute="class"
          storageKey="webpx-theme"
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
