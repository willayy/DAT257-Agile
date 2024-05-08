/**
 * This file contains code for the data fetching sub-program.
 * While running it continously fetches data from the Polisen API and stores it in .json files
 * in the data folder.
 */

// Run with: npx ts-node agile-app/src/scripts/fetcher.ts

const url: URL = new URL("https://polisen.se/api/events");
const fs = require('fs');
const dataFolder = "agile-app/src/scripts/data/";
let lastFetchDate: Date = new Date();
let fetchInterval: number = 1000 * 10; // 11 seconds
let prune: boolean = false;
let currentDate: Date | null = null;
let sixMonthsAgo: Date | null = null;

function updateDate() {
    currentDate = new Date();
    sixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
}

async function pruneData() {
    // Update the dates
    updateDate();
    // Read in files from the data folder
    const files = fs.readdirSync(dataFolder);
    files.forEach((file: string) => {
        const fileDate = new Date(file.replace(".json", "")); // Parse the date from the file name
        if (fileDate < sixMonthsAgo!) {
            fs.unlink(dataFolder + file, function(err: Error) {
                if(err) {
                    return console.log(err);
                }
            });
        }
    });
}

async function fetchData() {
    
    // Get the current date minus the fetch interval seconds,
    // if this date is greater than the last fetch date, fetch new data
    let fetchDate = new Date(new Date().getTime() - fetchInterval)

    if (fetchDate > lastFetchDate) {
        // Fetch a response from the URL
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Failed to fetch data, message: " + res.statusText);
        }

        // Update the last fetch date
        lastFetchDate = new Date();

        // Parse the response to JSON
        const jsonData = await res.json();
        // Parse the JSON to a string
        const fileContent = JSON.stringify(jsonData, null, 2);
        // Write the string to a file named with the current date
        const fileName = dataFolder + new Date().toISOString() + ".json";
        fs.writeFile(fileName, fileContent, function(err: Error) {
            if(err) {
                return console.log(err);
            }
        });
    }
}

console.log("Welcome to fetcher, to to stop the srcript press ctrl + c");
