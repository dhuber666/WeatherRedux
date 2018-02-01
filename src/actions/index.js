import axios from 'axios';



export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '6034981bd4bc37cb6b161b2c1a8aac2e';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {

    const url = `${BASE_URL}&q=${city}, AT`;

    const weatherPromise = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: weatherPromise
    }
}