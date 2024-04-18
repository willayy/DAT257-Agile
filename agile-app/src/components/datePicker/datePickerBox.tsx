"use client";

import React, { use, useEffect, useState } from "react";
import DatePicker from './datePicker'
import styles from "./datePicker.module.css";

const DatePickerBox = () => {

    //TODO: Move out onChange function to make sure you cant pick an end date before the start date
    //TODO: Move out the selected date state to a parent component parameter
    //TODO: Change css to fit figma prototype

    const todaysDate = new Date();

    const currentDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    todaysDate.setMonth(todaysDate.getMonth() - 6);

    const sixMonthsAgoDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return (
        <div className={styles.dateBoxDiv}>
            <DatePicker max={currentDate} min={sixMonthsAgoDate} title={"Select a start date"} defaultDate={sixMonthsAgoDate} />
            <DatePicker max={currentDate} min={sixMonthsAgoDate} title={"Select an end date"} defaultDate={currentDate} />
        </div>
    )
}

export default DatePickerBox

