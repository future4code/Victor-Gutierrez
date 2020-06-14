import React from 'react';
import Leezer from './../../Assets/leezer.png';
import { Container } from './headerstyles';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <h1>Leezer</h1>
            </Link>
            <img src={Leezer} alt="" />
        </Container>
    );
}
