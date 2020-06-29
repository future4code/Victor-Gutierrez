import AstroMatch from '../../Assets/images/astro.png';
import { Container } from './Header_styles';
import React from 'react';

export default function Header() {
    return (
        <Container>
            <img src={AstroMatch} alt="Logo" />
        </Container>
    );
}
