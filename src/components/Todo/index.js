import React, { Component } from "react";
import { connect } from 'react-redux';
import './style.css';

class Todo extends Component{

    removeTaskFromState = (id) => {
        this.props.onRemoveTask(id);
    };

    changeStateInState = (id) => {
        this.props.onUpdateTask(id);
    };

    render(){
        return (
            <div>
                <h1>dklerhlshkl</h1>
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
            dispatch({type: 'UPDATE_TASK', payload: id})
        }
    })
)
(Todo);