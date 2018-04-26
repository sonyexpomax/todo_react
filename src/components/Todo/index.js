import React, { Component } from "react";
import { connect } from 'react-redux';
import './style.css';
import TodoList from '../TodoList';

class Todo extends Component{

    removeTask = (id) => {

    };

    changeTaskState = (id) => {

    };

    addTask = () => {

    };

    renameList = (id) => {

    };

    removeList = (id) => {

    };

    addList = () => {

    };

    render(){
        return (
            <div>
                <h1>Task lists</h1>
                {this.props.testStore.lists.map(list => (
                    <TodoList
                        key={list.id}
                        tasks={list.tasks}
                        onRemoveTask = {this.removeTask}
                        onAddTask = {this.addTask}
                        onChangeTask = {this.changeTaskState}
                        onAddList = {this.addList}
                        onRemoveList = {this.removeList}
                        onRenameList = {this.renameList}
                    />
                ))}
                <button onClick={this.addList}>Add new list</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTask: (task) => {
            console.log(task);
            dispatch({type: 'ADD_TASK', payload: task})
        },
        onChangeTask: (id) => {
            console.log(id);
            dispatch({type: 'CHANGE_TASK_STATE', payload: id})
        },
        onRemoveTask: (id) => {
            console.log(id);
            dispatch({type: 'REMOVE_TASK', payload: id})
        }
    })
)
(Todo);