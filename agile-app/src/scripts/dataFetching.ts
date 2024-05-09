import { each } from "chart.js/helpers";
import path from "path";
import { promises as fs } from 'fs';
import { GetServerSideProps } from "next";

// Interface for storing the data fetched from the API
export interface CrimeData {
    id: number;
    datetime: string;
    name: string;
    summary: string;
    url: string;
    type: string;
    location: {
        name: string
        gps: string
    }
}

/**
 * Function that fetches data from a server side API endpoint.
 * To use this function in a react component function you need to mark the component function as async.
 * @throws Error - If the fetch request fails
 * @returns crimeDataArray - Array of crime data */
export async function getCrimeData(): Promise<CrimeData[]>{
    const res = await fetch("http://localhost:3000/api/json", { cache: 'no-store' });
    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }
    const jsonData = await res.json()
    const stringData = JSON.stringify(jsonData, null, 2);
    const fetchedCrimeData: CrimeData[] = await JSON.parse(stringData);
    return fetchedCrimeData;
}

// Array of strings for the crimeOptions
let crimeTypes: string[] = [];

/** Function that populates crimeOptions array */
const populateCrimeOptions = async () => {
    const allCrimes: CrimeData[] = await getCrimeData();
    const uniqueCrimeTypes = new Set<string>(); /** Using a set to avoid duplicates */

    allCrimes.forEach(crime => {
        uniqueCrimeTypes.add(crime.type);
    });

    crimeTypes = Array.from(uniqueCrimeTypes).sort();
    crimeTypes.unshift(""); /** Adds an empty string as the first element */
};

populateCrimeOptions();

/** Function that returns the crimeOptions after it's populated
 * @returns crimeTypes - Array of crime types */
export const getUniqueCrimeTypes = () => {
    return crimeTypes;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const files = await fs.readdir(process.cwd() + dataFolder, 'utf8');
    let crimeDataArray: CrimeData[] = [];
    
    for (const file of files) {
        const filePath = path.join(dataFolder, file);
        const fileData = await fs.readFile(filePath, "utf-8");
        const jsonData = JSON.parse(fileData);
        crimeDataArray = crimeDataArray.concat(jsonData);
    }
    return {
        props: {
            crimeDataArray
        }
    };
}