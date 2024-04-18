"use client";

import DatePickerBox from "@/components/datePicker/datePickerBox";
import { useEffect, useState } from "react";

export default function TestDatePicker() {

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    useEffect(() => {
        const todaysDate = new Date();
        const currentDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        todaysDate.setMonth(todaysDate.getMonth() - 6);
        const sixMonthsAgoDate = todaysDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

        setStartDate(sixMonthsAgoDate);
        setEndDate(currentDate);
    }, []); 

    return (
        <DatePickerBox defaultStartDate={startDate} setStartDate={setStartDate} defaultEndDate={endDate} setEndDate={setEndDate} />
    )
}