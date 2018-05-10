import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewList extends Component{
    constructor (props) {
        super(props);
        this.state = {
            newList: '',
            isAdding: false
        };
    }

    onChangeName = (e) => {
        this.setState({
            newList: e.target.value,
        });
    };

    onFocusText = (e) => {
        this.setState({
            isAdding: true,
            newList: 'New list',
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        const { newList } = this.state;
        if (newList) {
            this.props.addList(newList);
        }
        this.setState({
            newList: '',
            isAdding: false
        });
    };
    onCancel = (e) =>{
        e.preventDefault();
        this.setState({
            newList: '',
            isAdding: false
        });
    };

    render () {
        return (
            <div className='td-new-list-wrap'>
                <form>
                    <input
                        id='new-list'
                        onChange={this.onChangeName}
                        onClick={this.onFocusText}
                        placeholder="Enter List name"
                        value={this.state.newList}
                    />
                    <button
                        type="submit"
                        className={this.state.isAdding ? 'td-new-list-add-btn td-new-list-visible-btn' : 'td-new-list-add-btn'}
                        onClick={this.onSubmit}>
                        Create List
                    </button>
                    <button
                        className={this.state.isAdding ? 'td-new-list-cancel-btn td-new-list-visible-btn' : 'td-new-list-cancel-btn'}
                        onClick={this.onCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

NewList.propTypes = {
    addList: PropTypes.func
};

export default NewList;
