import React, { Component } from "react";
import './style.css';
import TodoList from '../TodoList';
import NewList from '../NewList';
import LogoutButton from '../LogoutButton';

class TodoLists extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getLists();
        this.props.getTasks();
    }

    render(){
        console.log(this.props.lists.items);
        return (
            <div className={'lists'}>
                <LogoutButton />
                <h1>Task lists</h1>
                {(this.props.lists.items) ?
                    this.props.lists.items.map(list => (
                    <TodoList key={list.id} list={list} />
                    ))
                    : ''
                }
                <NewList/>
            </div>
        )
    }
}

TodoLists.propTypes = {
    lists: PropTypes.object,
    getLists: PropTypes.function,
    getTasks: PropTypes.function
};

export default TodoLists;