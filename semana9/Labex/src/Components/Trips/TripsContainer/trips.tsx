import React from 'react';

import TripCard from '../TripCard/TripCard';

import { Container } from './trips_styles';
import { useLabeX_getTrip } from '../../../Hooks/useLabeX';

export default function TripsContainer() {
    const [trips] = useLabeX_getTrip();

    return (
        <Container>
            {trips.map((item) => (
                <TripCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    planet={item.planet}
                />
            ))}
        </Container>
    );
}
