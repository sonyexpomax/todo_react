import { combineReducers } from 'redux'
import lists from './lists';
import tasks from './tasks';
import user from './user'
import ui from './ui';

export default combineReducers({
    lists,
    tasks,
    user,
    ui
})