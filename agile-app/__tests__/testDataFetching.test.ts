import { getCrimeData } from "@/scripts/dataFetching";

describe('Test datafetching', () => {
  test('Text fetched crime data', async () => {
    const crimeData = await getCrimeData();
    expect(crimeData).not.toBeNull(); // Check that the data is not null
    expect(crimeData.length).toBeGreaterThan(0); // Check that the data set is not empty
    // Vlaidate that the data has the expected properties
    expect(crimeData[0]).toHaveProperty('datetime'); 
    expect(crimeData[0]).toHaveProperty('id');
    expect(crimeData[0]).toHaveProperty('location');
    expect(crimeData[0]).toHaveProperty('name');
    expect(crimeData[0]).toHaveProperty('summary');
    expect(crimeData[0]).toHaveProperty('type');
    expect(crimeData[0]).toHaveProperty('url');
  });
});