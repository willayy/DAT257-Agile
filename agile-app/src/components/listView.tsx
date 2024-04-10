interface Crime {

        id: number;
        date: string;
        name: string;
        summary: string;
        type: string;
        location: {
            name: string;
            gps: string;
        }
    }

type Crimes = Crime[]

export default async function listView() {
    
    crimeData = getData();


    return(
        <ul>         
            {crimes.map((data: crimeData) =>(<EventCard data={data}/>))}       
        </ul>
        
    );

    
}