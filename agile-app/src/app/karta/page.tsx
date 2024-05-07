"use client"

import {useEffect, useRef, useState} from "react";
import {fetchMunicipalityData, fetchRegionData} from "@/scripts/geoFetching";
import {GeoJSON, GeoJSONProps, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Feature, GeoJsonObject, GeoJsonProperties, Geometry} from "geojson";
import MapSearchComboBox from "@/components/searchComboBox/mapSearchComboBox";
import styles from "./page.module.css"
import {getCrimeData} from "@/scripts/dataFetching";
import {CrimeData} from "@/scripts/dataFetching";
import { GeoJSON as LeafletGeoJSON } from "leaflet";

interface CustomFeatureProperties {
    "kom_namn": string,
    "color": number,
    "l_id": number,
    "name": string
}

interface NumberDictionary {
    [key: string]: number;
}

type CustomFeature = Feature<Geometry, CustomFeatureProperties> | undefined
type Crimes = CrimeData[]

export default function Map() {
    const [mapTiles, setMapTiles] = useState<GeoJsonObject | null>(null);
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('');
    const [locationAmountDict, setLocationAmountDict] = useState<NumberDictionary | null>(null)
    const geoJsonLayerRef = useRef<LeafletGeoJSON | null>(null);

    async function getEventsOnType(type: string) {
        const fetchedCrimeData: Crimes = await getCrimeData();
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
        }
        if (selectedOptionLoc == "Kommun") {
            if (Object.keys(locationAmountDict).includes(feature.properties.kom_namn)) {
                return {
                    fillColor: getColor(locationAmountDict[feature.properties.kom_namn]),
                    weight: 2,
                    opacity: 0.4,
                    color: 'black',
                    fillOpacity: 0.7
                }
            }
        } else if (selectedOptionLoc == "Län") {
            if (Object.keys(locationAmountDict).includes(feature.properties.name)) {
                return {
                    fillColor: getColor(locationAmountDict[feature.properties.name]),
                    weight: 2,
                    opacity: 0.4,
                    color: 'black',
                    fillOpacity: 0.7
                }
            }
        } else {
            return {
                fillColor: '#33CEFF',
                weight: 2,
                color: '#3368FF',
                opacity: 0.4,
                fillOpacity: 0.4
            }
        }
        return {}
    }

    useEffect(() => {
        const setTiles = async () => {
            if (selectedOptionLoc == "Kommun") {
                setMapTiles(await fetchMunicipalityData())
            } else if (selectedOptionLoc == "Län") {
                setMapTiles(await  fetchRegionData())
            } else {
                setMapTiles(await fetchMunicipalityData())
            }
        }
        setTiles()
    }, [selectedOptionLoc])

    useEffect(() => {
        const setEventsOnType = async () => {
            setLocationAmountDict(await getEventsOnType(selectedOptionCrime))
        }
        setEventsOnType()
    }, [selectedOptionCrime])

    useEffect(() => {
        const layer = geoJsonLayerRef.current
        if (layer && mapTiles != null) {
            layer.clearLayers().addData(mapTiles);
            layer.setStyle((feature) => style(feature))
        }
    }, [mapTiles]);

    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={[62.1282, 18.6435]}
                zoom={5}
                minZoom={5}
                scrollWheelZoom={true}
                style={{height: '91vh'}}
                maxBounds={[[70.007779, 2.403012], [52.194064, 32.681995]]}
                maxBoundsViscosity={0.0}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    bounds={[[70.007779, 2.403012], [52.194064, 32.681995]]}
                />
                {(mapTiles) && (
                    <GeoJSON
                        ref={geoJsonLayerRef}
                        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
                        data={mapTiles}
                        style={(feature) => style(feature)}
                    />
                )}

            </MapContainer>
            <div className={styles.parentSearchWrapper}>
                <MapSearchComboBox
                    setSelectedOptionCrime={setSelectedOptionCrime}
                    setSelectedOptionLoc={setSelectedOptionLoc}
                    selectedOptionCrime={selectedOptionCrime}
                    selectedOptionLoc={selectedOptionLoc}
                />
            </div>
        </div>
    )
}