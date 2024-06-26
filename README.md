# Webpics

## Description

Convert images to WebP format with ease. Webpics is a free online tool that allows you to convert images to WebP format.

## Features

- Webpic takes images as an input, converts it into WebP and then downloads it.
- Supports multiple image formats.
- Batch conversion: Convert multiple images at once.
- No registration required: Start converting immediately.
- Fast and efficient conversion process.
- Secure: Your images are processed locally in your browser.

## Teach Stack

Webpics is built using modern web technologies:

- Next.js: React framework for building server-side rendered and static websites.
- TypeScript: Typed superset of JavaScript.
- React Dropzone: React library for creating drag-and-drop file uploaders.
- Sharp: High-performance Node.js image processing library.
- shadcn/ui: Re-usable components built with Radix UI and Tailwind CSS.
- Upstash Redis: Serverless Redis database for storing number of requests and the number of files transformed.

## Local Installation

To run Webpics locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/sudipb7/webpics.git
```

2. Navigate to the project directory:

```bash
cd webpics
```

3. Install dependencies:

```bash
pnpm install
```

4. Set up environment variables:

Create a .env.local file in the root directory and add necessary environment variables

```js
UPSTASH_REDIS_REST_URL = "";
UPSTASH_REDIS_REST_TOKEN = "";
```

5. Run the development server:

```bash
pnpm dev
```

6. Open http://localhost:3000 in your browser to see the application.

## Privacy

We respect your privacy. All image conversions are done locally in your browser. Your images are not uploaded to any server.

## Limitations

- Maximum file size: 10MB per image
- Maximum number of images per batch: 10

## About WebP

WebP is a modern image format developed by Google. It provides superior lossless and lossy compression for images on the web. WebP images are smaller in size compared to PNGs and JPEGs while maintaining high quality, leading to faster webpage loading and reduced data usage.

## Contact

**[sudipbiswas_dev](https://x.com/sudipbiswas_dev)**
