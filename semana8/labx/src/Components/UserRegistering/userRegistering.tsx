import React, { useState } from 'react';
import {
    Container,
    FormContainer,
    FormLabel,
    FormInput,
    FormButton,
} from '../Login/login_styles';
import { FormDataForLoginAndSignUp } from '../../Types/interfaces';
import LabenUsers from './../../Services/Labenusers';

export default function UserRegistering() {
    const [formData, setFormData] = useState<FormDataForLoginAndSignUp>(
        {} as FormDataForLoginAndSignUp,
    );

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
        const requestBody = {
            email: formData.email,
            name: formData.password,
        };

        try {
            await LabenUsers.post('/users', requestBody);
        } catch (error) {
            console.error(error);
        }
    };

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
                        ME CADASTRAR
                    </FormButton>
                </form>
            </FormContainer>
        </Container>
    );
}
