import EventCard from "@/components/eventCard/eventCard";
import styles from './listView.module.css'


interface CardInfo {

        id: number;
        datetime: string;
        name: string;
        summary: string;
        url: string;
        type: string;
        location: {
            name: string;
            gps: string;
        }
    }

type Crimes = CardInfo[]

const crimeData: Crimes = [{
            id: 516375,
            datetime: "2024-04-09 9:59:45 +02:00",
            name: "09 april 08.31, Trafikolycka, Lycksele",
            summary: "Vormsele, en personbil och en lastbil har kolliderat",
            url: "/aktuellt/handelser/2024/april/9/09-april-08.31-trafikolycka-lycksele/",
            type: "Trafikolycka",
            location: {
                name: "Lycksele",
                gps: "64.59581,18.676367"
            }
        }, {
            id: 516375,
            datetime: "2024-04-09 9:59:45 +02:00",
            name: "09 april 08.31, Trafikolycka, Lycksele",
            summary: "Vormsele, en personbil och en lastbil har kolliderat",
            url: "/aktuellt/handelser/2024/april/9/09-april-08.31-trafikolycka-lycksele/",
            type: "Trafikolycka",
            location: {
                name: "Lycksele",
                gps: "64.59581,18.676367"
            }
        }];

export default async function ListView() {
    
    return(
        <ul className = {styles.eventList}>
            {crimeData.map((crimeData: CardInfo) =>(<EventCard data={crimeData}/>))}       
        </ul>
        
    );

    
}