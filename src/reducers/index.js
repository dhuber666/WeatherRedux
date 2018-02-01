import { combineReducers } from 'redux';
import FetchWeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: FetchWeatherReducer
});

export default rootReducer;
