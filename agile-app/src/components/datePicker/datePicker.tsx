"use client"

import React, {ChangeEvent, useState} from 'react';
import styles from './datePicker.module.css';


interface DatePickerProps{
    min: string;
    max: string;
    title: string;
    defaultDate: string;
}

const DatePicker = ({max, min, title, defaultDate} : DatePickerProps) => {

    const [selectedDate, setSelectedDate] = useState<string>(defaultDate);

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className={styles.dateBoxDiv}>
            <label>{title}:
                <input type="date"
                       className={styles.dateBoxInput}
                       value={selectedDate}
                       min = {min}
                       max = {max}
                       onChange={handleDateChange}
                />
            </label>
        </div>
    );

};

export default DatePicker;