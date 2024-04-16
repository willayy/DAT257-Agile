import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"
import "@/app/globals.css";


interface Event {

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

/**
 * Types the list Crimes to have only right foratted "card-information"
 */
type Crimes = Event[]

export default function StatisticContainer() {
    return (
        <div className={styles.statisticContainer}>
            <p className={styles.statisticHeader}>
                Generera Statistik
            </p>
            <p className={"center"}>
                <b>Endast kommun eller län vald:</b> Genom att välja kommun eller län så kan du se det totala antalet event inrapporterade de senaste 6 månaderna samt vilket typ av event som har rapporterats flest och minst antal gånger.
                <br/>
                <br/>
                <b>Endast typ av event vald:</b> Genom att välja event typ så kan du se vilket kommun eller län eventet har rapporterats flest och minst antal gånger under de senaste 6 månaderna
                <br/>
                <br/>
                <b>Event typ och kommun eller län vald:</b> Genom att välja både kommun eller län samt typ av event så ser du hur många event av den typen på den platsen har rapporterats de senaste 6 månaderna
            </p>
            <ParentSearchComboBox/>
            <div className={"center"}>
                <button className={styles.generateStatsButton}>Generera!</button>
            </div>
        </div>
    );
}