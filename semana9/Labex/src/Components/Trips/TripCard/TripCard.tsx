import React from 'react';
import { Title, Planet, Container } from './TripCard_styles';

import { Trip } from '../../../Types/interfaces';
import { Link } from 'react-router-dom';

export default function TripCard({ id, name, planet }: Trip) {
    return (
        <>
            <Container>
                <Link to={`/trip/details/${id}`}>
                    <Title>{name}</Title>
                </Link>
                <Planet>{planet}</Planet>
            </Container>
        </>
    );
}
