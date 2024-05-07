import { GeoJsonObject } from 'geojson';

export async function fetchRegionData(): Promise<GeoJsonObject> {
    const url = new URL("https://raw.githubusercontent.com/okfse/sweden-geojson/master/swedish_regions.geojson");

    // Fetch a response from the URL
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    // Parse the response to JSON
    const jsonData = await res.json();

    return jsonData;
}

export async function fetchMunicipalityData(): Promise<GeoJsonObject> {
    const url = new URL("https://raw.githubusercontent.com/okfse/sweden-geojson/master/swedish_municipalities.geojson");

    // Fetch a response from the URL
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    // Parse the response to JSON
    const jsonData = await res.json();

    return jsonData;
}
