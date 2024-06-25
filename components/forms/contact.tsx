import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or need help with our image converter tool? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Name"
              className="max-w-lg flex-1"
            />
            <Input
              type="email"
              placeholder="Email"
              className="max-w-lg flex-1"
            />
            <Textarea
              placeholder="Message"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
