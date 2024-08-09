"use client";

import Image from "next/image";
import * as React from "react";
import { toast } from "sonner";
import { UploadIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";

import compressImage from "@/lib/action";
import { Button } from "@/components/ui/button";

interface FileWithPreview extends File {
  preview: string;
}

interface ConvertedFile {
  originalName: string;
  convertedName: string;
  size: number;
  convertedBuffer: string;
  mimeType: string;
}

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/svg+xml", "image/svg"];

export function ImageCompressorForm() {
  const [files, setFiles] = React.useState<FileWithPreview[]>([]);
  const [convertedFiles, setConvertedFiles] = React.useState<ConvertedFile[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ALLOWED_MIME_TYPES.reduce(
      (acc, mimeType) => {
        acc[mimeType] = [];
        return acc;
      },
      {} as Record<string, any>
    ),
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setConvertedFiles([]);
    },
  });

  const handleSubmit = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setConvertedFiles([]);

      if (files.length === 0) {
        toast.error("Please select an image to proceed");
        return;
      }

      if (files.length > 10) {
        toast.error("You can only upload up to 10 images at a time");
        return;
      }

      const formData = new FormData();
      files.forEach((file) => {
        formData.append("images", file, file.name);
      });

      const compressedFiles = await compressImage(formData);

      setConvertedFiles(compressedFiles);
      toast.success("Images compressed successfully");
    } catch (err) {
      toast.error("An error occurred while converting the images");
    } finally {
      setIsLoading(false);
    }
  }, [files]);

  const handleDownload = (file: any) => {
    const link = document.createElement("a");
    link.href = `data:${file.mimeType};base64,${file.convertedBuffer}`;
    link.download = file.convertedName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    convertedFiles.forEach((file) => {
      handleDownload(file);
    });
    setFiles([]);
    setConvertedFiles([]);
    toast.success("All images downloaded successfully");
  };

  React.useEffect(() => {
    // Clean up object URLs to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="w-full container">
      <div className="w-full max-w-md mx-auto">
        <div
          {...getRootProps({
            className:
              "flex flex-col items-center justify-center cursor-pointer gap-4 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-8 text-muted-foreground transition-colors hover:border-muted-foreground h-52 md:h-64 max-w-md mx-auto",
          })}
        >
          <input {...getInputProps()} />
          <UploadIcon className="h-8 w-8" />
          <div className="space-y-1">
            <p className="text-center">
              <span className="font-semibold">Click to upload</span> or drag & drop
            </p>
            <p className="text-center text-[11.5px] text-muted-foreground opacity-40">
              Supported: JPG, PNG, SVG, GIF
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 w-full max-w-md space-y-4 mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Selected Files:</h3>
          <div className="bg-card rounded-lg p-4 w-full grid grid-cols-3 md:grid-cols-4 gap-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="rounded-xl h-[85px] text-center relative overflow-hidden cursor-pointer hover:opacity-95"
              >
                <Image
                  src={file.preview}
                  alt={file.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            onClick={handleSubmit}
            disabled={isLoading || files.length === 0}
            className="w-full"
          >
            {isLoading ? "Converting..." : "Convert Images"}
          </Button>
        </div>
      )}

      {convertedFiles.length > 0 && (
        <div className="mt-6 w-full max-w-md space-y-4 mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Converted Files:</h3>
          <div className="bg-card rounded-lg p-4 w-full grid grid-cols-3 md:grid-cols-4 gap-3">
            {convertedFiles.map((file, index) => (
              <div
                key={index}
                className="rounded-xl h-[85px] text-center relative overflow-hidden cursor-pointer hover:opacity-95"
              >
                <Image
                  src={`data:${file.mimeType};base64,${file.convertedBuffer}`}
                  alt={file.convertedName}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            type="button"
            className="w-full"
            disabled={isLoading}
            onClick={handleDownloadAll}
          >
            Download All
          </Button>
        </div>
      )}
    </section>
  );
}
