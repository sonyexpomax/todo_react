import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RouterCreate = (props) => {
    return (
        props.onEnter
            ? <Route {...props} />
            : <Redirect to="/login"/>
    )
};

export default RouterCreate;