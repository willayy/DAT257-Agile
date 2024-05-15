import { getCrimeData } from "@/scripts/dataFetching";

describe('Test example module', () => {
  test('Expects 1 to be equal to 1', () => {
    const crimeData = getCrimeData();
  });
});