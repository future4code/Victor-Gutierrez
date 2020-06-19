import React from 'react';
import Header from '../../Components/Header/Header';
import CardChooser from '../../Components/CardChooser/CardChooser';
import Matches from '../../Components/Matches/matches';
import { Container } from './ClientPage_Styles';

export default function ClientPage() {
    return (
        <>
            <Header />
            <Container>
                <CardChooser />
                <Matches />
            </Container>
        </>
    );
}
