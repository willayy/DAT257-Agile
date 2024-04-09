"use client"
import {useState} from "react";

interface Props {
    data: CardInfo
}

interface CardInfo {
    id: number,
    datetime: string,
    name: string,
    summary: string,
    url: string,
    type: string,
    location: {
        name: string,
        gps: string
    };
}

export default function EventCard(Props: Props) {
    const [showMore, setShowMore] = useState<boolean>(false)

    return (
        <div>
            <h3>{Props.data.name}</h3>
            <p>{Props.data.summary}</p>
            {showMore
                ? (
                    <>
                        <p>Type: {Props.data.type}</p>
                        <p>GPS location: {Props.data.location.gps}</p>
                        <p>Id: {Props.data.id}</p>
                        <a href={Props.data.url}>Show event at police website</a>
                    </>
                )
                : <p>Click to show more information</p>
            }
            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    )
}