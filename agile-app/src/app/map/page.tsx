"use client"

import {ReactElement, useEffect, useRef, useState} from "react";
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {centroid} from "turf"
import {
    Feature,
    FeatureCollection,
    GeoJsonObject,
    Geometry,
    Point,
    Position
} from "geojson";
import MapSearchComboBox from "@/components/searchComboBox/mapSearchComboBox";
import styles from "./page.module.css"
import {getCrimeData} from "@/scripts/dataFetching";
import {CrimeData} from "@/scripts/dataFetching";
import {GeoJSON as LeafletGeoJSON, LatLngExpression} from "leaflet";
import MapLegend from "@/components/mapLegend/mapLegend";
import regionData from "../../../public/geojson/geoJsonRegion.json";
import municipalityData from "../../../public/geojson/geoJsonMunicipality.json";


interface CustomFeatureProperties {
    "kom_namn": string,
    "color": number,
    "l_id": number,
    "name": string,
    "geo_point_2d": LatLngExpression
}

interface NumberDictionary {
    [key: string]: number;
}

interface CustomFeatureInterface extends Feature<Geometry, CustomFeatureProperties> {
    "geometry" : {
        "type": "Polygon",
        "coordinates": Position[][]
    }
    "properties": CustomFeatureProperties
}

type CustomFeature = CustomFeatureInterface | undefined
type LayerFeature = Feature<Geometry, CustomFeatureProperties> | undefined
type Crimes = CrimeData[]


let maxCrimeValue = 0;



export default function Map() {
  /**
 * Represents a map page displaying geographical data and crime statistics.
 * 
 * This page integrates with React and React Leaflet for rendering maps and GeoJSON data.
 * It also provides functionality to fetch crime data and display it on the map.
 * 
 * @remarks
 * This page is designed to display crime data overlaid on a map with options to view data
 * at different geographical levels (e.g., municipalities, regions).
 * 
   */
    const [mapTiles, setMapTiles] = useState<GeoJsonObject | null>(null);
    const [mapMarkers, setMapMarkers] = useState<ReactElement[]>();
    const [showMarkers, setShowMarkers] = useState<boolean>(true);
    const [selectedOptionCrime, setSelectedOptionCrime] = useState<string>('');
    const [selectedOptionLoc, setSelectedOptionLoc] = useState<string>('Kommun');
    const [locationAmountDict, setLocationAmountDict] = useState<NumberDictionary | null>(null)
    const geoJsonLayerRef = useRef<LeafletGeoJSON | null>(null);
    const L = require("leaflet");
    const markerIcon = L.icon({
        iconSize: [20,37],
        iconAnchor: [15,30],
        shadowSize: [36,36],
        iconRetinaUrl: "/marker-icon-2x.png",
        iconUrl: "/marker-icon.png",
        shadowUrl:"/marker-shadow.png"})

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
        maxCrimeValue = Math.max(...Object.values(locationAmountDict));
        return locationAmountDict;

    }




    /**
     * Determines the color style for rendering GeoJSON features based on the density of crime events.
     * 
     * @param density - The density of crime events.
     * @returns The color code for rendering the feature.
     */



    function getColor(density : number) {
        const maxCrimeSixth = maxCrimeValue / 6;
        const colorMap: [number, string][] = [
            [6, '#b30000'],
            [5, '#e34a33'],
            [4, '#fc8d59'],
            [3, '#fdbb84'],
            [2, '#fdd49e'],
            [1, '#fef0d9'],
            [0, '#FFFFFF']
        ];
        for (const [threshold, color] of colorMap) {
            if (density >= maxCrimeSixth * threshold) {
                return color;
            }
        }
    }
    
    /**
     *
     * @returns An array of legend items for rendering the map legend.
     * @param maxCrimeSixth - The maximum crime value divided by six.
     * @param maxCrimeValue - The maximum crime value for selected crime.
     */
    function getLegendItems() {

        const maxCrimeSixth = maxCrimeValue / 6;
        return [
            { color: '#b30000', label:`${maxCrimeValue} händelser` },
            { color: '#e34a33', label: `> ${round((maxCrimeSixth*5), 0)} händelser`},
            { color: '#fc8d59', label: `> ${round((maxCrimeSixth*4), 0)} händelser` },
            { color: '#fdbb84', label: `> ${round((maxCrimeSixth*3), 0)} händelser` },
            { color: '#fdd49e', label: `> ${round((maxCrimeSixth*2), 0)} händelser` },
            { color: '#fef0d9', label: `> ${round((maxCrimeSixth*1), 0)} händelser` },
            { color: '#FFFFFF', label: `< ${round((maxCrimeSixth*1), 0)} händelser` },
        ];

    }


      /**
     * Styling function for GeoJSON features based on crime data and selected location type.
     * 
     * @param feature - The GeoJSON feature to style.
     * @returns The style object for rendering the feature.
     */

    function style(feature: LayerFeature) {
        if (feature == null || locationAmountDict == null) {
            return {
                fillColor: '#33CEFF',
                weight: 2,
                color: '#3368FF',
                opacity: 0.4,
                fillOpacity: 0.4
            }
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
        return {
            fillColor: '#33CEFF',
            weight: 2,
            color: '#3368FF',
            opacity: 0.4,
            fillOpacity: 0.4
        }
    }

    /**
     * Effect hook to fetch map tiles data based on the selected location type.
     */

    useEffect(() => {
        const setTiles = async () => {
            if (selectedOptionLoc == "Kommun") {
                setMapTiles(municipalityData as GeoJsonObject)
            } else if (selectedOptionLoc == "Län") {
                setMapTiles(regionData as GeoJsonObject)
            } else {
                setMapTiles(municipalityData as GeoJsonObject)
            }
        }
        setTiles()
    }, [selectedOptionLoc])

    /**
     * Effect hook to fetch crime data based on the selected crime type.
     */

    useEffect(() => {
        const setEventsOnType = async () => {
            setLocationAmountDict(await getEventsOnType(selectedOptionCrime))
        }
        setEventsOnType()
    }, [selectedOptionCrime])

    /**
     * Effect hook to update the GeoJSON layer when map tiles data changes.
     */
    useEffect(() => {
        const layer = geoJsonLayerRef.current

        if (layer && mapTiles != null) {
            layer.clearLayers().addData(mapTiles);
            layer.setStyle((feature) => style(feature))
        }
    }, [mapTiles]);

    /**
     * Effect hook to update the markers placed on highlighted parts of the map.
     * Activates when the map tiles data changes or as a cascading reaction to updating the selected crime.
     */
    useEffect(() => {
        // Variable declarations are mostly to convert from one data type to another for access to properties
        const markers : ReactElement[] = []
        if (mapTiles?.type == "FeatureCollection") {
            const featureCollection : FeatureCollection = mapTiles as FeatureCollection;
            // Iterates over each tile on the map
            featureCollection.features.forEach((feature : Feature) => {
                const typedFeature = feature as CustomFeature;
                if (typedFeature && locationAmountDict) {
                    // Calculate center of tile from polygon as latitude and longitude
                    const markerPositionFeature : Feature<Point> = centroid(feature)
                    const markerPosition = new L.latLng(markerPositionFeature.geometry.coordinates[1], markerPositionFeature.geometry.coordinates[0])
                    // Difference in external JSON document structure requires if else for region or municipality
                    if (selectedOptionLoc == "Kommun" && Object.keys(locationAmountDict).includes(typedFeature.properties.kom_namn)) {
                        markers.push(
                            <Marker position={markerPosition} icon={markerIcon} key={typedFeature.properties.kom_namn}>
                                <Popup>
                                    Plats: {typedFeature.properties.kom_namn} <br />
                                    Antal Brott: {locationAmountDict[typedFeature.properties.kom_namn]} <br />
                                    Latitud: {markerPosition.lat} <br />
                                    Longitud: {markerPosition.lng}
                                </Popup>
                            </Marker>)
                    } else if (Object.keys(locationAmountDict).includes(typedFeature.properties.name)) {
                        markers.push(
                            <Marker position={markerPosition} icon={markerIcon} key={typedFeature.properties.name}>
                                <Popup>
                                    Plats: {typedFeature.properties.name} <br />
                                    Antal Brott: {locationAmountDict[typedFeature.properties.name]} <br />
                                    Latitud: {markerPosition.lat} <br />
                                    Longitud: {markerPosition.lng}
                                </Popup>
                            </Marker>)
                    }
                }
            })
        }
        setMapMarkers(markers)
    }, [locationAmountDict, mapTiles])

    return (
        // TSX and rendering details...
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
                {(mapMarkers && showMarkers) && (
                    mapMarkers.map((marker : ReactElement) => (marker))
                )}

                <div className={styles.legends}>
                    <MapLegend legendItems={getLegendItems()} />
                </div>
            </MapContainer>
            <div className={styles.parentSearchWrapper}>
                <MapSearchComboBox
                    setSelectedOptionCrime={setSelectedOptionCrime}
                    setSelectedOptionLoc={setSelectedOptionLoc}
                    setShowMarkers={setShowMarkers}
                    selectedOptionCrime={selectedOptionCrime}
                    selectedOptionLoc={selectedOptionLoc}
                    showMarkers={showMarkers}/>
            </div>
        </div>
    );
}

function round(num: number, fractionDigits: number): number {
    return Number(num.toFixed(fractionDigits));
}
