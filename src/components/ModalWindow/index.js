import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';
import PropTypes from 'prop-types';
import React from 'react';

const ModalWindowContainer = (props) => <ModalWindow {...props} />;

ModalWindowContainer.propTypes = {
    handleClick: PropTypes.func,
    listName: PropTypes.string
};

export default connect()(ModalWindowContainer)