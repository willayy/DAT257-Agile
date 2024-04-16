"use client"

import React, {ChangeEvent, useState} from 'react'

interface DatePickerProps{
    max: string;
    min: string;
}
const DatePicker = () => {

    const [selectedDate, setSelectedDate] = useState<string>('');
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <label>Select a startdate: </label>
            <input type="date"
                   value={selectedDate}
                   onChange={handleDateChange}
           />
            <p>Selected date: {selectedDate}</p>

        </div>
    );

};

export default DatePicker;