"use client"
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"
import "@/app/globals.css";
import {useState} from "react";
import {getCrimeData} from "@/scripts/dataFetching";
import Table from "@/components/table/table";


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

interface NumberDictionary {
    [key: string]: number;
}

type CrimeData = (string|string|number)[][]


/**
 * Types the list Crimes to have only right formatted "card-information"
 */
type Crimes = Event[]

export default function StatisticContainer() {
    const [showStats, setShowStats] = useState<boolean>(false)
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [tableProps, setTableProps] = useState<CrimeData | string>("You must select an option in the comboboxes")

    function sortCrimeDataOnFrequency(crimeData: (string | number)[][]) {
        crimeData.sort((a, b) => {
            if (a[2] < b[2]) {
                return -1;
            }
            if (a[2] > b[2]) {
                return 1;
            }
            return 0
        })
    }

    async function getEventsOnLocation(location: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let typeAmountDict: NumberDictionary = {}
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (event.type in Object.keys(typeAmountDict)) {
                typeAmountDict[event.type] += 1
            } else {
                typeAmountDict[event.type] = 1
            }
        }

        for (let type of Object.keys(typeAmountDict)) {
            crimeData.push([location, type, typeAmountDict[type]])
        }

        sortCrimeDataOnFrequency(crimeData)
        return crimeData;
    }

    async function getEventsOnType(type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let locationAmountDict: NumberDictionary = {}
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (event.location.name in Object.keys(locationAmountDict)) {
                locationAmountDict[event.location.name] += 1
            } else {
                locationAmountDict[event.location.name] = 1
            }
        }

        for (let location of Object.keys(locationAmountDict)) {
            crimeData.push([location, type, locationAmountDict[location]])
        }

        sortCrimeDataOnFrequency(crimeData);
        return crimeData;
    }

    async function getEventsOnLocationAndType(location: string, type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let locationAmountDict: NumberDictionary = {}
        locationAmountDict[location] = 0
        let crimeData: CrimeData = [];

        for (let event of fetchedCrimeData) {
            if (event.location.name == Object.keys(locationAmountDict)[0] && event.type == type) {
                locationAmountDict[location] += 1
            }
        }

        crimeData.push([location, type, locationAmountDict[location]])
        return crimeData;
    }

    async function generateStatistics(location: string, type: string) {
        setShowStats(true)

        if (location == '' && type == '') {
            setTableProps("You must select an option in the comboboxes")
        } else if (location != '' && type == '') {
            setTableProps(await getEventsOnLocation(location))
        } else if (location == '' && type != '') {
            setTableProps(await  getEventsOnType(type))
        } else {
            setTableProps(await getEventsOnLocationAndType(location, type))
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
            {showStats
                ? (
                    <div className={"center"}>
                        <button className={styles.generateStatsButton} onClick={()=>setShowStats(false)}>Reset Selection</button>
                        <p>Button clicked</p>
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