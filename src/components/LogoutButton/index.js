import React  from "react";
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

const propTypes = {
//
};

const LogoutButtonContainer = (props) => <LogoutButton {...props} />;

LogoutButtonContainer.propTypes = propTypes;

function mapStateToProps(store) {

}

export default connect(mapStateToProps)(LogoutButtonContainer)