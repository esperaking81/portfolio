import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { put, list } from "@vercel/blob";

const FILE_NAME = "puck.json";
const DATA_FILE = path.join(process.cwd(), "puck.json");

const prettyPrint = ({ data }: { data: object }) =>
  console.log(">> prettyPrint => ", JSON.stringify(data, null, 2));

export async function GET() {
  const { blobs } = await list({
    prefix: FILE_NAME,
  });

  if (!blobs.length) {
    return null;
  }

  const blobUrl = blobs[0].url;

  const response = await fetch(blobUrl, { cache: "no-store" });
  const data = await response.json();

  prettyPrint({ data });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  prettyPrint({ data });

  await put(FILE_NAME, JSON.stringify(data), {
    access: "public",
    allowOverwrite: true,
    contentType: "application/json",
  });

  return NextResponse.json({ status: "ok" });
}
