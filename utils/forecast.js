const request = require('request');
const keyConfig = require('../keyConfig');

const forecast = (latitude, longitude, callback) => {
const weatherApiKey = keyConfig.weatherApiKey;
const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${latitude},${longitude}&units=f`;
request({url: weatherUrl, json: true}, (error, response) => {

    if (error){
        callback("Unable to connect to weather api!", undefined)
    }
    else if (response.body.error){
        callback("Unable to find location!", undefined)
        console.log(weatherUrl);
    }
    else {
        callback(undefined, "It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out." )
    }
})
}

module.exports = forecast;
