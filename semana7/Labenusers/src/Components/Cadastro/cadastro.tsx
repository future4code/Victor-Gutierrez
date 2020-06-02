import React, { useState } from 'react';
import { api } from './../../Services/api';
import { toast } from 'react-toastify';
import { Container, Form } from './cadastro_styles';

interface UserData {
    name: string;
    email: string;
}

export default function Cadastro() {
    const [userData, setUserData] = useState<UserData>({ name: '', email: '' });

    const handleSubmit = () => {
        const requestBody = {
            name: userData.name,
            email: userData.email,
        };

        api.post<UserData>('/users', requestBody)
            .then(() => {
                toast.dark('Seu usuário foi criado com sucesso!');
                setUserData({ name: '', email: '' });
            })
            .catch(() =>
                toast.error(
                    'Seu usuário não pôde ser criado. Verifique se ele já existe.',
                ),
            );
    };

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ name: e.target.value, email: userData.email });
    };

    const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ name: userData.name, email: e.target.value });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input
                    value={userData.name}
                    onChange={handleUserName}
                    type="text"
                    required
                    placeholder="Seu nome"
                />
                <input
                    value={userData.email}
                    onChange={handleUserEmail}
                    type="email"
                    required
                    placeholder="Seu e-mail"
                />
                <button>Enviar Cadastro</button>
            </Form>
        </Container>
    );
}
