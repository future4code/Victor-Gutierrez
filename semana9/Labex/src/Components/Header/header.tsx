import { Container, StaffHeading } from './header_styles';
import { LinkBox } from '../SharedStyles/SharedStyles';
import { HeaderProps } from '../../Types/interfaces';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';

export default function Header({ location = '/' }: HeaderProps) {
    const history = useHistory();

    const Logout = () => {
        sessionStorage.removeItem('adminToken');
        localStorage.removeItem('virtualUserToken');
        history.push('/');
    };

    const renderBasedOnLocation = () => {
        switch (location) {
            case '/':
                return <Link to="/login">INICIAR MINHA JORNADA</Link>;
            case '/trips':
                return (
                    <Link onClick={Logout} to="/">
                        SAIR
                    </Link>
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
                    </>
                );
            default:
                return (
                    <>
                        <Link
                            onClick={() => {
                                history.goBack();
                            }}
                            to="/"
                        >
                            VOLTAR
                        </Link>
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
                <LinkBox>{renderBasedOnLocation()}</LinkBox>
            </Container>
        </>
    );
}
