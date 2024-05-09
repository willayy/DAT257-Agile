import { NextResponse } from 'next/server';
import path from 'path';
import { CrimeData } from "@/scripts/dataFetching"  ;

const dataFolderPath: string = "agile-app/src/scripts/data/"
const fs = require('fs');

export async function POST(request: Request) {

    const { text: query } = await request.json();

    if (!query) {
        return NextResponse.json("Query not provided");
    }

    try {
        const files = await fs.readdir(dataFolderPath);
        let combinedData;

        for (const file of files) {
            const filePath = path.join(dataFolderPath, file);
            const fileData = await fs.readFile(filePath, 'utf-8');
            const jsonData = JSON.parse(fileData);
            combinedData = jsonData.stringify()
        }

        return NextResponse.json(combinedData);
    } 
    catch (error) {
        return NextResponse.json("An error occured" + error);
    }
}
