const request = require('request');
const keyConfig = require('../keyConfig');

// GEO-CODING PART WITH CALLBACKS
const geoCode = (address, callback) => {
    const geoApiKey = keyConfig.geoApiKey;
    const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=${geoApiKey}&limit=1`;

    request({url: geoCodeUrl, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect to location services!",  undefined)
        }

        else if (response.body.features.length === 0){
            callback("Unable to find location! Try another search..", undefined)
        }

        else {
            callback(undefined, {
                latitude:  response.body.features[0].center[1],
                longitude:  response.body.features[0].center[0],
                location:  response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geoCode;