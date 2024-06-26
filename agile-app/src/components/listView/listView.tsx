"use client"

import React, { useState, useEffect } from 'react';
import EventCard from "@/components/eventCard/eventCard";
import styles from './listView.module.css'
// import { getCrimeData, getLastFiveHundred} from "@/api/json/scripts";
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import DatePickerBox from '../datePicker/datePickerBox';
import {getCrimeData, CrimeData} from "@/scripts/dataFetching";

/**
* Types the list Crimes to have only correctly formatted "card-information"
*/
type Crimes = CrimeData[]

export default function ListView() {

    const [minDate, setMinDate] = useState<string>('');
    const [maxDate, setMaxDate] = useState<string>('');
    const [selectedStartDate, setSelectedStartDate] = useState<string>('');
    const [selectedEndDate, setSelectedEndDate] = useState<string>('');
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [crimeData, setCrimeData] = useState<Crimes>([]);

    useEffect(() => {
        const todaysDate = new Date();
        const currentDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        todaysDate.setMonth(todaysDate.getMonth() - 6);
        const sixMonthsAgoDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        setMinDate(sixMonthsAgoDate);
        setMaxDate(currentDate);
        setSelectedStartDate(sixMonthsAgoDate);
        setSelectedEndDate(currentDate);
    }, []);

    useEffect(() => {
        // Function that filters the data based on the selected options from the user
        const filterAndSetData = async () => {

            let filteredData: CrimeData[] = await getCrimeData();
            
            if (selectedOptionCrime !== "") {
                filteredData = filteredData.filter(item => item.type === selectedOptionCrime);
            }
            
            if (selectedOptionLoc !== "") {
                filteredData = filteredData.filter(item => item.location.name === selectedOptionLoc);
            }
            
            // The + 23:59:59 doesnt really work as you expect it to, but it works
            filteredData = filteredData.filter(item => item.datetime <= selectedEndDate + " 23:59:59");

            filteredData = filteredData.filter(item => item.datetime >= selectedStartDate);
            
            setCrimeData(filteredData);
        };

        filterAndSetData();
    }, [selectedOptionCrime, selectedOptionLoc, selectedStartDate, selectedEndDate]);

    return (
        <div className = {styles.eventList}>

            <p className ={styles.eventListHeader} data-testid='ListViewHeader'>
                Sök Händelser
            </p>
            <ParentSearchComboBox 
                setSelectedOptionCrime={setSelectedOptionCrime} 
                setSelectedOptionLoc={setSelectedOptionLoc}
                selectedOptionCrime={selectedOptionCrime}
                selectedOptionLoc={selectedOptionLoc}
            />
            <DatePickerBox
                min={minDate}
                max={maxDate}
                defaultStartDate={selectedStartDate} 
                setStartDate={setSelectedStartDate} 
                defaultEndDate={selectedEndDate} 
                setEndDate={setSelectedEndDate}
            />
            <ul data-testid='CrimeEventList'> {/** Maps the crimedata and makes each item into an event card */}
                {crimeData.map((crimeData: CrimeData) =>(<EventCard data={crimeData}/>))}
            </ul>
        </div>
    );
};