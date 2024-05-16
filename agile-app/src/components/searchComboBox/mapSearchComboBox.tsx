"use client"
import { getUniqueCrimeTypes } from '@/scripts/dataFetching'
import React, {useEffect, useState} from 'react'
import SearchComboBox from './searchComboBox'
import styles from './searchComboBox.module.css'

/**
 * The data passed to the component must follow the interface ParentSearchComboBoxProps found below
 */
interface MapParentSearchComboBoxProps {
    setSelectedOptionCrime: React.Dispatch<React.SetStateAction<string>>;
    setSelectedOptionLoc: React.Dispatch<React.SetStateAction<string>>;
    setShowMarkers: React.Dispatch<React.SetStateAction<boolean>>;
    showMarkers : boolean;
    selectedOptionCrime: string;
    selectedOptionLoc: string;
}
/**
 * A parent component containing two SearchComboBox components for filtering data based on crime type and location.
 * Also contains a button for resetting choices and showing / hiding map markers
 * @param ParentSearchComboBox {MapParentSearchComboBoxProps} Object following CardInfo interface
 * @returns {JSX} A React component representing the ParentSearchComboBox.
 */
const MapParentSearchComboBox: React.FC<MapParentSearchComboBoxProps> = ({ setSelectedOptionCrime, setSelectedOptionLoc , setShowMarkers, showMarkers, selectedOptionCrime, selectedOptionLoc}) => {
    const [markerText, setMarkerText] = useState<string>("Dölj Markeringar");
    const [optionsCrime, setOptionsCrime] = useState<string[]>([]);

    const handleSelectCrime = (selectedOption: string) => {
        setSelectedOptionCrime(selectedOption);
    };

    const handleSelectLoc = (selectedOption: string) => {
        setSelectedOptionLoc(selectedOption);
    };

    const handleSelectMarker = () => {
        if (showMarkers) {
            setMarkerText("Visa Markeringar")
            setShowMarkers(!showMarkers)
        } else {
            setMarkerText("Dölj Markeringar")
            setShowMarkers(!showMarkers)
        }
    }

    const resetChoices= () => {
        handleSelectCrime("");
        handleSelectLoc("")
    };


    /** Effect hook which gets the list of unique crime types of type string[] and sets the state variable to this value*/
    useEffect(() => {
        const fetchCrimeTypes = async () => {
            getUniqueCrimeTypes().then((result) => {
                setOptionsCrime(result)
            })
        }
        fetchCrimeTypes()
    })
    
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
                    {/*Displays the search combo box once the crime options have been successfully fetched.*/}
                    {/*Otherwise displays a loading message to the user*/}
                    {optionsCrime.length != 0
                        ? (
                            <SearchComboBox
                                title="Filtrera på brottstyp: "
                                options={optionsCrime}
                                onSelect={handleSelectCrime}
                                selectedOption={selectedOptionCrime}
                            />
                        )
                        : (
                            <div className={styles.comboContainer}>
                                <label>{"Filtrera på brottstyp: "}</label>
                                <label>Laddar in tillgängliga brottstyper</label>
                            </div>
                        )}
                </div>
                <button className={styles.button} onClick={resetChoices}>Återställ val</button>
                <button className={styles.button} onClick={handleSelectMarker}>{markerText}</button>
            </div>

        </div>
    );
};

export default MapParentSearchComboBox;