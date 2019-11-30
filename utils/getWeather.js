const request = require('request')
const darkskyToken = process.env.darkskyToken

const getWeather = (location, { latitude, longitude }, callback) => {
  const url = `https://api.darksky.net/forecast/${darkskyToken}/${latitude},${longitude}?units=si`
  const options = {
    url,
    json: true
  }
  request(options, (error, response) => {
    if (error)
      callback('Unable to connect to weather services!')
    else if (response.body.error)
      callback(response.body.error)
    else {
      const {
        temperature,
        precipProbability: percProba
      } = response.body.currently
      const forecast = response.body.daily.data[0].summary
      const weatherText = `${forecast}. It is currently ${temperature} degrees out. there is ${percProba}% chance of rain.`
      weatherObject = { temperature, forecast, location }
      callback(undefined, weatherText, weatherObject)
    }
  })
}

module.exports = getWeather