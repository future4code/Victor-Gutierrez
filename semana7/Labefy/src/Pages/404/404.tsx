import React from 'react';
import { Link } from 'react-router-dom';
import Lost from '../../Assets/404.png';
import { Container } from './404styles';

export default function LostPage() {
    return (
        <Container>
            <h1>Olá! Parece que você se perdeu.</h1>
            <img src={Lost} alt="" />
            <Link to="/">Voltar para página inicial</Link>
        </Container>
    );
}
