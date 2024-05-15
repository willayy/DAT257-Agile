"use client"

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getCrimeData } from '@/scripts/dataFetching';
import {CrimeData} from "@/scripts/dataFetching";


//define the array of crimes
type Crimes = CrimeData[];

interface LineGraphProps {
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}

//Create linegraph component
const LineGraph: React.FC<LineGraphProps> = ({ selectedOptionCrime, selectedOptionLoc }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [crimeData, setCrimeData] = useState<Crimes>([]);
    const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(null);

    /**
     * This function sorts the data based on crime type and crime location
     * It converts the month and year into datetime and sorts it based on year and month
     * Converts the sorted crimes into chart format and updates the chart instance
     * If there is no data an empty graph will be shown.
     * If no choices are made the graph will show all crimes for each month
     * @param data The list of crimes
     */
    const processData = (data: Crimes) => {
    // Filter the data to include only the selected crime
    const filteredCrimeData = data.filter(crime => {
        return (
            (!selectedOptionCrime || crime.type === selectedOptionCrime) &&
            (!selectedOptionLoc || crime.location.name === selectedOptionLoc)
        );
    });

    // Group the filtered data by time (e.g., month and year) and count the occurrences of the selected crime type
    //makes sure 2 months in different years does not get clumped together
    const groupedData: { [monthYear: string]: number } = {};
    filteredCrimeData.forEach(crime => {
        const date = new Date(crime.datetime);
        const monthYear = date.toLocaleString('sv', { month: 'numeric' , year: 'numeric'});
        console.log(monthYear)

        const year = date.getFullYear().toString()
        const monthYearKey = `${monthYear} ${year}`;

        if (!groupedData[monthYearKey]) {
            groupedData[monthYearKey] = 0;
        }

        // Only increment the count if the crime type matches the selected option
        if (!selectedOptionCrime || crime.type === selectedOptionCrime) {
            groupedData[monthYearKey]++;
        }
    });

    //mapping months to a number to sort them
    const monthsMap: { [month: string]: number } = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    };
    

    // Get all months and ensure they have a value even if no occurrences exist also sorts the list so its ready for the graph
    const allMonths = new Set(Object.keys(groupedData));
    const labels =  Array.from(allMonths).sort((a, b) => {
        const [aMonth, aYear] = a.split(' ');
        const [bMonth, bYear] = b.split(' ');

        // Compare years first
        if (parseInt(bYear) !== parseInt(aYear)) {
            return parseInt(bYear) - parseInt(aYear);
        }

        // If years are the same, then compare months
        return monthsMap[aMonth] - monthsMap[bMonth];
    }).reverse();

    // Convert the grouped data into chart format
    const chartData = {
        labels: labels, 
        datasets: [
            {
                label: selectedOptionCrime,
                data: labels.map(month => groupedData[month] || 0), // Ensure all months have a value
                borderColor: 'blue',
                borderWidth: 1,
                tension: 0.1,
                fill: false
            }
        ]
    };
        console.log('ChartData:', chartData);

        //checks if an instance of graph exists and destroys it so it can be refreshed
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance) {
                    chartInstance.destroy();
                }
                
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: chartData,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                setChartInstance(myChart);
            }
        }
    };

    //Get the crime data when componenet is created
    useEffect(() => {
        const fetchData = async () => {
            const fetchedCrimeData: Crimes = await getCrimeData();
            setCrimeData(fetchedCrimeData);
        };
        fetchData();
    }, []);

    //Reprocess the data when crime type or location is changed
    useEffect(() => {
        if (crimeData.length > 0) {
            processData(crimeData);
        }
    }, [crimeData, selectedOptionCrime, selectedOptionLoc]);

    //returns a div with a canvas inside containing the graph
    return (
        <div>
            <canvas id="myChart" ref={chartRef} width="600" height="600"></canvas>
        </div>
    
    );
};

export default LineGraph;
