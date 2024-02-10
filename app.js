const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

// WEATHER FETCHING PART
// const weatherApiKey = keyConfig.weatherApiKey;
// const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=New%20York&units=f`;
// request({url: weatherUrl, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body);
//
//     if (error){
//         console.log("Unable to connect to weather api!");
//     }
//     else if (response.body.error){
//         console.log("Unable to find location!")
//     }
//     else {
//         console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out." );
//     }
// })


// GEO-CODING PART
// const geoApiKey = keyConfig.geoApiKey;
// const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${geoApiKey}&limit=1`;
// request({url: geoCodeUrl, json: true}, (error, response) => {
//
//     if (error){
//         console.log("Unable to connect location services!");
//     }
//
//     else if (response.body.features.length === 0){
//         console.log("Unable to find location..Try another search!");
//     }
//
//     else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// })

const address = process.argv[2];

if (!address){
    console.log("Please provide an address!")
}

else {
    geoCode(address, (error, {latitude, longitude, location}) => {
        if (error){
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}



