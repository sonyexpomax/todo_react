import './style.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='td-home-page-wrapper'>
            <Link to='/login' className='td-home-page-link'>Login</Link>
            <Link to='/registration' className='td-home-page-link'>Registration</Link>
            <Link to='/lists' className='td-home-page-link'>Lists</Link>
        </div>
    );
};

export default withRouter(HomePage);
