"use client"

import React, { useState, useEffect } from 'react';
import EventCard from "@/components/eventCard/eventCard";
import styles from './listView.module.css'
import { getCrimeData } from "@/scripts/dataFetching";
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";

/**
 * Interface that makes sure that information recieved from the API is in the right format for creating cards. 
 */

interface CardInfo {

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
type Crimes = CardInfo[]

export default function ListView() {
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [crimeData, setCrimeData] = useState<Crimes>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCrimeData: Crimes = await getCrimeData();
            setCrimeData(fetchedCrimeData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCrimeData: Crimes = await getCrimeData();

            if (selectedOptionCrime === "" && selectedOptionLoc === "") {
                setCrimeData(fetchedCrimeData);
            } else if (selectedOptionCrime === "") {
                const filteredData = fetchedCrimeData.filter(item => item.location.name === selectedOptionLoc);
                setCrimeData(filteredData);
            } else if (selectedOptionLoc === "") {
                const filteredData = fetchedCrimeData.filter(item => item.type === selectedOptionCrime);
                setCrimeData(filteredData);
            } else {
                const filteredData = fetchedCrimeData.filter(item => item.location.name === selectedOptionLoc && item.type === selectedOptionCrime);
                setCrimeData(filteredData);
            }
        };

        fetchData();
    }, [selectedOptionCrime, selectedOptionLoc]);

    return (
        <div className = {styles.eventList}>

            <p className ={styles.eventListHeader}>
                Sök Händelser
            </p>
            <ParentSearchComboBox 
                setSelectedOptionCrime={setSelectedOptionCrime} 
                setSelectedOptionLoc={setSelectedOptionLoc} 
            />
            <ul> {/** Maps the crimedata and makes each item into an event card */}
                {crimeData.map((crimeData: CardInfo) =>(<EventCard data={crimeData}/>))}       
            </ul>
        </div>
    );
};  