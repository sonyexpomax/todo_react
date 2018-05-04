import { combineReducers } from 'redux'
import lists from './lists';
import tasks from './tasks';
import ui from './ui';
import user from './user';

export default combineReducers({
    lists,
    tasks,
    user,
    ui
});
