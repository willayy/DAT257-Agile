"use client";

import React, { use, useEffect, useState } from "react";
import DatePicker from './datePicker'
import styles from "./datePicker.module.css";

interface DatePickerProps{
    max: string;
    min: string;
    value: string;
    onChangeHandler: () => void;
}

const DatePickerBox = () => {
    /*
    const todaysDate = new Date();
    let currentDate = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(todaysDate);
    todaysDate.setMonth(todaysDate.getMonth() - 6);
    let sixMonthsAgoDate = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(todaysDate);
    sixMonthsAgoDate = sixMonthsAgoDate.replaceAll("/", "-");
    currentDate = currentDate.replaceAll("/", "-");
    console.log(sixMonthsAgoDate);
    console.log(currentDate);
    */

    const todaysDate = new Date();
    // Store today's date in a variable
    const currentDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
    // Subtract six months from today's date
    todaysDate.setMonth(todaysDate.getMonth() - 6);
    // Store the date six months ago in a variable
    const sixMonthsAgoDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return (
        <div>
            <DatePicker max={"2024-02-01"} min={"2024-02-28"} title={"Select a start date"} defaultDate={currentDate} />
            <DatePicker max={"2024-03-01"} min={"2024-03-21"} title={"Select an end date"} defaultDate={sixMonthsAgoDate} />
        </div>
    )
}

export default DatePickerBox

