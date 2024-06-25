import Link from "next/link";
import Image from "next/image";

import { ContactForm } from "@/components/forms/contact";
import { CheckIcon, XIcon } from "@/components/svg-icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="container mx-auto py-12 md:py-24 lg:py-32">
        <div className="space-y-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
              Convert Images to WebP Format
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              Easily convert your images to WebP format to reduce file size and improve website
              performance.
            </p>
            <div className="flex items-center justify-center gap-3.5">
              <Button
                asChild
                className="px-8"
              >
                <Link href="/convert">Get Started</Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="px-8"
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/hero.webp"
            alt="Convert Images to WebP Format"
            width={1200}
            height={800}
            className="mx-auto rounded-lg shadow-lg max-w-5xl"
          />
        </div>
      </section>
      <section
        id="features"
        className="mx-auto py-12 md:py-24 lg:py-32 bg-muted min-h-[85dvh] grid place-items-center"
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-center">
                Convert Images to WebP in Seconds
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                Our image converter tool makes it easy to convert your images to the WebP format,
                reducing file size and improving website performance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto bg-secondary-foreground aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            <div>
              <ul className="grid gap-2.5">
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Instant Conversion</h3>
                    <p className="text-muted-foreground">
                      Convert your images to WebP format in just a few seconds.
                    </p>
                  </div>
                </li>
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Batch Processing</h3>
                    <p className="text-muted-foreground">
                      Convert multiple images at once to save time.
                    </p>
                  </div>
                </li>
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Lossless Compression</h3>
                    <p className="text-muted-foreground">
                      Reduce file size without sacrificing image quality.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="benefits"
        className="mx-auto py-12 md:py-24 lg:py-32 min-h-[70dvh] grid place-items-center"
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-center">
                Improve Website Performance with WebP
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                Converting your images to WebP format can help improve website performance and
                enhance the user experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto bg-secondary-foreground aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
            <div>
              <ul className="grid gap-2.5">
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Reduced File Size</h3>
                    <p className="text-muted-foreground">
                      WebP images are up to 34% smaller than JPEG and PNG files
                    </p>
                  </div>
                </li>
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Faster Loading Times</h3>
                    <p className="text-muted-foreground">
                      Smaller file sizes lead to faster loading times for your website.
                    </p>
                  </div>
                </li>
                <li className="hover:bg-white/10 rounded-lg transition-all ease-in cursor-pointer">
                  <div className="grid gap-1 p-3">
                    <h3 className="text-xl font-bold">Improved SEO</h3>
                    <p className="text-muted-foreground">
                      Faster loading websites are favored by search engines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="mx-auto py-12 md:py-24 lg:py-32 min-h-[65dvh] grid place-items-center"
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-center">
                Affordable Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                Our WebP conversion service is available at a low cost, making it accessible to
                individuals and businesses of all sizes.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>5 image conversions per day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Up to 5MB file size</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XIcon className="h-4 w-4 text-red-500" />
                    <span>No priority support</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link
                    href="#"
                    className="px-8"
                  >
                    Get Started
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$9</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Unlimited image conversions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Up to 20MB file size</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link
                    href="#"
                    className="px-8"
                  >
                    Get Pro Plan
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-muted-foreground">pricing</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Unlimited image conversions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Unlimited file size</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link
                    href="#"
                    className="px-8"
                  >
                    Contact Us
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
