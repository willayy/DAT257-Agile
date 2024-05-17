import {useEffect, useState} from "react";
import {ReactNodeArray} from "prop-types";
import styles from "./table.module.css"

interface Props {
    data : CrimeData | string;
}

type CrimeData = (string|string|number)[][]

export default function Table(Props : Props) {
    const [eventRows, setEventRows] = useState<ReactNodeArray | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (typeof Props.data !== "string") {
            setError(false)
            setErrorMessage('')
            setEventRows(Props.data.map((rowData: (string | number)[], index: number) => (
                <tr key={index}>
                    <td className = {styles.td} scope="row">{rowData[0]}</td>
                    <td className = {styles.td} >{rowData[1]}</td>
                    <td className = {styles.td} >{rowData[2]}</td>
                </tr>
            )))
        } else {
            setError(true);
            setErrorMessage(Props.data)
        }
    }, [Props])

    return(
        <div>
            {error
                ? (
                    <h3>{errorMessage}</h3>
                )
                : (
                    <table className= {styles.table}>
                        <thead className = {styles.thead} data-testid="TableHeader">
                        <tr>
                            <th className = {styles.th} scope="col">Kommun/län</th>
                            <th className = {styles.th} scope="col">Brottstyp</th>
                            <th className = {styles.th} scope="col">Antal inrapporteringar</th>
                        </tr>
                        </thead>
                        <tbody className = {styles.tbody} data-testid="TableBody">
                        {eventRows}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
