import Link from "next/link";

import { ImageIcon } from "./svg-icons";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <ImageIcon className="h-6 w-6" />
        <span className="sr-only">WebP Converter</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimonials
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
