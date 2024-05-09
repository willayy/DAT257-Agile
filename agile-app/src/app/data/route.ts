import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';


const dataFolderPath: string = "agile-app/src/scripts/data/"


export async function GET() {

    try {
        const files = await fs.readdir(dataFolderPath);
        
        // for (const file of files) {
            const filePath = dataFolderPath + files[0];
            const fileData = await fs.readFile(filePath, 'utf-8');
            return NextResponse.json(fileData);
        // }
    } 
    catch (error) {
      return NextResponse.json(error);
    }
}
