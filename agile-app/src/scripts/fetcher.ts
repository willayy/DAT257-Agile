/**
 * This file contains code for the data fetching sub-program.
 * While running it continously fetches data from the Polisen API and stores it in .json files
 * in the data folder.
 * 
 * The script WONT fetch data older than six months, and it will prune data older than six months.
 * The script WONT violate the API rate limit of 10 secondd between each call ,60 calls per hour, 1440 calls per day.
 * The script WILL revalidate todays date when there is no more data to fetch (according to our set six month limit).
*/

// Run with: npx ts-node agile-app/src/scripts/fetcher.ts

const url: URL = new URL("https://polisen.se/api/events");
const fs = require('fs');
const dataFolder: string = "agile-app/public/json/";
const fileSet: Set<string> = new Set<string>()
let dateToFetch: Date = new Date();
let fetchInterval: number = 60; // 61 seconds to comply with the API rate limit of 60
let currentDate: Date | null = null;
let sixMonthsAgo: Date | null = null;
let lastApiCall: Date = new Date("2021-01-01T00:00:00.000Z");
let iteration: number = 0;

/**
 * Sleeps for the given amount of milliseconds
 * @param ms the amount of milliseconds to sleep for
 * @returns a promise that resolves after the given amount of milliseconds */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Updates the current date and six months ago date */
function updateCurrentDate(): void {
    currentDate = new Date();
    sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
}

/**
 * Reads the files in the data folder and adds them to the file set */
function readSavedFiles(): void {
    const files = fs.readdirSync(dataFolder) 
    files.forEach((file: string) => {
        fileSet.add(file)
    })
}

/**
 * Returns the next date to fetch data for.
 * @returns the next date string to be fetched from the api or null if the time limit has been reached */
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

/**
 * Prunes data older than six months from the data folder */
function pruneData(): void {
    // Read in files from the data folder
    console.log("Pruning data older than six months")
    const files = fs.readdirSync(dataFolder);
    files.forEach((file: string) => {
        const fileDate = new Date(file.replace(".json", "")); // Parse the date from the file name
        if (fileDate <= sixMonthsAgo!) {
            fs.unlink(dataFolder + file, function(err: Error) {
                if(err) { return console.log(err) }
            });
        }
    });
}

/**
 * Fetches data from the Polisen API and writes it to a file
 * @param date the date to fetch data for */
async function fetchFromApiAndWrite(date: string): Promise<void> {

    lastApiCall = new Date();

    // Fetch a response from the URL
    const res = await fetch(url + "?DateTime=" + date)

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

/**
 * Checks if the API can be called based on the last call date and the fetch interval
 * @returns true if the API can be called, false otherwise */
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


/**
 * Main function of the program, runs the fetcher logic loop*/
async function main() {

    console.log("---------------------------------------------------------")
    console.log("Welcome to fetcher, to to stop the srcript press ctrl + c");
    console.log("---------------------------------------------------------")

    readSavedFiles()

    while (true) {

        // Every 100th iteration update the current date state of the program
        if (iteration % 100 == 0) {
            updateCurrentDate()
            console.log("Updated current date to: " + currentDate!.toISOString())
            console.log("Updated six months ago to: " + sixMonthsAgo!.toISOString())
        }

        // if the api can be called, either fetch new data or revalidate todays data
        if (canCallApi()) {
            let nextFetchDate = getNextFetchDate()
            if (nextFetchDate != null) {
                await fetchFromApiAndWrite(nextFetchDate)
            } else {
                pruneData()
                console.log("Revalidating todays json file")
                let today = new Date().toISOString().split("T")[0]
                await fetchFromApiAndWrite(today)
            }
        }

        // Sleep for 60 seconds, its unnecessary to call the API more often since the call limit wont allow it
        await sleep(60000);

        iteration++;
    }
}

main()