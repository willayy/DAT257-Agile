import React, {ChangeEvent} from 'react';
import styles from './datePicker.module.css';

/**
 * Interface for the props of the DatePicker component */
interface DatePickerProps{
    setDate: (date: string) => void;
    min: string;
    max: string;
    title: string;
    defaultDate: string;
}

/**
 * A datepicker
 * @param props - the props of the component
 * @returns an HTML label element */
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