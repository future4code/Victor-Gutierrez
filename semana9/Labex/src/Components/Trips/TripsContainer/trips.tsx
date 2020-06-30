import React from 'react';

import TripCard from '../TripCard/TripCard';

import { Container } from './trips_styles';
import { useLabeX_getTrip } from '../../../Hooks/useLabeX';
import { useLoading } from '../../../Hooks/useLoading';

export default function TripsContainer() {
    const [trips] = useLabeX_getTrip();
    const { LoadingGif } = useLoading();

    return (
        <Container>
            {trips.length === 0 ? (
                LoadingGif
            ) : (
                <>
                    {trips.map((item) => (
                        <TripCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            planet={item.planet}
                            durationInDays={item.durationInDays}
                            date={item.date}
                            description={item.description}
                        />
                    ))}
                </>
            )}
        </Container>
    );
}
