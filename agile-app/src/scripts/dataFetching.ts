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

/**
 * Function that fetches data from a server side API endpoint.
 * To use this function in a react component function you need to mark the component function as async.
 * @throws Error - If the fetch request fails
 * @returns crimeDataArray - Array of crime data */
export async function getLastFiveHundred() {

    // Fetch a response from the URL
    const res = await fetch(url,{next: {revalidate: fetchingTimeframe}});

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }
    const jsonData = await res.json()
    const stringData = JSON.stringify(jsonData, null, 2);
    const crimeDataArray: CrimeData[] = JSON.parse(stringData);

    return crimeDataArray;
}

// export async function getCrimeData(): Promise<CrimeData[]> {
//     const res = await fetch("http://localhost:3000/api/json");
//     const jsonData = await res.json()
//     const stringData = await JSON.stringify(jsonData, null, 2);
//     const fetchedCrimeData: CrimeData[] = await JSON.parse(stringData );
//     return fetchedCrimeData;
// }

