import React, { Component } from "react";
import './style.css';

class NewList extends Component{

    addList = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.refs.taskInput.value);
        this.refs.taskInput.value = '';
    };

    render(){
        return (
            <div>
                <h3>Add new list</h3>
                <form onSubmit={this.addList} className={'add-form'}>
                    <input ref='taskInput' placeholder="Input list name" className={'add-text'} />
                    <button type="submit" className={'add-button'}>Add</button>
                </form>
            </div>
        );
    }
}
export default NewList;