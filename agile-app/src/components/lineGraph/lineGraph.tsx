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
    const chartRef = useRef<HTMLCanvasElement | null>(null);
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

            if (!groupedData[monthYear]) {
                groupedData[monthYear] = 0;
            }

            // Only increment the count if the crime type matches the selected option
            if (!selectedOptionCrime || crime.type === selectedOptionCrime) {
                groupedData[monthYear]++;
            }
    });

    //Saves earliest and latest date so all months can be on the graph
    const earliestDate = new Date(Math.min(...data.map(crime => new Date(crime.datetime).getTime())));
    const latestDate = new Date(Math.max(...data.map(crime => new Date(crime.datetime).getTime())));
    const labels: string[] = [];
    const currentDate = new Date(earliestDate);

    //Add all the months even the empty
    while (currentDate < latestDate || currentDate.getMonth() === latestDate.getMonth()) {
        const monthYear = currentDate.toLocaleString('sv', { month: 'numeric', year: 'numeric' });
        labels.push(monthYear);
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    // Convert the grouped data into chart format
    const chartData = {
        labels: labels, 
        datasets: [
            {
                label: selectedOptionCrime,
                data: labels.map(month => groupedData[month] || 0), // Ensure all months have a value
                borderColor: 'blue',
                borderWidth: 1.5,
                tension: 0.1,
                fill: true
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
