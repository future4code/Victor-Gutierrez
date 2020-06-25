import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const useClientRedirect = () => {
    const history = useHistory();

    useEffect(() => {
        const virtualToken = localStorage.getItem('virtualUserToken');

        if (virtualToken !== 'true') {
            history.push('/login');
        }
    }, [history]);
};

export const useClientRedirectOutOfLogin = () => {
    const history = useHistory();

    useEffect(() => {
        const virtualToken = localStorage.getItem('virtualUserToken');
        const AdminToken = sessionStorage.getItem('adminToken');

        if (virtualToken === 'true') {
            history.push('/trips');
        } else if (AdminToken) {
            history.replace('/staff/dashboard');
        }
    }, [history]);
};
