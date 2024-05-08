/**
 * This file contains code for the data fetching sub-program.
 * While running it continously fetches data from the Polisen API and stores it in .json files
 * in the data folder.
 */

// Run with: npx ts-node agile-app/src/scripts/fetcher.ts

const url: URL = new URL("https://polisen.se/api/events");
const fs = require('fs');
const dataFolder = "agile-app/src/scripts/data/";
let fetchInterval: number = 61; // 61 seconds to comply with the API rate limit of 60
let currentDate: Date | null = null;
let sixMonthsAgo: Date | null = null;
let toBeFetched = getNextFetchDate();
let lastFetchDate = new Date("2021-01-01T00:00:00.000Z");

function updateDate() {
    currentDate = new Date();
    sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
}

function getNextFetchDate() {
    const files = fs.readdirSync(dataFolder)
    if (files.length == 0) {
        return new Date()
    }
    let recentFetchInData = files[0]
    recentFetchInData = recentFetchInData.replace(".json", "")
    let date = new Date(recentFetchInData)
    date.setDate(date.getDate() - 1)
    return date
}

function pruneData() {
    // Update the dates
    updateDate();
    // Read in files from the data folder
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

async function fetchFromApiAndWrite(date: string) {

    // Fetch a response from the URL
    const res = await fetch(url + "?DateTime=" + date);

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
    });
    lastFetchDate = new Date();
}

function fetchDataCheck(date: string) {
    
    // Get the current date minus the fetch interval seconds,
    // if this date is greater than the last fetch date, fetch new data
    
    let okFetchDate = lastFetchDate
    okFetchDate.setSeconds(okFetchDate.getSeconds() - fetchInterval);

    console.log("Fetching date: " + okFetchDate.toISOString().split("T")[0]);

    if (lastFetchDate > okFetchDate) {
        console.log("Denied");
        return;
    }

    console.log("Fetching data");
    fetchFromApiAndWrite(date).then(() => {
        console.log("Data fetched");
        // Decrease the date to fetch by one day
        toBeFetched.setDate(toBeFetched.getDate() - 1);
    });
}

console.log("Welcome to fetcher, to to stop the srcript press ctrl + c");

updateDate()
console.log(currentDate)
console.log(sixMonthsAgo)
console.log(toBeFetched)