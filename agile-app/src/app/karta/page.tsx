"use client"

import {useEffect, useState} from "react";
import {fetchMunicipalityData, fetchRegionData} from "@/scripts/geoFetching";
import {GeoJSON, GeoJSONProps, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Feature, GeoJsonObject, GeoJsonProperties, Geometry} from "geojson";
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"
import {getCrimeData} from "@/scripts/dataFetching";
import {CrimeData} from "@/scripts/dataFetching";

type Coordinates = [number, number]; // [longitude, latitude]
type Polygon = Coordinates[]; // Array of coordinates forming a polygon
type MultiPolygon = Polygon[]; // Array of polygons forming a multi-polygon


// interface GeoJsonFeature {
//     "type": 'Feature',
//     "geometry": {
//         "type" : "Polygon"
//         "coordinates": MultiPolygon
//     }
//     "properties": {
//         "name": string,
//         "color": number,
//         "l_id": number
//     }
// }

interface CustomFeatureProperties {
    "kom_namn": string,
    "color": number,
    "l_id": number
}

interface NumberDictionary {
    [key: string]: number;
}

type CustomFeature = Feature<Geometry, CustomFeatureProperties> | undefined
type Crimes = CrimeData[]

export default function Map() {
    const [regionData, setRegionData] = useState<GeoJsonObject | null>(null);
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [locationAmountDict, setLocationAmountDict] = useState<NumberDictionary | null>(null)

    async function getEventsOnType(type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
        console.log(type)
        console.log(fetchedCrimeData)
        let locationAmountDict: NumberDictionary = {}

        for (let event of fetchedCrimeData) {
            if (Object.keys(locationAmountDict).includes(event.location.name) && type == event.type) {
                locationAmountDict[event.location.name] += 1
            } else if (type == event.type) {
                locationAmountDict[event.location.name] = 1
            }
        }
        return locationAmountDict;
    }

    function getColor(density : number) {
        return (density > 6 ? '#b30000' :
            density > 5 ? '#e34a33' :
                density > 4 ? '#fc8d59' :
                    density > 3 ? '#fdbb84' :
                        density > 2 ? '#fdd49e' :
                            density > 1 ? '#fef0d9' :
                                '#FFFFFF')
    }

    function style(feature: CustomFeature) {
        if (feature == null || locationAmountDict == null) {
            return {}
        } else if (Object.keys(locationAmountDict).includes(feature.properties.kom_namn)) {
            return {
                fillColor: getColor(locationAmountDict[feature.properties.kom_namn]),
                weight: 2,
                opacity: 0.4,
                color: 'black',
                fillOpacity: 0.7
            };
        } else {
            return {
                weight: 3,
                opacity: 0.6,
                fillOpacity: 0.2
            }
        }
    }

    useEffect(() => {
        const setData = async () => {
            setRegionData(await fetchMunicipalityData())
        }
        setData()
    })

    useEffect(() => {
        const setEventsOnType = async () => {
            setLocationAmountDict(await getEventsOnType(selectedOptionCrime))
        }
        setEventsOnType()
        // console.log(selectedOptionCrime)
        // console.log(locationAmountDict)
    }, [selectedOptionCrime])

    return (
        <div className={styles.mapWrapper}>
            <MapContainer center={[60.1282, 18.6435]} zoom={5} scrollWheelZoom={false} style={{height: '91vh'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {(regionData) && (
                    <GeoJSON
                        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
                        data={regionData}
                        style={(feature) => style(feature)}
                    />
                )}

            </MapContainer>
            <div className={styles.parentSearchWrapper}>
                <ParentSearchComboBox
                    setSelectedOptionCrime={setSelectedOptionCrime}
                    setSelectedOptionLoc={setSelectedOptionLoc}
                    selectedOptionCrime={selectedOptionCrime}
                    selectedOptionLoc={selectedOptionLoc}
                />
            </div>
        </div>
    )
}