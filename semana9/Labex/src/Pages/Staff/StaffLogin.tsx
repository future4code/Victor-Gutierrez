import React from 'react';
import StaffLogin from '../../Components/Login/StaffLogin/stafflogin';
import { useAdminRedirectOutOfLogin } from '../../Hooks/useAdminRedirect';

export default function Staff() {
    useAdminRedirectOutOfLogin();
    return (
        <>
            <StaffLogin />
        </>
    );
}
