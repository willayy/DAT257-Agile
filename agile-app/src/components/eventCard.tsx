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
    return (
        <div>
            <h3>{Props.data.name}</h3>
            <p>{Props.data.summary}</p>
        </div>
    )
}