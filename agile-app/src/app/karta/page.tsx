"use client"

import {useEffect, useState} from "react";
import {fetchRegionData} from "@/scripts/geoFetching";
import {GeoJSON, GeoJSONProps, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Feature, GeoJsonObject, GeoJsonProperties, Geometry} from "geojson";
import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from "./page.module.css"

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
    "name": string,
    "color": number,
    "l_id": number
}

type CustomFeature = Feature<Geometry, CustomFeatureProperties> | undefined

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
    if (!feature) {
        return {}
    } else {
        return {
            fillColor: getColor(feature.properties.color),
            weight: 2,
            opacity: 0.4,
            color: 'black',
            fillOpacity: 0.7
        };
    }
}

export default function Map() {
    const [regionData, setRegionData] = useState<GeoJsonObject>();
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');

    useEffect(() => {
        const setData = async () => {
            setRegionData(await fetchRegionData())
        }
        setData()
    })

    return (
        <div className={styles.mapWrapper}>
            <MapContainer center={[60.1282, 18.6435]} zoom={5} scrollWheelZoom={false} style={{height: '91vh'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {regionData && (
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