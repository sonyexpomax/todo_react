import React, { Component } from "react";
import { connect } from 'react-redux';
import './style.css';
import TodoList from '../TodoList';

class Todo extends Component{

    render(){
        return (
            <div>
                <h1>Task lists</h1>
                {this.props.testStore.lists.map(list => (
                    <TodoList />
                ))}
                <button onClick={this.addList}>Add new list</button>
            </div>
        )
    }
}

export default connect()(Todo);