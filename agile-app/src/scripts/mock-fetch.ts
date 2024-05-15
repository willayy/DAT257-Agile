export function mockFetch() {
    let data = {
                id: 1,
                datetime: "2021-06-01 12:00:00",
                name: "Test",
                summary: "Test",
                url: "http://test.com",
                type: "Test",
                location: {
                    name: "Test",
                    gps: "Test"
                }
            };
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      }),
    );
  }