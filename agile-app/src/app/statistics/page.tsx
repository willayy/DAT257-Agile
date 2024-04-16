"use client"
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"
import "@/app/globals.css";
import {useState} from "react";
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
 * Types the list Crimes to have only right foratted "card-information"
 */
type Crimes = Event[]

export default function StatisticContainer() {
    const [showStats, setShowStats] = useState<boolean>(false)
    const [location, setLocation] = useState<string | null>(null)
    const [type, setType] = useState<string | null>(null)
    const [tableProps, setTableProps] = useState<string | null>(null)

    async function getEventsOnLocation(location: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        let crimeData: (string|string|number)[][] = [];
        let uniqueTypesAmount: [string[], number[]] = [[],[]];

        for (let event of fetchedCrimeData) {
            if (event.type in uniqueTypesAmount[0]) {
                let amountIndex : number = uniqueTypesAmount[0].findIndex(x => x == event.type)
                uniqueTypesAmount[1][amountIndex] += 1;
            } else {
                uniqueTypesAmount[0].push(event.type)
                uniqueTypesAmount[1].push(1)
            }
        }

        for (let type of uniqueTypesAmount[0]) {
            let amountIndex : number = uniqueTypesAmount[0].findIndex(x => x == type)
            crimeData.push([location, type, uniqueTypesAmount[1][amountIndex]])
        }

        crimeData.sort((a, b) => {
            if (a[2] < b[2]) {
                return -1;
            }
            if (a[2] > b[2]) {
                return 1;
            }
            return 0
        })

        return crimeData;
    }

    function generateStatistics() {
        setShowStats(true)

        if (location == null && type == null) {
            setTableProps("You must select an option in the comboboxes")
        }
        else if (location != null && type == null) {

        }
        else if (location == null && type != null) {

        }
        else {

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
            <ParentSearchComboBox/>
            {showStats
                ? (
                    <div className={"center"}>
                        <button className={styles.generateStatsButton} onClick={()=>setShowStats(false)}>Reset Selection</button>
                        <p>Button clicked</p>
                    </div>
                )
                : (
                    <div className={"center"}>
                        <button className={styles.generateStatsButton} onClick={()=>setShowStats(true)}>Generera!</button>
                    </div>
                )
            }
        </div>
    );
}