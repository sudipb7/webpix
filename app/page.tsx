import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { ImageConversionForm } from "@/components/forms/image-conversion";

export default function Home() {
  return (
    <>
      <header className="h-14 flex items-center justify-between container">
        <Link
          href="/"
          className="flex items-center justify-center font-mono font-bold"
          prefetch={false}
        >
          WebPics
          <span className="sr-only">WebP Converter</span>
        </Link>
        <ModeToggle />
      </header>
      <main className="relative max-w-[1440px] mx-auto">
        <section className="container mx-auto py-12 md:py-24 lg:py-32">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                  Convert images to WebP
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Convert your images to WebP format to reduce file size without compromising
                  quality.
                </p>
              </div>
              <ImageConversionForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex py-4 w-full items-center justify-center container">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          2024 © WebPics by
          <Link
            href="https://x.com/sudipbiswas_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline transform"
          >
            @sudipbiswas
          </Link>
        </p>
      </footer>
    </>
  );
}
