const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Name of your city to get the weather.',
        demand: true
    }
}).argv;

module.exports = {
    argv
}