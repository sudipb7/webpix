import { NextResponse } from "next/server";

import { redis } from "@/lib/redis";

export async function GET(req: Request) {
  try {
    const totalRequests = await redis.get("requests");
    const totalFilesTransformed = await redis.get("fileCount");

    return NextResponse.json({ totalRequests, totalFilesTransformed }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
