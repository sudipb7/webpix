"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DownloadIcon, UploadIcon } from "@/components/svg-icons";
import { convertImages } from "@/actions/conversion-module";

export interface ConvertedFile {
  originalName: string;
  convertedName: string;
  size: number;
  webpBuffer: string;
}

export interface ConversionResult {
  message: string;
  files: ConvertedFile[];
}

export function ConverterForm() {
  const [files, setFiles] = React.useState<File[]>([]);
  const [previews, setPreviews] = React.useState<string[]>([]);
  const [convertedFiles, setConvertedFiles] = React.useState<ConvertedFile[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);

      const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(newPreviews);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (files.length === 0) {
      toast.error("Please select an image to convert");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    try {
      const result = await convertImages(formData);
      setConvertedFiles(result.files);
      toast(result.message);
    } catch (err) {
      toast.error("An error occurred while converting the images");
    } finally {
      setFiles([]);
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    convertedFiles.forEach((file) => {
      const link = document.createElement("a");
      link.href = `data:image/webp;base64,${file.webpBuffer}`;
      link.download = file.convertedName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const onDropZoneClicked = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.style.display = "none";
    // @ts-ignore
    input.onchange = handleFileChange;
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  return (
    <section
      id="convert"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
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
            {convertedFiles.length === 0 && (
              <form
                onSubmit={handleSubmit}
                className="block w-full max-w-md space-y-4"
              >
                {files.length === 0 ? (
                  <div>
                    <div
                      aria-disabled={isLoading}
                      onClick={onDropZoneClicked}
                      className="flex flex-col items-center justify-center cursor-default gap-4 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-8 text-muted-foreground transition-colors hover:border-muted-foreground h-52 md:h-64"
                    >
                      <UploadIcon className="h-8 w-8" />
                      <p>Drag and drop your image here or click to select a file.</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                      <div className="flex gap-3.5 items-center">
                        {files.map((file, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index + 1}`}
                            className="mx-auto w-[150px] h-[150px] aspect-[4/3] overflow-hidden rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {files.length > 0 && (
                  <div className="space-x-3.5">
                    <Button
                      type="submit"
                      disabled={isLoading}
                    >
                      Convert to WebP
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => setFiles([])}
                      variant="destructive"
                    >
                      Remove Images
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </form>
            )}
            {convertedFiles.length > 0 && (
              <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                  <div className="flex gap-3.5 items-center">
                    {convertedFiles.map((convertedFile, index) => (
                      <img
                        key={index}
                        src={`data:image/webp;base64,${convertedFile.webpBuffer}`}
                        alt={`Converted ${index + 1}`}
                        className="mx-auto w-[150px] h-[150px] aspect-[4/3] overflow-hidden rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3.5">
                  <Button onClick={handleDownload}>
                    Download WebP
                    <DownloadIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => setConvertedFiles([])}
                    variant="destructive"
                  >
                    Clear
                    <DownloadIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
