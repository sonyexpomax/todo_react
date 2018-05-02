import React, { Component } from "react";
import TodoListItem from '../Task';
import NewTask from '../NewTask';
import './style.css';
import { renameListAction, removeListAction } from '../../redux/actions/list';
import { showFinishedTasksAction, showAllTasksAction } from '../../redux/actions/tasks';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isEditable: false,
            name: this.props.list.label,
        };
    }

    // componentDidMount(){
    //     console.log('did mount todo lists');
    //     const { dispatch } = this.props;
    //     dispatch(getTasksAction());
    // }

    onChangeState = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };

    onEdit = (e) => {
        e.preventDefault();
        this.setState({isEditable: !this.state.isEditable});
    };

    setChangeName = (e) => {
        e.preventDefault();
        this.props.dispatch(renameListAction(this.props.list.id, this.state.name));
        this.setState({isEditable: !this.state.isEditable});
    };

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    };

    onRemove = (e) => {
        e.preventDefault();
        this.props.dispatch(removeListAction(this.props.list.id));
    };

    render(){
        // let listTasks = (!this.props.tasks==undefined) ?
        //     this.props.tasks.filter(item => item.list_id === this.props.list.id) :
        //     [];
        let headText = !this.state.isEditable ?
            (<h2>List "{this.props.list.label}"</h2>) :
            (<input type='text' value={this.state.name} onChange={this.onChangeName}/>);

        let tasks = this.props.tasks.length ?
            (<ol>
                {this.props.tasks.map((item) => {
                    return (
                        <li key={item.id}>
                            <TodoListItem task={item} />
                        </li>
                    )
                })}
            </ol>) :
            (<p className={'empty-list'}>List is empty</p>);

        return (
            <div className={'list'}>
                <div className={'list-head'}>
                    <div className={'list-head-text'}>
                        <i onClick={this.onChangeState} className = {!this.state.isOpen ? 'arrow-right' : 'arrow-down' }></i>
                        {headText}
                        <button
                            onClick={this.setChangeName}
                            className={'list-head-text'}
                            style={{display: this.state.isEditable ? 'inline-block' : 'none' }}>
                            Save
                        </button>
                    </div>
                    <div className={'list-head-actions'}>
                        <small className={'remove-list'} onClick={this.onRemove}>delete</small>
                        <small className={'rename-list'} onClick={this.onEdit}>rename</small>
                    </div>
                </div>
                <div style={{display: this.state.isOpen ? 'block' : 'none' }}>
                    {tasks}
                    <NewTask listId = {this.props.list.id}/>
                </div>
                <hr className={'list-line'}/>
            </div>
        )
    }
}

export default TodoList;
