const request = require('request')

const geocode = (address, callback) => {
    const GEOCODING_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibmF0aHppMTUwNSIsImEiOiJjazg4a3o0dDIwOTZ4M2xtajk5ODM0eWI3In0.1D8YEYUkJXCjqo1k7dAWCA&limit=1"
    request({ url: GEOCODING_URL, json: true}, (error, {body}) => {    
        if (error) {
            callback("Unable to connect to geocoding service.", undefined)
        }
        else if (body.features.length === 0) {
            callback("Unable to find coordinates for the location.", undefined)
        } else {
            callback(undefined, {
                    longitude: body.features[0].center[0],
                    latitude: body.features[0].center[1],
                    location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode