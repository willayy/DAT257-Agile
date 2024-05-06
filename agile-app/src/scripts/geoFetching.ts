export async function fetchRegionData() {
    const url = new URL("https://raw.githubusercontent.com/okfse/sweden-geojson/master/swedish_regions.geojson")

    // Fetch a response from the URL
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data, message: " + res.statusText);
    }

    // Parse the response to JSON and then into a CrimeData array
    const jsonData = await res.json();
    const stringData = JSON.stringify(jsonData, null, 2);
    return stringData;
}