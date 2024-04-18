import {useEffect, useState} from "react";
import {ReactNodeArray} from "prop-types";

interface Props {
    data : CrimeData | string;
}

type CrimeData = (string|string|number)[][]

export default function Table(Props : Props) {
    const [eventRows, setEventRows] = useState<ReactNodeArray | null>(null)

    useEffect(() => {
        if (typeof Props.data !== "string") {
            setEventRows(Props.data.map((rowData: (string | number)[], index: number) => (
                <tr>
                    <td scope="row">{rowData[0]}</td>
                    <td>{rowData[1]}</td>
                    <td>{rowData[2]}</td>
                </tr>
            )))
        }
    }, [Props])

    return(
        <table>
            <thead>
            <tr>
                <th scope="col">Kommun/län</th>
                <th scope="col">Typ</th>
                <th scope="col">Antal</th>
            </tr>
            </thead>
            <tbody>
            {eventRows}
            </tbody>
        </table>

    )
}
