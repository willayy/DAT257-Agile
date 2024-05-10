import { NextResponse } from "next/server";
import fs from 'fs'
import path from "node:path";

export async function GET() {
  const dirRelativeToPublicFolder = 'json'
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  let combinedData = "[";
  let fileNames = fs.readdirSync(dir).reverse();
  for (const fileName of fileNames) {
    let fileData = fs.readFileSync(dir + "/" + fileName, 'utf-8');
    fileData = fileData.replace("[", "").replace("]", ",");
    combinedData += fileData;
  }
  combinedData = combinedData.slice(0, -1);
  combinedData += "]";
  let combinedJson = JSON.parse(combinedData);
  return NextResponse.json(combinedJson);
}