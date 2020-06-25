import React from 'react';
import { useAdminRedirect } from '../../Hooks/useAdminRedirect';
import Dashboard from '../../Components/Staff/Dashboard/Dashboard';

export default function DashBoard() {
    useAdminRedirect();
    return (
        <>
            <Dashboard />
        </>
    );
}
