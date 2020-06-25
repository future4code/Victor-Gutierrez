import React, { useState } from 'react';
import {
    Container,
    FormContainer,
    FormLabel,
    FormInput,
    FormButton,
} from '../../SharedStyles/SharedStyles';
import { FormDataForLoginAndSignUp } from '../../../Types/interfaces';
import { FakeRegistering } from './UserRegister_services';

export default function UserRegistering() {
    const [formData, setFormData] = useState<FormDataForLoginAndSignUp>(
        {} as FormDataForLoginAndSignUp,
    );

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        //Acoplamento
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await FakeRegistering(formData.email, formData.password);
            setFormData({ email: '', password: '' });
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
                        value={formData.email}
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
                        value={formData.password}
                        minLength={4}
                        required
                    />
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormButton type="submit">ME CADASTRAR</FormButton>
                </form>
            </FormContainer>
        </Container>
    );
}
