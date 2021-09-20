const phin = require("phin");
const URL = require("url").URL;


/**
 * Default export function
 * @param {Array<string>} strArray
 * @returns Promise
 */
module.exports = async (strArray = []) => {
    return await Promise.all(strArray.map(str => getJson(str)));
}

/**
 * Function to read data from the URL and send response into the JSON
 * @param {*} str 
 * @returns 
 */
const getJson = (str = "") => {

    /**
     * Custom Promise to handle URL details
     */
    return new Promise(async (resolve, reject) => {

        /**
         * Set default params
         */
        const data = {
            "url": str,
            "isValidUrl": isValidUrl(str), // Validate URL
            "statusCode": null,
            "error": null,
            "data": null
        }

        try {

            /**
             * Check URL validation
             * If URL is invalid, then don't need to be perfom operation
             * If URL is valid then try to get JSON response
             */
            if (!data['isValidUrl']) {
                data['error'] = `Invalid URL`;
            } else {

                /**
                 * Get response from the URL
                 */
                const response = await phin({ url: str });

                /**
                 * Set response status
                 */
                data["statusCode"] = response.statusCode;

                try {
                    /**
                     * Try to parse response body
                     */
                    data["body"] = JSON.parse(response.body);
                }
                catch (parseError) {
                    /**
                     * handle JSON parse error
                     */
                    data["error"] = `Parse error: ${parseError}`;
                }
            }

        } catch (error) {
            data["error"] = error;
            console.error("<< --- error --->> ", error);
        } finally {
            /**
             * Return response using resolve
             */
            resolve(data);
        }
    });
}

/**
 * Function to check if the provided string is a valid URL or not.
 * @param {str} str
 * @returns {boolean}
 */
const isValidUrl = (str = "") => {
    try {
        new URL(str);
        return true;
    } catch (err) {
        return false;
    }
};