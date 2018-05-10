import './style.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ModalWindow extends Component{
    constructor(props){
        this.state = {
            isShown: true
        }
    }

    onClick = (res) => {
        this.setState({isShown: false});
        props.handleClick(res);
    }

    render () {
        return (
            <div id="myModal" className = {this.state.isShown ? "td-modal-wrap" : "td-modal-wrap td-modal-disable"}>
                <div className="td-modal-content">
                    <span className="td-modal-close">&times;</span>
                    <p>Some text in the Modal..</p>
                    <button className='td-modal-ok' onClick={this.onClick(true)}>Ok</button>
                    <button className='td-modal-cancel' onClick={this.onClick(false)}>Cancel</button>
                </div>
            </div>
        )
    };
};

ModalWindow.propTypes = {
    handleClick: PropTypes.func
};

export default ModalWindow;
