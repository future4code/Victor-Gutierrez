import React from 'react';
import { Container } from './footer_styles';
import { HeaderProps } from '../../Types/interfaces';

export default function Footer({ location = '/' }: HeaderProps) {
    return (
        <>
            {location === '/' ? (
                <></>
            ) : (
                <Container>
                    <p>
                        Todos os direitos reservados ₢2020 - {''}
                        <a
                            style={{ textDecoration: 'none', color: 'cyan' }}
                            href="https://github.com/V-Gutierrez"
                        >
                            Victor Gutierrez
                        </a>
                    </p>
                </Container>
            )}
        </>
    );
}
