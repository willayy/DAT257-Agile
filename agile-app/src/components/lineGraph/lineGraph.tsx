"use client"

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getCrimeData } from '@/scripts/dataFetching';

interface GraphData {
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

type Crimes = GraphData[];

interface LineGraphProps {
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ selectedOptionCrime, selectedOptionLoc }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [crimeData, setCrimeData] = useState<Crimes>([]);
    const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(null);


    const processData = (data: Crimes) => {
    // Filter the data to include only the selected crime
    const filteredCrimeData = data.filter(crime => {
        return (
            (!selectedOptionCrime || crime.type === selectedOptionCrime) &&
            (!selectedOptionLoc || crime.location.name === selectedOptionLoc)
        );
    });

    // Group the filtered data by time (e.g., month) and count the occurrences of the selected crime type
    const groupedData: { [month: string]: number } = {};
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
    

    // Get all months and ensure they have a value even if no occurrences exist
    const allMonths = new Set(Object.keys(groupedData));
    const labels =  Array.from(allMonths).sort((a, b) => {
        const [aMonth, aYear] = a.split(' ');
        const [bMonth, bYear] = b.split(' ');

        // Compare years first
        if (parseInt(aYear) !== parseInt(bYear)) {
            return parseInt(aYear) - parseInt(bYear);
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

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCrimeData: Crimes = await getCrimeData();
            setCrimeData(fetchedCrimeData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (crimeData.length > 0) {
            processData(crimeData);
        }
    }, [crimeData, selectedOptionCrime, selectedOptionLoc]);

    return (
        <div>
            <canvas id="myChart" ref={chartRef} width="400" height="400"></canvas>
        </div>
    
    );
};

export default LineGraph;
