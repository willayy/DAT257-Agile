import {useEffect, useState} from "react";

interface Props {
    data : CrimeData | string;
}

type CrimeData = (string|string|number)[][]

export default function Table(Props : Props) {
    const [eventRows, setEventRows] = useState(null)

    useEffect(() => {

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
            <tr>
                <td scope="row">valdKommun</td>
                <td>valdTyp</td>
                <td>visatAntal</td>
            </tr>
            </tbody>
        </table>

    )
}
