import Link from "next/link";

import { ContactForm } from "@/components/forms/contact";
import { ConverterForm } from "@/components/forms/converter";
import { CheckIcon, XIcon } from "@/components/svg-icons";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Convert Any Image to WebP in Seconds
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our powerful image converter allows you to quickly and easily convert your images
                  to the WebP format, which offers significantly smaller file sizes without
                  compromising quality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Convert Image
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </div>
            </div>
            <div className="w-[510px] bg-blue-300 h-[310px] mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"></div>
          </div>
        </div>
      </section>
      <ConverterForm />
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Convert Images to WebP in Seconds
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our image converter tool makes it easy to convert your images to the WebP format,
                reducing file size and improving website performance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="mx-auto bg-blue-300 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Instant Conversion</h3>
                    <p className="text-muted-foreground">
                      Convert your images to WebP format in just a few seconds.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Batch Processing</h3>
                    <p className="text-muted-foreground">
                      Convert multiple images at once to save time.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
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
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Benefits of WebP
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Improve Website Performance with WebP
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                WebP is a modern image format that offers superior compression compared to
                traditional formats like JPEG and PNG. By converting your images to WebP, you can
                significantly reduce file size and improve your website's loading speed.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4">
              <div className="mx-auto bg-blue-300 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
              <div className="mx-auto bg-blue-300 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Reduced File Size</h3>
                    <p className="text-muted-foreground">
                      WebP images are typically 25-34% smaller than JPEG images, and up to 26%
                      smaller than PNGs.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Faster Loading Times</h3>
                    <p className="text-muted-foreground">
                      Smaller file sizes mean faster page load times, improving the user experience
                      and reducing bounce rates.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Improved SEO</h3>
                    <p className="text-muted-foreground">
                      Faster loading times can lead to better search engine rankings and increased
                      visibility for your website.
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
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Affordable Pricing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our WebP conversion service is available at a low cost, making it accessible to
                individuals and businesses of all sizes.
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>10 image conversions per month</span>
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
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
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
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Pro
                </Link>
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
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Sales
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with our WebP conversion
                tool.
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="text-left">
                    <p className="text-muted-foreground">
                      "I was amazed at how quickly and easily I could convert my\n images to WebP
                      format using this tool. It's a game-changer\n for my website!"
                    </p>
                  </blockquote>
                  <div className="text-left">
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-muted-foreground">Web Developer</p>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="text-left">
                    <p className="text-muted-foreground">
                      "This WebP converter has saved me so much time and money.\n The quality of the
                      converted images is fantastic, and the\n process is incredibly simple."
                    </p>
                  </blockquote>
                  <div className="text-left">
                    <h4 className="font-bold">Sarah Miller</h4>
                    <p className="text-muted-foreground">Graphic Designer</p>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-between rounded-lg border border-input bg-background p-6 text-center shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="text-left">
                    <p className="text-muted-foreground">
                      "I was skeptical at first, but this WebP converter has exceeded all my
                      expectations. The spee
                    </p>
                  </blockquote>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
