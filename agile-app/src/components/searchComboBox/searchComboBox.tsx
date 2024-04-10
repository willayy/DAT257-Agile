"use client"

import React, {ChangeEvent} from 'react'
import styles from './searchComboBox.module.css'

interface SearchComboBoxProps {
    title: string;
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const SearchComboBox = ({title, options, onSelect}:SearchComboBoxProps) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        onSelect(selectedOption);
    };

    return (
        <div>
            <label >{title}</label>
            <select onChange={handleSelectChange} className={styles.comboBoxDropdown}>
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