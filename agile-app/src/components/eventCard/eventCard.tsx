"use client"
import {useState} from "react";
import styles from './eventCard.module.css'
import { urlToHttpOptions } from "url";

/**
 * The data passed to the component must follow the interface CardInfo found below
 */
interface Props {
    data: CardInfo
}

/**
 * Interface CardInfo is the same as the JSON object found in the police api
 */
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

/**
 * Event card component displaying time, date, location, type, and summary for an event published by the police.
 * Uses a "show more" button to keep the card concise yet containing all pertinent information
 * @param Props {Props} Object following CardInfo interface
 */
export default function EventCard(Props: Props) {
    const [showMore, setShowMore] = useState<boolean>(false)

    Props.data.url = Props.data.url.replace("http://localhost:3000/", "https://polisen.se/");

    return (
        <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>{Props.data.name}</h3>
            {showMore
                ? (
                    <>
                        <p className={styles.eventCardText}>{Props.data.summary}</p>
                        <p>Typ: {Props.data.type}</p>
                        <p>GPS position: {Props.data.location.gps}</p>
                        <p>Id: {Props.data.id}</p>
                        <div className={styles.showMoreContainer}>
                            <a href={Props.data.url}>Visa händelse på Polisens hemsida</a>
                            <button className={styles.showMoreButton} onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Visa mindre" : "Visa mer"}
                            </button>
                        </div>
                    </>
                )
                : (
                    <div className={styles.showMoreContainer}>
                        <p className={styles.eventCardText}>{Props.data.summary}</p>
                        <button className={styles.showMoreButton} onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Visa mindre" : "Visa mer"}
                        </button>
                    </div>
                )
            }
        </div>
    )
}