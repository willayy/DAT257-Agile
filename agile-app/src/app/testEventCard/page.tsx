import EventCard from "@/components/eventCard/eventCard";

const testData = {
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
}

export default function TestEventCard() {
    return (
        <main>
            <EventCard data={testData}/>
        </main>
    );
}