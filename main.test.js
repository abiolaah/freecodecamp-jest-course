const {fetchData, fetchPromise} = require("./main");

test('the data is peanut butter with callback', done => {
    const callback = (data) => {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback)
});

test('the data is peanut butter with Promise', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch-Promise fails with an error', () => {
    return expect(fetchPromise(true)).rejects.toThrow('Error');
});

test('the data is peanut butter with async-await', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});