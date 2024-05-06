"use client"

import styles from './page.module.css'
import {useEffect, useState} from "react";
import {fetchRegionData} from "@/scripts/geoFetching";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
const L = require('leaflet')
import 'leaflet/dist/leaflet.css'

export default function Map() {
    const [regionData, setRegionData] = useState<string | null>(null);

    useEffect(() => {
        const setData = async () => {
            setRegionData(await fetchRegionData())
        }
        setData()
    })

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '100vh'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}