
const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeatherAction(city) {


    return {
        type: FETCH_WEATHER,
        payload: city
    }
}