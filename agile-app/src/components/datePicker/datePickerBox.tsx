"use client";

import React, { use, useEffect, useState } from "react";
import DatePicker from './datePicker'
import styles from "./datePicker.module.css";

type DatePickerBoxProps = {
    defaultStartDate: string;
    defaultEndDate: string;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
}

const DatePickerBox = (props: DatePickerBoxProps) => {

    return (
        <div className={styles.dateBoxDiv}>
            
            <DatePicker setDate={props.setStartDate} max={props.defaultEndDate} min={props.defaultStartDate} title={"Filtrera datum fr.o.m"} defaultDate={props.defaultStartDate} />
            <DatePicker setDate={props.setEndDate} max={props.defaultEndDate} min={props.defaultStartDate} title={"t.o.m"} defaultDate={props.defaultEndDate} />
        </div>
    )
}

export default DatePickerBox

