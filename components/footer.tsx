import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-3.5 py-5 w-full items-center container">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        2021 © WebPic by
        <Link
          href="https://x.com/sudipbiswas_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline transform"
        >
          @sudipbiswas
        </Link>
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-6">
        <Link
          href="/about"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms and Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <Link
          href="/refund-policy"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Refund Policy
        </Link>
      </nav>
    </footer>
  );
}
