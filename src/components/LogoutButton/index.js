import React  from "react";
import LogoutButton from './LogoutButton';
import { connect } from 'react-redux';
import {logoutAction} from "../../redux/actions/authentificate";
import PropTypes from 'prop-types';
import './style.css';

const LogoutButtonContainer = (props) => <LogoutButton {...props} />;

LogoutButtonContainer.propTypes = {
    singOut: PropTypes.func
};

function mapDispatchToProps (dispatch) {
    return ({
        signOut: () =>  dispatch(logoutAction())
    });
}

export default connect(null,mapDispatchToProps)(LogoutButtonContainer)