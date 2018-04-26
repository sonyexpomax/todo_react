import React, { Component } from "react";
import TodoListItem from '../TodoListItem';
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
            </div>
        )
    }
}

export default TodoList;
