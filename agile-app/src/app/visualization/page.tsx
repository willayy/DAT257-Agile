"use client";
import React, { useState } from 'react';
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from './page.module.css';
import LineGraph from "@/components/lineGraph/lineGraph";

const Visualization = () => {
    const [showGraph, setShowGraph] = useState(false);

    const handleClick = () => {
        setShowGraph(true);
    };

    return (
        <div className={styles.page}>
            <h1>Visualisering</h1>
            <ParentSearchComboBox />
            <button className={styles.button} onClick={handleClick}>Create Graph</button>
            {showGraph && <LineGraph />}
        </div> 
    );
};

export default Visualization;
