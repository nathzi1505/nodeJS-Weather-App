const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const URL = "https://api.darksky.net/forecast/cefceb40eb27eb0aaeee21816f599fd8/" + latitude + "," + longitude + "?units=si"
    request({ url: URL, json: true}, (error, {body}) => {
        if (error){
            callback("Unable to connect to weather service.", undefined)
        } else if (body.error) {
            callback("Unable to find location.", undefined)
        } else {
            callback(undefined,
                body.daily.data[0].summary + 
                    " It is currently " + body.currently.temperature + " degrees out. There is a " 
                    + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast