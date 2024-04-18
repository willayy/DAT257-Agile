"use client"

import React, {ChangeEvent} from 'react';
import styles from './datePicker.module.css';


interface DatePickerProps{
    setDate: (date: string) => void;
    min: string;
    max: string;
    title: string;
    defaultDate: string;
}

const DatePicker = ({setDate, max, min, title, defaultDate} : DatePickerProps) => {

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    return (
        <label>{title}
            <input  type="date"
                    className={styles.dateBoxInput}
                    value={defaultDate}
                    min = {min}
                    max = {max}
                    onChange={handleDateChange}
            />
        </label>
    );

};

export default DatePicker;