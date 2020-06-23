import React, { useState } from 'react';

import { FormDataForLoginAndSignUp } from '../../Types/interfaces';
import { Link } from 'react-router-dom';
import { LinkBox } from '../Header/header_styles';
import {
    FormContainer,
    FormInput,
    FormLabel,
    FormButton,
    Container,
} from './login_styles';
import useVirtualAuth from '../../Hooks/useVirtualAuth';

export default function LoginForm() {
    const [formData, setFormData] = useState<FormDataForLoginAndSignUp>(
        {} as FormDataForLoginAndSignUp,
    );
    
    console.log(useVirtualAuth(formData.password, formData.email));

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {};

    return (
        <Container>
            <FormContainer>
                <img
                    src={require('../../Assets/images/LabeX-logo.png')}
                    alt="logo"
                />
                <form>
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
                    <FormButton onClick={handleSubmit} type="button">
                        LOGIN
                    </FormButton>
                </form>
                <LinkBox>
                    <Link to="/signup">Não possui login? Cadastre-se</Link>
                </LinkBox>
            </FormContainer>
        </Container>
    );
}
