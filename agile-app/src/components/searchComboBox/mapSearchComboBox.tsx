"use client"
import { getUniqueCrimeTypes } from '@/scripts/dataFetching'
import React, {useState} from 'react'
import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'
import { get } from 'http'

/**
 * The data passed to the component must follow the interface ParentSearchComboBoxProps found below
 */
interface MapParentSearchComboBoxProps {
    setSelectedOptionCrime: React.Dispatch<React.SetStateAction<string>>;
    setSelectedOptionLoc: React.Dispatch<React.SetStateAction<string>>;
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}
/**
 * A parent component containing two SearchComboBox components for filtering data based on crime type and location.
 * Also contains a button for resetting choices
 * @param ParentSearchComboBox {MapParentSearchComboBoxProps} Object following CardInfo interface
 * @returns {JSX} A React component representing the ParentSearchComboBox.
 */
const MapParentSearchComboBox: React.FC<MapParentSearchComboBoxProps> = ({ setSelectedOptionCrime, setSelectedOptionLoc , selectedOptionCrime, selectedOptionLoc}) => {

    const handleSelectCrime = (selectedOption: string) => {
        setSelectedOptionCrime(selectedOption);
    };

    const handleSelectLoc = (selectedOption: string) => {
        setSelectedOptionLoc(selectedOption);
    };

    const resetChoices= () => {
        handleSelectCrime("");
        handleSelectLoc("")
    };


    /** list containing all the types of crimes that can be filtered on*/
    const optionsCrime = getUniqueCrimeTypes();
    
    /** list containing all the locations that can be filtered on*/
    const optionsLoc = [
        "Kommun",
        "Län",
    ];

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <SearchComboBox title="Filtrera på kommun eller län: " options={optionsLoc} onSelect={handleSelectLoc} selectedOption={selectedOptionLoc} />
                </div>
                <div className={styles.innerContainer} > 
                    <SearchComboBox title="Filtrera på brottstyp: " options={optionsCrime} onSelect={handleSelectCrime} selectedOption={selectedOptionCrime}/>
                </div>
                <button className={styles.button} onClick={resetChoices}>Återställ val</button>
            </div>

        </div>
    );
};

export default MapParentSearchComboBox;