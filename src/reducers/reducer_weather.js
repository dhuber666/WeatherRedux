
import { FETCH_WEATHER} from '../actions/index';

export default function(state = null, action) {
    console.log(action.payload);
    switch(action.type) {
        case FETCH_WEATHER:
            return action.payload;
    }

    return state;
}