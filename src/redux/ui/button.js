import {START_REQUEST} from '../constants/ui';
import {STOP_REQUEST} from '../constants/ui';

export function startRequest () {
    return { type: START_REQUEST};
}

export function stopRequest () {
    return { type: STOP_REQUEST};
}