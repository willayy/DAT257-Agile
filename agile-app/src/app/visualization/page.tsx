'use client'
import React, { useState } from 'react';
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from '@/app/statistics/page.module.css';
import styles2 from "./page.module.css";
import "@/app/globals.css";
import LineGraph from "@/components/lineGraph/lineGraph";

const Visualization = () => {
    const [showGraph, setShowGraph] = useState(false);
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');

    const handleClick = () => {
        setShowGraph(true);
    };

    return (
        <div className={styles2.page}>
            <h1>Visualisering</h1>
            <ParentSearchComboBox
                setSelectedOptionCrime={setSelectedOptionCrime}
                setSelectedOptionLoc={setSelectedOptionLoc}
                selectedOptionLoc={selectedOptionLoc}
                selectedOptionCrime={selectedOptionCrime}
            />
            
            <button className={styles.generateStatsButton} onClick={handleClick}>Generera graf</button>
            

            {showGraph ? <LineGraph selectedOptionCrime={selectedOptionCrime} selectedOptionLoc={selectedOptionLoc}/> : null}
        </div> 
    );
};

export default Visualization;
