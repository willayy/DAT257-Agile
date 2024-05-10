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

// export async function getCrimeData(): Promise<CrimeData[]> {
//     const res = await fetch("http://localhost:3000/api/json");
//     const jsonData = await res.json()
//     const stringData = await JSON.stringify(jsonData, null, 2);
//     const fetchedCrimeData: CrimeData[] = await JSON.parse(stringData );
//     return fetchedCrimeData;
// }

