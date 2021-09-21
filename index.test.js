const requestUrlData = require('./request-url-data');

test('trying with valid url', async () => {
    expect(await requestUrlData([
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json' //200
    ])).toEqual(expect.any(Array))
});

test('trying with invalid url', async () => {
    expect(await requestUrlData([
        'https://ft1-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json' //404
    ])).toEqual(expect.any(Array))
});

test('trying with wrong url', async () => {
    expect(await requestUrlData([
        'example.com/ft1-tech-test-example/gbp-usd.json' // Invalid URL
    ])).toEqual(expect.any(Array))
});