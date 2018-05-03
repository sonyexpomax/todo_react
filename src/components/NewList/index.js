import React from "react";
import NewList from './NewList';
import { connect } from 'react-redux';
import {addListAction} from "../../redux/actions/list";
import './style.css';
import PropTypes from 'prop-types'

const NewListContainer = (props) => <NewList {...props} />;

NewListContainer.propTypes = {
    addList: PropTypes.func,
};

function mapDispatchToProps (dispatch) {
    return ({
        addList: (newList) =>  dispatch(addListAction(newList))
    });
}

export default connect(null, mapDispatchToProps)(NewListContainer)