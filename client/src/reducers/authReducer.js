import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USER: 
            // when is not logged the api
            // returns a empty string
            return action.payload || false
        default:
            return state;
    }
}