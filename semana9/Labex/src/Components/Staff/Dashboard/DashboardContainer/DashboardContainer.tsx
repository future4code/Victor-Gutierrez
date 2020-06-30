import React from 'react';
import { Container } from '../../../SharedStyles/SharedStyles';
import DashboardCard from '../DashboardCard/DashboardCard';
import { Wrapper } from './Dashboard_styles';

export default function Dashboard() {
    return (
        <Container>
            <Wrapper>
                <DashboardCard title="Criar nova viagem" toWhere={'/create'} />
                <DashboardCard
                    title="Listar viagens e candidatos"
                    toWhere={'/tripsmanagement'}
                />
            </Wrapper>
        </Container>
    );
}
