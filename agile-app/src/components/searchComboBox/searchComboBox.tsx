"use client"

import React, {ChangeEvent} from 'react'
import styles from './searchComboBox.module.css'

/**
 * The data passed to the component must follow the interface SearchComboBoxProps found below
 */
interface SearchComboBoxProps {
    title: string;
    options: string[];
    onSelect: (selectedOption: string) => void;
    selectedOption: string;
}

/**
 * A filtering combobox component.
 * @param {Object} props - Object following SearchComboBoxProps.
 * @param {string} props.title - The title of the combo box.
 * @param {string[]} props.options - A list of strings with all options for the combobox.
 * @param {function} props.onSelect - A function to handle the selection of an option.
 * @param {string} props.selectedOption - The selected option passed down from higher class. Allows for resetting of comboBox
 * @returns {JSX} A React component representing the SearchComboBox.
 */
const SearchComboBox = ({title, options, onSelect, selectedOption}:SearchComboBoxProps) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        onSelect(selectedOption);
    };

    return (
        <div className={styles.comboContainer}>
            <label>{title}</label>
            <select value={selectedOption} onChange={handleSelectChange} className={styles.comboBoxDropdown}>
                {options.map((option, index) => (
                    <option key={index} value={option} >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );

};

export default SearchComboBox;