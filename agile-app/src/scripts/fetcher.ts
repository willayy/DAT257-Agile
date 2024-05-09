/**
 * This file contains code for the data fetching sub-program.
 * While running it continously fetches data from the Polisen API and stores it in .json files
 * in the data folder.
 */


// Run with: npx ts-node agile-app/src/scripts/fetcher.ts

const url: URL = new URL("https://polisen.se/api/events");
const fs = require('fs');
const dataFolder: string = "agile-app/src/scripts/data/";
const fileSet: Set<String> = new Set<String>()
let dateToFetch: Date = new Date();
let fetchInterval: number = 60; // 61 seconds to comply with the API rate limit of 60
let currentDate: Date | null = null;
let sixMonthsAgo: Date | null = null;
let lastApiCall: Date = new Date("2021-01-01T00:00:00.000Z");
let iteration: number = 0;

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateCurrentDate(): void {
    currentDate = new Date();
    sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
}

function readSavedFiles(): void {
    const files = fs.readdirSync(dataFolder) 
    files.forEach((file: string) => {
        fileSet.add(file)
    })
}

function getNextFetchDate(): string | null {
    while (dateToFetch >= sixMonthsAgo!) {
        let fileName = dateToFetch.toISOString().split("T")[0] + ".json" 
        if (!fileSet.has(fileName)) {
            fileSet.add(fileName)
            return fileName.replace(".json", "")
        }
        dateToFetch.setDate(dateToFetch.getDate() - 1)
    }
    console.log("No more JSON to fetch from API")
    return null
}

function pruneData(): void {
    // Read in files from the data folder
    console.log("Pruning data older than six months")
    const files = fs.readdirSync(dataFolder);
    files.forEach((file: string) => {
        const fileDate = new Date(file.replace(".json", "")); // Parse the date from the file name
        if (fileDate < sixMonthsAgo!) {
            fs.unlink(dataFolder + file, function(err: Error) {
                if(err) { return console.log(err) }
            });
        }
    });
}

function validateTodaysDate(date: string): void {
    
}

async function fetchFromApiAndWrite(date: string): Promise<void> {

    lastApiCall = new Date();

    // Fetch a response from the URL
    const res = await (await fetch(url + "?DateTime=" + date))

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    // Parse the response to JSON
    const jsonData = await res.json();
    // Parse the JSON to a string
    const fileContent = JSON.stringify(jsonData, null, 2);
    // Write the string to a file named with the current date
    const fileName = dataFolder + date + ".json";
    fs.writeFile(fileName, fileContent, function(err: Error) {
        if(err) { return console.log(err) }
        console.log("The file " + fileName + " was saved!");
        console.log("---------------------------------------------------------")
    });
}

function canCallApi(): boolean {
    
    let currentDate = new Date();
    let okFetchDate = new Date(lastApiCall);
    okFetchDate.setSeconds(okFetchDate.getSeconds() + fetchInterval);

    console.log("Checking if allowed to call API, last call: " + lastApiCall.toISOString() + ", now: " + (new Date()).toISOString());

    if (currentDate < okFetchDate) {
        console.log("Denied");
        console.log("---------------------------------------------------------")
        return false;
    } else {
        console.log("Allowed");
        return true;
    }
}

async function main(): Promise<void> {
    console.log("---------------------------------------------------------")
    console.log("Welcome to fetcher, to to stop the srcript press ctrl + c");
    console.log("---------------------------------------------------------")

    readSavedFiles()

    while (true) {

        if (iteration % 100 == 0) {
            updateCurrentDate()
            pruneData()
        }

        if (canCallApi()) {
            let nextFetchDate = getNextFetchDate()
            if (nextFetchDate != null) {
                await fetchFromApiAndWrite(nextFetchDate)
            } else {
                
            }
        }

        await sleep(61000);

        iteration++;
    }
}

main()