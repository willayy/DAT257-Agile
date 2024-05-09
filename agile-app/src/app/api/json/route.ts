import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";

export async function GET(req: NextRequest) {
  const filePath = new URL("agile-app/src/scripts/data/2024-03-08.json")
  const fileBuffer = await fs.readFile(filePath);
  const json = JSON.parse(fileBuffer.toString());
  return NextResponse.json(json);
}
