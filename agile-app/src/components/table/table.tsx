import {useEffect, useState} from "react";
import {ReactNodeArray} from "prop-types";

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
                <tr>
                    <td scope="row">{rowData[0]}</td>
                    <td>{rowData[1]}</td>
                    <td>{rowData[2]}</td>
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
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Kommun/län</th>
                            <th scope="col">Typ av brott</th>
                            <th scope="col">Antal inrapporteringar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {eventRows}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
