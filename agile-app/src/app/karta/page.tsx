"use client"

import {useEffect, useState} from "react";
import {fetchRegionData} from "@/scripts/geoFetching";
import {GeoJSON, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {GeoJsonObject} from "geojson";

export default function Map() {
    const [regionData, setRegionData] = useState<GeoJsonObject>();

    useEffect(() => {
        const setData = async () => {
            setRegionData(await fetchRegionData())
        }
        setData()
    })

    return (
        <div>
            <MapContainer center={[60.1282, 18.6435]} zoom={5} scrollWheelZoom={false} style={{height: '91vh'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {regionData && (
                    <GeoJSON
                        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
                        data={regionData}
                    />
                )}

            </MapContainer>
        </div>
    )
}