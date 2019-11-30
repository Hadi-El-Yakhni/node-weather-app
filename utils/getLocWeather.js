const getGeoCode = require('./getGeoCode')
const getWeather = require('./getWeather')

const getLocWeather = (location, res) => {
  getGeoCode(location, (error, locInfo) => {
    if (error && !res)
      return console.log('Error: ', error)
    if (error && res)
      return res.send({ error: 'Check the location, the internet connection and try again!' })
    const { latitude, longitude, placeName } = locInfo
    getWeather(placeName, { latitude, longitude }, (error, weatherText, weatherObject) => {
      if (error && !res)
        return console.log('error:', error)
      else if (error && res)
        return res.send({ error: 'Check the location, the internet connection and try again!' })
      else if (!res)
        return console.log(weatherText)
      return res.send(weatherObject)
    })
  })
}

module.exports = getLocWeather