import DatePicker from './datePicker'
import styles from "./datePicker.module.css";

/**
* A component that contains two datepickers
*/

/**
 * Interface for the props of the DatePickerBox component */
type DatePickerBoxProps = {
    max: string;
    min: string;
    defaultStartDate: string;
    defaultEndDate: string;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
}

/**
 * A box containing two datepickers
 * @param props - the props of the component
 * @returns an HTML div element */
const DatePickerBox = (props: DatePickerBoxProps) => {

    return (
        <div className={styles.dateBoxDiv} data-testid = 'DatePickerBox'>
            <DatePicker setDate={props.setStartDate} max={props.max} min={props.min} title={"Filtrera datum fr.o.m"} defaultDate={props.defaultStartDate} />
            <DatePicker setDate={props.setEndDate} max={props.max} min={props.min} title={"t.o.m"} defaultDate={props.defaultEndDate} />
        </div>
    )
}

export default DatePickerBox

