import StatisticContainer from "@/app/statistics/page";
import {getCrimeData} from "@/scripts/dataFetching";

interface Event {
    id: number;
    datetime: string;
    name: string;
    summary: string;
    url: string;
    type: string;
    location: {
        name: string;
        gps: string;
    }
}

/**
 * Interface describing types for dictionary style object for type | location (key) : number (amount)
 */
interface NumberDictionary {
    [key: string]: number;
}

/**
 * Type describing array of collated event arrays. (
 */
type CrimeData = (string|string|number)[][]


/**
 * Types the list Crimes to have only right formatted "card-information"
 */
type Crimes = Event[]

function getEventsOnType(type: string, data: Crimes) {
    let locationAmountDict: NumberDictionary = {}
    let crimeData: CrimeData = [];

    for (let event of data) {
        if (Object.keys(locationAmountDict).includes(event.location.name)) {
            locationAmountDict[event.location.name] += 1
        } else {
            locationAmountDict[event.location.name] = 1
        }
    }

    for (let location of Object.keys(locationAmountDict)) {
        crimeData.push([location, type, locationAmountDict[location]])
    }

    return crimeData;
}

describe('Testing StatisticContainer', () => {
    test('test frequencies 1,4,2,8 sortCrimeDataOnFrequency results in 1,2,4,8', () => {
        
    })

    test('test two events of type "Bråk" at Göteborg through getEventsOnType results in [[Göteborg, Bråk, 2]]', () => {
        let testData = [
            {
                id: 1,
                datetime: "testDate",
                name: "testName",
                summary: "testSummary",
                url: "testUrl",
                type: "Bråk",
                location: {
                    name: "Göteborg",
                    gps: "1234"
                }
            },
            {
                id: 2,
                datetime: "testDate",
                name: "testName",
                summary: "testSummary",
                url: "testUrl",
                type: "Bråk",
                location: {
                    name: "Göteborg",
                    gps: "1234"
                }
            }
        ]
        expect(getEventsOnType("Bråk", testData)).toStrictEqual([["Göteborg", "Bråk", 2]])
    })
})