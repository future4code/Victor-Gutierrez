import React, { useState } from 'react';
import { FormDataForLoginAndSignUp } from '../../../Types/interfaces';
import { useHistory } from 'react-router-dom';
import { AdministratorLogin } from './stafflogin_services';

import {
    Container,
    FormContainer,
    FormInput,
    FormLabel,
    FormButton,
} from '../../SharedStyles/SharedStyles';

export default function StaffLogin() {
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
        e.preventDefault();

        try {
            await AdministratorLogin(formData.email, formData.password);
            setTimeout(() => {
                history.push('/staff/dashboard');
            }, 5500);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
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
                </FormContainer>
            </Container>
        </>
    );
}
