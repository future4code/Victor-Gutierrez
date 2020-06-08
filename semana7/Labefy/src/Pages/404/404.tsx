import React from 'react';
import { Link } from 'react-router-dom';
import Lost from '../../Assets/404.png';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: inherit;
        color: black;
        font-weight: bold;
        position: relative;
        bottom: 250px;
        font-size: 32px;
    }
    a:hover {
        color: #59caf5;
    }

    h1 {
        margin-top: 50px;
        color: black;
    }
    img {
        margin-bottom: 250px;
    }
`;

export default function LostPage() {
    return (
        <Container>
            <h1>Olá! Parece que você se perdeu.</h1>
            <img src={Lost} alt="" />
            <Link to="/">Voltar para página inicial</Link>
        </Container>
    );
}
