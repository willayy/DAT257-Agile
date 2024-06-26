"use client"
import {useState} from "react";
import styles from './eventCard.module.css'
import {CrimeData} from "@/scripts/dataFetching";

/**
 * The data passed to the component must follow the interface CrimeData in dataFetching.ts
 */
interface Props {
    data: CrimeData
}

/**
 * Event card component displaying time, date, location, type, and summary for an event published by the police.
 * Uses a "show more" button to keep the card concise yet containing all pertinent information
 * @param Props {Props} Object following CrimeData interface
 */
export default function EventCard(Props: Props) {
    const [showMore, setShowMore] = useState<boolean>(false)

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
                            <a href={`https://polisen.se${Props.data.url}`} target="_blank" rel="noopener noreferrer">
                                Visa händelse på Polisens hemsida
                            </a>
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