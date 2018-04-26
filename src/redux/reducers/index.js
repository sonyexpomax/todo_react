import { combineReducers } from 'redux'

import lists from './lists';
import tasks from './tasks';
import userInfo from './user_info'

export default combineReducers({
    lists,
    tasks,
    userInfo
})