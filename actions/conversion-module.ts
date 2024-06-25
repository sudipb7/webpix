"use server";

import sharp from "sharp";
import { v4 as uuid } from "uuid";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export async function convertImages(formData: FormData) {
  try {
    const files = formData.getAll("images");

    if (files.length === 0) {
      throw new Error("No files uploaded");
    }

    const convertedFiles = await Promise.all(
      files.map(async (file: any) => {
        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          throw new Error(`Invalid file type: ${file.type}`);
        }

        if (file.size > MAX_FILE_SIZE) {
          throw new Error(`File too large: ${file.name}`);
        }

        const buffer = await file.arrayBuffer();
        const outputFileName = `${uuid()}.webp`;

        const webpBuffer = await sharp(Buffer.from(buffer)).webp({ quality: 80 }).toBuffer();

        return {
          originalName: file.name,
          convertedName: outputFileName,
          size: webpBuffer.length,
          webpBuffer: webpBuffer.toString("base64"),
        };
      })
    );

    return {
      message: "Conversion successful",
      files: convertedFiles,
    };
  } catch (error: Error | any) {
    console.error("Conversion error:", error);
    throw new Error(error.message);
  }
}
