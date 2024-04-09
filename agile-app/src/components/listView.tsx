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

export default function listView(crimes: Crimes) {
    
    return(
        <ul>         
            {crimes.map((data: Crime) =>(<EventCard data={data}/>))}       
        </ul>
        
    );

    
}