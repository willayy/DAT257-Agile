import React from "react";
import DatePicker from './datePicker.tsx'
import styles from "./datePicker.module.css";

interface DatePickerProps{
    max: string;
    min: string;
    value: string;
    onChangeHandler: () => void;
}

const DateInput = () => {
    return (
        <div>
            <DatePicker max={"2024-02-01"} min={"2024-02-28"} title={"Select a start date"} />
            <DatePicker max={"2024-03-01"} min={"2024-03-21"} title={"Select an end date"} />
        </div>

        // <input type="date"
        //        className={styles.dateBoxInput}
        //        value={value}
        //        min = {min}
        //        max = {max}
        //        onChange={onChangeHandler}
        // />
    )
}

export default DateInput

