import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS
} from '../constants/list'

export function getLists() {

    return (dispatch) => {
        dispatch({
            type: GET_LISTS_REQUEST,
            payload: year
        });

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                dispatch({
                    type: GET_LISTS_SUCCESS,
                    payload: [1,2,3,4,5]
                })
            })
    }
}