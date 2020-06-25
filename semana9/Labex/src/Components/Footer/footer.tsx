import React from 'react';
import { Container } from './footer_styles';
import { HeaderProps } from '../../Types/interfaces';

export default function Footer({ location = '/' }: HeaderProps) {
    return (
        <>
            {location === '/' ? (
                ''
            ) : (
                <Container>
                    <p>Todos os direitos reservados ₢2020 - VG</p>
                </Container>
            )}
        </>
    );
}
