import React from 'react';
import { Container, StaffHeading } from './header_styles';
import { LinkBox } from '../SharedStyles/SharedStyles';
import { HeaderProps } from '../../Types/interfaces';
import { Link, useHistory } from 'react-router-dom';
import fastStorage from '../../Hooks/useStorage';

export default function Header({ location = '/' }: HeaderProps) {
    const history = useHistory();
    const {
        removeItemfromLocalStorage,
        removeItemFromSessionStorage,
        retrieveItemFromLocalStorage,
    } = fastStorage();
    const userName = retrieveItemFromLocalStorage('user');

    const Logout = () => {
        history.push('/');

        setTimeout(() => {
            removeItemfromLocalStorage('user');
            removeItemFromSessionStorage('adminToken');
            removeItemfromLocalStorage('virtualUserToken');
            window.location.reload();
        }, 1000);
    };

    const goBack = () => {
        history.goBack();
    };

    const renderBasedOnLocation = () => {
        switch (location) {
            case '/':
                return <Link to="/login">INICIAR MINHA JORNADA</Link>;
            case '/trips':
                return (
                    <>
                        <Link to="/application">ME CANDIDATAR</Link>
                        <Link onClick={Logout} to="/">
                            SAIR
                        </Link>
                    </>
                );

            case '/login':
                return (
                    <>
                        <Link to="/">VOLTAR AO INICIO</Link>
                        <Link to="/staff">STAFF</Link>
                    </>
                );
            case '/signup':
                return <Link to="/login">LOGAR</Link>;
            case '/staff/dashboard':
                return (
                    <Link onClick={Logout} to="/">
                        SAIR
                    </Link>
                );
            case '/staff':
                return (
                    <>
                        <StaffHeading>STAFF</StaffHeading>
                        <button onClick={goBack}>VOLTAR</button>
                    </>
                );
            default:
                return (
                    <>
                        <button onClick={goBack}>VOLTAR</button>
                        <Link onClick={Logout} to="/">
                            SAIR
                        </Link>
                    </>
                );
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
                {location !== '/' ? (
                    <>
                        <p>
                            {userName !== null ? (
                                `Logado como ${userName}`
                            ) : (
                                <></>
                            )}
                        </p>
                    </>
                ) : (
                    <></>
                )}
                <LinkBox>{renderBasedOnLocation()}</LinkBox>
            </Container>
        </>
    );
}
