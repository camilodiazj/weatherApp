const axios = require('axios');

const getCityLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'f6baa4434fmsh0c21948dc1eef0ap11f1ffjsndf6b60207e0d' }
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        direction,
        latitude,
        longitude
    }

}

module.exports = {
    getCityLatLng
}