
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

// Configs for the data fetch
const url: URL = new URL("https://polisen.se/api/events");
const allowedCallsPerHour = 60;
var lastCallTime = 0;
var cachedDataArray: CrimeData[] = [];

/**
 * Async function that tries to fetch data from the specified URL,
 * if the time since the last call is less than the number of allowed calls per hour
 * the cached data is returned instead.
 * 
 * To use this function in a react component function you need to mark the function as async
 * 
 * @throws Error - If the fetch request fails
 * 
 * @returns crimeDataArray - Array of crime data */
export async function getCrimeData() {

    // Compute time delta
    const currentTime = new Date().getTime();
    const timeSinceLastCall = currentTime - lastCallTime;

    // Check if the number of calls per hour is exceeded, if so return cached data
    if (timeSinceLastCall < (3600000 / allowedCallsPerHour)) {
        return cachedDataArray;
    }
    
    // Fetch a response from the URL
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    lastCallTime = currentTime 

    // Parse the response to JSON and then into a CrimeData array
    const jsonData = await res.json();
    const stringData = JSON.stringify(jsonData, null, 2);
    const crimeDataArray: CrimeData[] = JSON.parse(stringData);
    cachedDataArray = crimeDataArray;

    return crimeDataArray;
}