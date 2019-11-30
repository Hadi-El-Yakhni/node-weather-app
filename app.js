const yargs = require('yargs')
const getLocWeather = require('./utils/getLocWeather')
debugger
yargs.command({
  command: 'getWeather',
  describe: 'Get the Weather in the given location',
  builder: {
    location: {
      describe: 'The location provided',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => getLocWeather(argv.location)
})

yargs.parse()