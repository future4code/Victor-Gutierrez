import React from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../Types/interfaces';

import { Container } from '../../Components/SharedStyles/SharedStyles';

import SubscribeForm from '../../Components/TripSubscription/SubscribeForm';
import { SelectedTripInfo } from '../../Components/TripInfo/SelectedTripInfo';

export default function TripDetails() {
    const params = useParams<RouteParams>();

    return (
        <Container style={{ padding: 30 }}>
            <SelectedTripInfo id={params.id} />
            <SubscribeForm Tripid={params.id} />
        </Container>
    );
}
