import React from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../Types/interfaces';

export default function TripDetails() {
    const params = useParams<RouteParams>();

    return <div>{params.id}</div>;
}
