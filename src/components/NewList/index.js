import './style.css';
import {addListAction} from '../../redux/actions/list';
import { connect } from 'react-redux';
import NewList from './NewList';
import PropTypes from 'prop-types';
import React from 'react';

const NewListContainer = (props) => <NewList {...props} />;

NewListContainer.propTypes = {
    addList: PropTypes.func
};

function mapDispatchToProps (dispatch) {
    return ({
        addList: (newList) => dispatch(addListAction(newList))
    });
}

export default connect(null, mapDispatchToProps)(NewListContainer)