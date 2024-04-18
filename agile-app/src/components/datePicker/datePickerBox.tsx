import DatePicker from './datePicker'
import styles from "./datePicker.module.css";

type DatePickerBoxProps = {
    max: string;
    min: string;
    defaultStartDate: string;
    defaultEndDate: string;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
}

const DatePickerBox = (props: DatePickerBoxProps) => {

    return (
        <div className={styles.dateBoxDiv}>
            <DatePicker setDate={props.setStartDate} max={props.max} min={props.min} title={"Filtrera datum fr.o.m"} defaultDate={props.defaultStartDate} />
            <DatePicker setDate={props.setEndDate} max={props.max} min={props.min} title={"t.o.m"} defaultDate={props.defaultEndDate} />
        </div>
    )
}

export default DatePickerBox

