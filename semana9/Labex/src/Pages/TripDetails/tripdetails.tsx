import React from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../Types/interfaces';
import { useClientRedirect } from '../../Hooks/useClientRedirect';
import { useLabeX_getTripDetail } from '../../Hooks/useLabeX';

export default function TripDetails() {
    useClientRedirect();

    const params = useParams<RouteParams>();

    return <div>{params.id}</div>;
}
