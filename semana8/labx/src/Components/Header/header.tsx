import { Container, LinkBox } from './header_styles';

import { HeaderProps } from '../../Types/interfaces';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Header({ location = '/' }: HeaderProps) {
    const renderBasedOnLocation = () => {
        switch (location) {
            case '/':
                return <Link to="/login">INICIAR MINHA JORNADA</Link>;
            case '/trips':
                return (
                    <>
                        <Link to="/">SAIR</Link>
                    </>
                );
            case '/login':
                return <Link to="/">VOLTAR AO INICIO</Link>;
            default:
                return <Link to="/">Configurar</Link>;
        }
    };

    return (
        <>
            <Container>
                <Link to="/">
                    <img
                        src={require('../../Assets/images/LabeX-logo.png')}
                        alt="logo"
                    />
                </Link>
                <LinkBox>{renderBasedOnLocation()}</LinkBox>
            </Container>
        </>
    );
}
