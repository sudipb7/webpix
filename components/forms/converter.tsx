import { Button } from "@/components/ui/button";
import { DownloadIcon, UploadIcon } from "@/components/svg-icons";

export function ConverterForm() {
  return (
    <section
      id="convert"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Convert Your Images to WebP
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simply drag and drop your image or click to select a file, and our converter will
              instantly generate a high-quality WebP version for you to download.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-8 text-muted-foreground transition-colors hover:border-muted-foreground">
                <UploadIcon className="h-8 w-8" />
                <p>Drag and drop your image here or click to select a file.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                <div className="bg-blue-300 mx-auto w-[400px] h-[300px] aspect-[4/3] overflow-hidden rounded-lg object-cover" />
                <div className="flex items-center gap-2">
                  <Button variant="outline">
                    Download WebP
                    <DownloadIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
