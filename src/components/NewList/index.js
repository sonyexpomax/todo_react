import React from "react";
import NewList from './NewList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addListAction} from "../../redux/actions/list";
import './style.css';

const propTypes = {
//
};

const NewListContainer = (props) => <NewList {...props} />;

NewListContainer.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return ({
        addList: (newList) =>  dispatch(addListAction(newList))
    });
}

export default connect(null, mapDispatchToProps())(NewListContainer)