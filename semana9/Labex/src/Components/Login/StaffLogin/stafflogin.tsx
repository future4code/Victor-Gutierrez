import React, { useState } from 'react';
import { FormDataForLoginAndSignUp } from '../../../Types/interfaces';
import { useHistory } from 'react-router-dom';
import { AdministratorLogin } from './stafflogin_services';
import { useLoading } from '../../../Hooks/useLoading';

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
    const { loading, ToggleLoading, LoadingGif } = useLoading();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        //Acoplamento
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        ToggleLoading();
        AdministratorLogin(formData.email, formData.password).then((value) => {
            if (value) {
                setTimeout(() => {
                    history.push('/staff/dashboard');
                    window.location.reload(); //injeção do token
                }, 5500);
            }
            ToggleLoading();
        });
    };

    return (
        <>
            <Container>
                <FormContainer>
                    {loading ? (
                        LoadingGif
                    ) : (
                        <>
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
                        </>
                    )}
                </FormContainer>
            </Container>
        </>
    );
}
