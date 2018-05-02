import React, { Component } from "react";
import './style.css';
import TodoList from '../TodoList';
import NewList from '../NewList';
import LogoutButton from '../LogoutButton';
import { getListsAction } from '../../redux/actions/list';
import { getTasksAction} from '../../redux/actions/tasks';

class TodoLists extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getListsAction());
        dispatch(getTasksAction());
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

export default TodoLists;