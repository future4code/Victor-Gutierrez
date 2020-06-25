import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const useAdminRedirect = () => {
    const history = useHistory();

    useEffect(() => {
        const AdminToken = sessionStorage.getItem('adminToken');

        if (AdminToken === null || AdminToken === undefined) {
            history.replace('/');
        }
    }, [history]);
};

export const useAdminRedirectOutOfLogin = () => {
    const history = useHistory();

    useEffect(() => {
        const AdminToken = sessionStorage.getItem('adminToken');

        if (AdminToken) {
            history.replace('/staff/dashboard');
        }
    }, [history]);
};
