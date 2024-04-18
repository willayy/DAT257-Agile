"use client";
import React, { useState } from 'react';
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from './page.module.css';
import LineGraph from "@/components/lineGraph/lineGraph";

const Visualization = () => {
    const [showGraph, setShowGraph] = useState(false);

    
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');

    const handleClick = () => {
        setShowGraph(true);
    };

    return (
        <div className={styles.page}>
            <h1>Visualisering</h1>
            <ParentSearchComboBox setSelectedOptionCrime={setSelectedOptionCrime} setSelectedOptionLoc={setSelectedOptionLoc}/>
            <button className={styles.button} onClick={handleClick}>Create Graph</button>
            <h2>{selectedOptionCrime}</h2>
            <h2>{selectedOptionLoc}</h2>
            {showGraph && <LineGraph selectedOptionCrime={selectedOptionCrime} selectedOptionLoc={selectedOptionLoc}/>}
        </div> 
    );
};

export default Visualization;
