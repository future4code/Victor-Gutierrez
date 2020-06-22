import CardChooser from '../../Components/CardChooser/CardChooser';
import { Container } from './ClientPage_Styles';
import Header from '../../Components/Header/Header';
import Matches from '../../Components/Matches/matches';
import React from 'react';

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
