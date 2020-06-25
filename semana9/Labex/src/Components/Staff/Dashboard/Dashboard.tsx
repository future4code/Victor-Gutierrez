import React from 'react';
import { Container } from '../../SharedStyles/SharedStyles';
import DashboardCard from './DashboardCard';

export default function Dashboard() {
    return (
        <Container>
            <DashboardCard
                title="Criar nova viagem"
                toWhere={'staff/dashboard/create'}
            />
            <DashboardCard
                title="Listar viagens e candidatos"
                toWhere={'staff/dashboard/tripsmanagement'}
            />
        </Container>
    );
}
