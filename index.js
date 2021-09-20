
const requestUrlData = require('./request-url-data'); //Import Module


/**
 * sample URLs
 */
const sampleURLs = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


/**
 * Call using promise
 */
requestUrlData(sampleURLs).then(urlContent => {
    console.log("urlContent", urlContent);
});

/**
 * Call Using Async/Await
 */
// const testUrls = async(urls) => {
//     const urlContent = await requestUrlData(urls);
//     console.log("urlContent", urlContent);
// }
// testUrls(sampleURLs);