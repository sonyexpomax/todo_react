import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';

class NewList extends Component{

    constructor(props){
        super(props);
        this.state = {
            newList: ''
        };
    }

    onChangeName = (e) => {
        this.setState({newList: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { newList } = this.state;
        if (newList) {
            this.props.addList(newList);
        }
        this.setState({newList:''});
    };

    render(){
        return (
            <div className='td-new-list-wrap'>
                <h1> Add new list </h1>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChangeName} placeholder="Input list name" className='td-new-list-add-list-text' value={this.state.newList}/>
                    <button type="submit" className='td-new-list-add-list-btn'>Add</button>
                </form>
            </div>
        );
    }
}

NewList.propTypes = {
    addList: PropTypes.func,
};

export default NewList;