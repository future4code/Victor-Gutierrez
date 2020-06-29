import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
    runClientAuthCheck,
    runAdminAuthCheck,
} from '../../../Hooks/useAuthentication';

export const PrivateClientRoute = ({ ...props }) => {
    return runClientAuthCheck() ? (
        <Route {...props} />
    ) : (
        <Redirect to="/login" />
    );
};

export const PrivateAdminRoute = ({ ...props }) => {
    return runAdminAuthCheck() ? <Route {...props} /> : <Redirect to="*" />;
};

export const RedirectIfAdminLogged = ({ ...props }) => {
    return runAdminAuthCheck() ? (
        <Redirect to="/staff/dashboard" />
    ) : (
        <Route {...props} />
    );
};

export const RedirectIfClientLogged = ({ ...props }) => {
    return runClientAuthCheck() ? (
        <Redirect to="/trips" />
    ) : (
        <Route {...props} />
    );
};
