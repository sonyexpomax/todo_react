import {
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS
} from '../constants/list'

// export function getLists() {
//
//     return (dispatch) => {
//         dispatch({
//             type: GET_LISTS_REQUEST,
//             payload: year
//         });
//
//         axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then(res => {
//                 dispatch({
//                     type: GET_LISTS_SUCCESS,
//                     payload: [1,2,3,4,5]
//                 })
//             })
//     }
// }

function requestLists(res) {
    return {
        type: GET_LISTS_REQUEST,
        res
    }
}

function receiveLists(res, json) {
    return {
        type: GET_LISTS_SUCCESS,
        res,
        lists: json.data.children.map(child => child.data),
    }
}

function fetchLists(subreddit) {
    return dispatch => {
        dispatch(requestLists(subreddit));
        return axios.get(`http://localhost/v1/lists`)
            .then(response => response.json())
            .then(
                (json) => {
                    console.log(json);
                    dispatch(receiveLists(subreddit, json))
                }
        )
    }
}

