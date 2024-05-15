// Interface for storing the data fetched from the API
import {all} from "deepmerge";

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

let crimeTypes: string[] = [];

/** Function that populates crimeOptions array if the array is empty. Otherwise, does nothing.
 * This is workaround since the population of the list is almost always slower than rendering the
 * component that uses it. Therefore, once populated it simply ends.*/
const populateCrimeOptions = async () => {
    if (crimeTypes.length == 0) {
        // Array of strings for the crimeOptions
        const allCrimes: CrimeData[] = await getCrimeData();
        const uniqueCrimeTypes = new Set<string>(); /** Using a set to avoid duplicates */

        allCrimes.forEach(crime => {
            uniqueCrimeTypes.add(crime.type);
        });

        crimeTypes = Array.from(uniqueCrimeTypes).sort();
        crimeTypes.unshift(""); /** Adds an empty string as the first element */
    }
};

/** Function that returns the crimeTypes after it's populated
 * If crimeTypes is already populated the "await" is instantly skipped and the variable returned.
 * @returns crimeTypes - Array of crime types */
export const getUniqueCrimeTypes = async () => {
    await populateCrimeOptions();
    return crimeTypes
};