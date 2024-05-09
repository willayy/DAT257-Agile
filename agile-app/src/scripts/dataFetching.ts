const dataFolder: string = "agile-app/src/scripts/data/";
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
const fetchingTimeframe = 60; // This is the timeframe in seconds that the data is cached for

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
export async function getLastFiveHundred() {

    // Fetch a response from the URL
    const res = await fetch(url,{next: {revalidate: fetchingTimeframe}});

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    // Parse the response to JSON and then into a CrimeData array
    const jsonData = await res.json();
    const stringData = JSON.stringify(jsonData, null, 2);
    const crimeDataArray: CrimeData[] = JSON.parse(stringData);

    return crimeDataArray;
}

export async function getCrimeData() {
  const res = await fetch("/data");
  let fetchedData = await res.json();
  let fetchedCrimeData: CrimeData[] = JSON.parse(fetchedData);
  return fetchedCrimeData;
}

