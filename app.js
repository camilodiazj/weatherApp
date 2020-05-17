const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const weather = require('./weather/weather');

const getWeatherByCoordinates = async(direction) => {
    try {
        const coordinates = await lugar.getCityLatLng(direction);
        const temp = await weather.getWeather(coordinates.latitude, coordinates.longitude);
        return `The weather temperature of ${coordinates.direction} is ${temp}°C`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direction}`, error);
    }
};

getWeatherByCoordinates(argv.direction)
    .then(console.log)
    .catch(console.log);