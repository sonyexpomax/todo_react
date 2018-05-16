import './style.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import LogoutButton from '../LogoutButton';

const Head = (props) => {
    return (
        <h1 className='td-head-wrapper'>
            Sample ToDo List
            {props.loggedIn && (<Link to='/login'><LogoutButton/></Link>)}
        </h1>

    );
};

export default Head;
