import {START_REQUEST, STOP_REQUEST} from "../constants/ui";

const initialState = [{isRequest:false}];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case START_REQUEST:
            return {isRequest:true};
        case STOP_REQUEST:
            return {isRequest:false};
        default:
            return state
    }
}