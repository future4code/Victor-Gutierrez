import React, { useState } from 'react';

import { FormDataForLoginAndSignUp } from '../../../Types/interfaces';
import { Link } from 'react-router-dom';

import {
    FormContainer,
    FormInput,
    FormLabel,
    FormButton,
    Container,
    LinkBox,
} from '../../SharedStyles/SharedStyles';
import { fakeLogin } from './login_services';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
    const [formData, setFormData] = useState<FormDataForLoginAndSignUp>(
        {} as FormDataForLoginAndSignUp,
    );
    const history = useHistory();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        //Acoplamento
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //Usando a API Labenusers como um falso BD para os usuários que não são administradores
        // Ele considera email como email e nome como password, para fins de demonstração tem funcionado bem
        e.preventDefault();
        try {
            await fakeLogin(formData.email, formData.password);
            setTimeout(() => {
                const virtualToken = localStorage.getItem('virtualUserToken');
                if (virtualToken === 'true') {
                    history.replace('/trips');
                }
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <FormContainer>
                <img
                    src={require('../../../Assets/images/LabeX-logo.png')}
                    alt="logo"
                />
                <form onSubmit={handleSubmit}>
                    <FormInput
                        id="email"
                        onChange={handleInput}
                        type="email"
                        required
                        minLength={5}
                    />
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormInput
                        id="password"
                        onChange={handleInput}
                        type="password"
                        minLength={4}
                        required
                    />
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormButton type="submit">LOGIN</FormButton>
                </form>
                <LinkBox>
                    <Link to="/signup">Não possui login? Cadastre-se</Link>
                </LinkBox>
            </FormContainer>
        </Container>
    );
}
