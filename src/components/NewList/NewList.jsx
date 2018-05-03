import React, { Component } from "react";
import './style.css';

class NewList extends Component{

    constructor(props){
        super(props);
        this.state = {
            newList: '',
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
    };

    render(){
        return (
            <div className={'new-list'}>
                <h1> Add new list </h1>
                <form onSubmit={this.onSubmit} className={'add-form'}>
                    <input onChange={this.onChangeName} placeholder="Input list name" className={'add-list-text'} />
                    <button type="submit" className={'add-list-btn'}>Add</button>
                </form>
            </div>
        );
    }
}

NewList.propTypes = {
    addList: PropTypes.function,
};

export default NewList;