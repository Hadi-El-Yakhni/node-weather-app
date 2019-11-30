const request = require('request')
const mapboxToken = process.env.mapboxToken

const getGeoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxToken}&limit=1`
  const options = { url, json: true }
  request(options, (error, response) => {
    if (error)
      callback('Unable to connect to location services!')
    else if (response.body.features.length === 0)
      callback('Unable to find location. Try another search.')
    else {
      const { place_name: placeName, center } = response.body.features[0]
      const longitude = center[0]
      const latitude = center[1]
      callback(undefined, { placeName, longitude, latitude })
    }
  })
}

module.exports = getGeoCode