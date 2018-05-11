import './style.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ModalWindow extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShown: true
        };
    }
    onClick (res) {
        this.setState({isShown: false});
        this.props.handleClick(res);
    }
    render () {
        return (
            <div id="myModal" className = { "td-modal-wrap"}>
                <div className="td-modal-content">
                    <div className='td-modal-head'>
                        <h2>Delete List</h2>
                        <div className="td-modal-close" onClick={this.onClick.bind(this, false)}>&times;</div>
                    </div>
                    <p>Do you realy want to delete list "{this.props.listName}"</p>
                    <div className='td-modal-btn'>
                        <button className='td-modal-ok' onClick={this.onClick.bind(this, true)}>Delete</button>
                        <button className='td-modal-cancel' onClick={this.onClick.bind(this, false)}>Cancel</button>
                    </div>

                </div>
            </div>
        )
    };
};

ModalWindow.propTypes = {
    handleClick: PropTypes.func,
    listName: PropTypes.string
};

export default ModalWindow;
