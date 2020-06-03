import React, { useState, useEffect } from 'react';
import { api } from './../../Services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import loadingGif from '../../Assets/Orbit-256px.gif';
import { Container, EditionInput, LinkWrapper } from './details_styles';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

interface Response {
    name: string | null;
    email: string | null;
}

export default function Details({
    match: {
        params: { id },
    },
}) {
    const [userInfo, setUserInfo] = useState<Response>({
        name: null,
        email: null,
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [editMode, setMode] = useState<boolean>(false);
    const [UserData, setUserData] = useState<Response>({
        name: null,
        email: null,
    });

    //tem que podeer deletar.

    useEffect(() => {
        getUserInfo();
    }, []);

    const newUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ name: e.target.value, email: UserData.email });
    };
    const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ email: e.target.value, name: UserData.name });
    };

    const getUserInfo = async () => {
        try {
            const response = await api.get<Response>(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            );

            setUserInfo({
                name: response.data.name,
                email: response.data.email,
            });
            setLoading(false);
        } catch (error) {
            toast.error('Este usuário é inexistente');
        }
    };

    const toggleEditMode = () => {
        setMode(!editMode);
    };

    const deleteUser = () => {
        let sure = window.confirm('Deseja mesmo deletar este usuário?');
        if (sure) {
            api.delete(`/users/${id}`)
                .then(() => {
                    toast.dark('Usuário deletado com sucesso');
                    window.location.reload();
                })
                .catch((error) => {
                    toast.error('Houve um erro ao deletar o usuário.');
                    toast.error(`${error}`, {
                        position: 'bottom-center',
                    });
                });
        }
    };

    const sendEditToServer = async () => {
        let getName = UserData.name;
        let getEmail = UserData.email;

        interface editRequest {
            name?: string | null;
            email?: string | null;
        }
        let requestBody: editRequest;

        if (getName === null && getEmail === null) {
            requestBody = {};
        } else if (getName === null) {
            requestBody = {
                email: getEmail,
            };
        } else if (getEmail === null) {
            requestBody = {
                name: getName,
            };
        } else {
            requestBody = {
                name: getName,
                email: getEmail,
            };
        }
        setLoading(true);

        api.put(`/users/${id}`, requestBody)
            .then(() => {
                toast.dark('Usuário editado com sucesso');
                setLoading(false);
                setMode(false);
                setTimeout(() => window.location.reload(), 6000);
            })
            .catch((error) => {
                toast.error(
                    'Houve um erro ao editar o usuário. Verifique se inseriu um e-mail válido',
                );
                toast.error(`${error}`, {
                    position: 'bottom-center',
                });
                setLoading(false);
                setMode(false);
            });
    };

    ///////////////////////// Estruturas

    const edition = (
        <>
            <EditionInput
                type="text"
                onChange={newUserName}
                placeholder="Novo Nome"
            />
            <EditionInput
                type="text"
                onChange={newUserEmail}
                placeholder="Novo Email"
            />
            <a href="#" onClick={toggleEditMode}>
                Cancelar
            </a>
            <a href="#" onClick={sendEditToServer}>
                Editar
            </a>
        </>
    );

    const userDetailsOfPage = (
        <>
            <h3>{userInfo.name}</h3>
            <p>{userInfo.email}</p>
            <span>
                <BsFillTrashFill onClick={deleteUser} />{' '}
                {editMode === true ? (
                    edition
                ) : (
                    <AiFillEdit onClick={toggleEditMode} />
                )}
            </span>
        </>
    );

    return (
        <>
            <Container>
                {loading === true ? (
                    <img src={loadingGif} alt="Loading" />
                ) : (
                    userDetailsOfPage
                )}
                <LinkWrapper>
                    <Link to="/">Voltar para a página inicial</Link>
                    <Link to="/list">Voltar para a Lista</Link>
                </LinkWrapper>
            </Container>
        </>
    );
}
