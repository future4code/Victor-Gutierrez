import React from 'react';
import TripsContainer from '../../Components/Trips/TripsContainer/trips';
import { useClientRedirect } from '../../Hooks/useClientRedirect';

export default function Trips() {
    useClientRedirect();

    return (
        <div>
            <TripsContainer />
        </div>
    );
}
