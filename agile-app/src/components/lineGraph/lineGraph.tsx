"use client"

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sample Data',
                data: [10, 20, 15, 25, 30],
                borderColor: 'blue',
                borderWidth: 1,
                fill: false
            }]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) { 
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: options
                });

                return () => myChart.destroy();
            }
        }
    }, []);

    return (
      <div>
        <canvas ref={chartRef} width="400" height="400"></canvas>
      </div>
    );
};

export default LineGraph;
