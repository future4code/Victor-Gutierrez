import LoginForm from '../../Components/Login/ClientLogin/login';
import React from 'react';
import { useClientRedirectOutOfLogin } from '../../Hooks/useClientRedirect';

export default function Login() {
    useClientRedirectOutOfLogin();

    return (
        <>
            <LoginForm />
        </>
    );
}
