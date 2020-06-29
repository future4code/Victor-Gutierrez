import React from 'react';
import { Title, Planet, Container, Background, Card } from './TripCard_styles';

import { Trip } from '../../../Types/interfaces';
import { Link } from 'react-router-dom';

export default function TripCard({
    id,
    name,
    planet,
    durationInDays,
    date,
}: Trip) {
    return (
        <>
            <Card>
                <Background planet={planet} />
                <Container>
                    <Link to={`/trips/${id}`}>
                        <Title>{name}</Title>
                        <p>{durationInDays} dias</p>
                    </Link>
                    <Planet>{planet}</Planet>
                </Container>
            </Card>
        </>
    );
}
