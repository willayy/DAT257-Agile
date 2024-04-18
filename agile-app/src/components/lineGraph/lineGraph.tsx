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

const LineGraph = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [crimeData, setCrimeData] = useState<Crimes>([]);
    const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCrimeData: Crimes = await getCrimeData();
            setCrimeData(fetchedCrimeData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const processData = () => {
            const filteredCrimeData = crimeData.filter(crime => {
                if (selectedOptionCrime && selectedOptionLoc) {
                    return crime.type === selectedOptionCrime && crime.location.name === selectedOptionLoc;
                } else if (selectedOptionCrime) {
                    return crime.type === selectedOptionCrime;
                } else if (selectedOptionLoc) {
                    return crime.location.name === selectedOptionLoc;
                } else {
                    return true; // No filters selected, include all data
                }
            });

            const groupedData: { [month: string]: { [crimeType: string]: number } } = {};

            filteredCrimeData.forEach(crime => {
                const date = new Date(crime.datetime);
                const month = date.toLocaleString('default', { month: 'long' });
                const crimeType = crime.type;

                if (!groupedData[month]) {
                    groupedData[month] = {};
                }

                if (!groupedData[month][crimeType]) {
                    groupedData[month][crimeType] = 0;
                }

                groupedData[month][crimeType]++;
            });

            const labels = Object.keys(groupedData);
            const datasets = Object.keys(
                crimeData.reduce((acc: { [key: string]: boolean }, crime) => {
                    acc[crime.type] = true;
                    return acc;
            }, {})).map(crimeType => ({
                label: crimeType,
                data: labels.map(month => groupedData[month][crimeType] || 0),
                borderColor: 'blue',
                borderWidth: 1,
                tension: 0.1,
                fill: false
            }));

            const data = {
                labels: labels,
                datasets: datasets
            };

            if (chartRef.current) {
                const ctx = chartRef.current.getContext('2d');
                if (ctx) {
                    // Destroy previous chart instance if it exists
                    if (chartInstance) {
                        chartInstance.destroy();
                    }
                    
                    // Create new chart instance
                    
                    const myChart = new Chart(ctx, {
                        type: 'line',
                        data: data,
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });

                    // Update chartInstance state
                    setChartInstance(myChart);
                }
            }
        };

        processData();

        // Cleanup function to destroy the chart instance when component unmounts
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [crimeData]);

    return (
        <canvas ref={chartRef} width="400" height="400"></canvas>
    );
};

export default LineGraph;