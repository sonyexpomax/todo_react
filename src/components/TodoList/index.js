import React, { Component } from "react";
import TodoListItem from '../TodoListItem';
import NewTask from '../NewTask';
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
    }

    removeItem = (id) => {
        this.props.onRemove(id);
    };

    changeItem = (id) => {
        this.props.onChange(id);
    };

    addTask = (task) => {

    };

    render(){
        return (
            <div>
                <div className={'list-name'}>
                    {this.props.name}
                </div>
                <ol>
                    {this.props.tasks.map((item) => {
                        return <TodoListItem key={item.id} task={item.text} onRemove = {this.removeItem} onChange = {this.changeItem} />
                    })}
                </ol>
                <button onClick={this.addTask}>Add task</button>
                {/*<NewTask />*/}
            </div>
        )
    }
}

export default TodoList;
