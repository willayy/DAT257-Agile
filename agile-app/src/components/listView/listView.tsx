import EventCard from "@/components/eventCard/eventCard";
import styles from './listView.module.css'
import { getCrimeData } from "@/scripts/dataFetching";


/**
 * Interface that makes sure that information recieved from the API is in the right format for creating cards. 
 */

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

/**
 * Types the list Crimes to have only right foratted "card-information"
 */
type Crimes = CardInfo[]

export default async function ListView() {

    /**
     * Placeholder strings for sorting the events on location and crimetype.
     */
    const crimeType: string = "";
    const crimeLocation: string = "";
    
    /**
     * Gets a list of crimes from the api script
     */
    const fetchedCrimeData: Crimes = await getCrimeData();
    var crimeData: Crimes = [];
    
    
    /**
     * Compares each crime-item to the sorting strings and puts the ones "passing" into crimeData to be 
     * made into cards.
     */
    if (crimeType == "" && crimeLocation == ""){
        crimeData = fetchedCrimeData;
    }
    else if(crimeType == ""){
        var count = fetchedCrimeData.length;

        for(var i = 0; i < count; i++) {
            var item = fetchedCrimeData[i];

            if(item.location.name == crimeLocation){
                crimeData.push(item)
            }
        }
    }
    else if(crimeLocation == ""){
        var count = fetchedCrimeData.length;

        for(var i = 0; i < count; i++) {
            var item = fetchedCrimeData[i];

            if(item.type == crimeType){
                crimeData.push(item)
            }

        }
    }
    else{
        var count = fetchedCrimeData.length;

        for(var i = 0; i < count; i++) {
            var item = fetchedCrimeData[i];

            if(item.location.name == crimeLocation && item.type == crimeType){
                crimeData.push(item)
            }

        }
    }
    
    return(
        <div className = {styles.eventList}>

            <p className ={styles.eventListHeader}>
                Sök Händelser
            </p>
            
            <ul> {/** Maps the crimedata and makes each item into an event card */}
                {crimeData.map((crimeData: CardInfo) =>(<EventCard data={crimeData}/>))}       
            </ul>
        </div>
    );

    
}