import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import TodoList from '../TodoList'

const getVisibleTodos = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
        case 'SHOW_COMPLETED':
            return tasks.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return tasks.filter(t => !t.completed)
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: getVisibleTodos(state.tasks, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList