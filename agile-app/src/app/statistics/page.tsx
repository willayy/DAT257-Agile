"use client"
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"
import "@/app/globals.css";
import {useState} from "react";
import {getCrimeData} from "@/scripts/dataFetching";
import Table from "@/components/table/table";

/**
 * Interface for an event fetched from the police API
 */
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

/**
 * Statistics Container is top-level component for the statistics page
 * Contains methods to collate and sort events fetched from the police API into a Prop sent to
 * the Table component which is displayed through clicking the "Generate" button.
 * Combobox selectors for location and type are included and automatically update the tableProps state variable
 * which is passed to the Table component
 */
export default function StatisticContainer() {
    const [showStats, setShowStats] = useState<boolean>(false)
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [tableProps, setTableProps] = useState<CrimeData | string>("You must select an option in the comboboxes")

    /**
     * Custom sort method for crimeData array of arrays. Sorts the collated police events on the frequency of events.
     * Sorts the highest frequency to the lowest frequency
     * @param crimeData Preprocessed collated events fetched from police API in form [[location, type, frequency]]
     */
    function sortCrimeDataOnFrequency(crimeData: (string | number)[][]) {
        crimeData.sort((a, b) => {
            if (a[2] < b[2]) {
                return 1;
            }
            if (a[2] > b[2]) {
                return -1;
            }
            return 0
        })
    }

    /**
     * Processes and collates events fetched from police API with predetermined location.
     * Collates all equal events of given event type at specified location with frequency of event type at location recorded
     * After processing sorts events based on frequency
     * @param location Location of events to collate based on equal event types
     * @return crimeData Preprocessed collated events fetched from police API in form [[location, type, frequency]]
     */
    async function getEventsOnLocation(location: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let typeAmountDict: NumberDictionary = {}
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (Object.keys(typeAmountDict).includes(event.type) && location == event.location.name) {
                typeAmountDict[event.type] += 1
            } else if (location == event.location.name) {
                typeAmountDict[event.type] = 1
            }
        }

        for (let type of Object.keys(typeAmountDict)) {
            crimeData.push([location, type, typeAmountDict[type]])
        }

        sortCrimeDataOnFrequency(crimeData)
        return crimeData;
    }

    /**
     * Processes and collates events fetched from police API with predetermined type.
     * Collates all equal events of given location of specified type with frequency of event type at location recorded
     * After processing sorts events based on frequency
     * @param type Type of events to collate based on equal event locations
     * @return crimeData Preprocessed collated events fetched from police API in form [[location, type, frequency]]
     */
    async function getEventsOnType(type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let locationAmountDict: NumberDictionary = {}
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (Object.keys(locationAmountDict).includes(event.location.name) && type == event.type) {
                locationAmountDict[event.location.name] += 1
            } else if (type == event.type) {
                locationAmountDict[event.location.name] = 1
            }
        }

        for (let location of Object.keys(locationAmountDict)) {
            crimeData.push([location, type, locationAmountDict[location]])
        }

        sortCrimeDataOnFrequency(crimeData);
        return crimeData;
    }

    /**
     * Processes and collates events fetched from police API with predetermined type and location.
     * Collates all equal events of specified location and specified type with frequency of event type and location recorded
     * After processing sorts events based on frequency
     * @param location Location of events to collate
     * @param type Type of events to collate
     * @return crimeData Preprocessed collated events fetched from police API in form [[location, type, frequency]]. Returns only one entry
     */
    async function getEventsOnLocationAndType(location: string, type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let locationAmountDict: NumberDictionary = {}
        locationAmountDict[location] = 0
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (Object.keys(locationAmountDict).includes(event.location.name) && event.type == type) {
                locationAmountDict[location] += 1
            }
        }

        crimeData.push([location, type, locationAmountDict[location]])
        return crimeData;
    }

    /**
     * Method calls getEvents methods based on combobox selection. None selected, one selected, all selected.
     * getEvents methods return collated event entries which are then set in the tableProps state.
     * If no events could be found tableProps state is set to error message
     * If no selection is made tableProps state is set to error message
     * Sets show stats to true
     * @param location Selected location for events
     * @param type Selected type for events
     */
    async function generateStatistics(location: string, type: string) {
        setShowStats(true)
        let tableProps: CrimeData | string = ''

        if (location == '' && type == '') {
            tableProps = "Du måste väla ett alternativ ovan för att generera statistik"
        } else if (location != '' && type == '') {
            tableProps = await getEventsOnLocation(location)
        } else if (location == '' && type != '') {
            tableProps = await  getEventsOnType(type)
        } else {
            tableProps = await getEventsOnLocationAndType(location, type)
        }
        if (typeof tableProps !== "string" && tableProps.length < 1) {
            setTableProps("Inga event kunde hittas för dina inställningar")
        } else {
            setTableProps(tableProps)
        }

    }

    return (
        <div className={styles.statisticContainer}>
            <p className={styles.statisticHeader}>
                Generera Statistik
            </p>
            <p className={"center"}>
                <b>Endast kommun eller län vald:</b> Genom att välja kommun eller län så kan du se det totala antalet event inrapporterade de senaste 6 månaderna samt vilket typ av event som har rapporterats flest och minst antal gånger.
                <br/>
                <br/>
                <b>Endast typ av event vald:</b> Genom att välja event typ så kan du se vilket kommun eller län eventet har rapporterats flest och minst antal gånger under de senaste 6 månaderna
                <br/>
                <br/>
                <b>Event typ och kommun eller län vald:</b> Genom att välja både kommun eller län samt typ av event så ser du hur många event av den typen på den platsen har rapporterats de senaste 6 månaderna
            </p>
            <ParentSearchComboBox
                setSelectedOptionCrime={setSelectedOptionCrime}
                setSelectedOptionLoc={setSelectedOptionLoc}
            />
            {/** If showStats set to true shows reset selection button and table of generated statistics. If showStats set to false
            shows generate statistics button */}
            {showStats
                ? (
                    <div className={"center"}>
                        <button className={styles.generateStatsButton} onClick={()=>setShowStats(false)}>Reset Selection</button>
                        <Table data={tableProps}/>
                    </div>
                )
                : (
                    <div className={"center"}>
                        <button className={styles.generateStatsButton} onClick={()=>generateStatistics(selectedOptionLoc, selectedOptionCrime)}>Generera!</button>
                    </div>
                )
            }
        </div>
    );
}