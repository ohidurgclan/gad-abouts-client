import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { admin, loading } = useAuth();
     if (loading) { <Spinner animation="grow" variant="secondary" />}
    return (
        <Route
            {...rest}
            render={({ location }) => admin ? children : <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;