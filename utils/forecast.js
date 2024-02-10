const request = require('request');
const keyConfig = require('../keyConfig');

const forecast = (latitude, longitude, callback) => {
const weatherApiKey = keyConfig.weatherApiKey;
const url = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${latitude},${longitude}&units=f`;
request({url, json: true}, (error, { body }) => {

    if (error){
        callback("Unable to connect to weather api!", undefined)
    }
    else if (body.error){
        callback("Unable to find location!", undefined)
        console.log(url);
    }
    else {
        callback(undefined, "It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out." )
    }
})
}

module.exports = forecast;
