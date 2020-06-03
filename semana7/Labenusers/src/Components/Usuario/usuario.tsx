import React, { useState, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { api } from './../../Services/api';
import { Link } from 'react-router-dom';
import loadingGif from '../../Assets/Orbit-32px.gif';
import { Container, Input } from './usuario_styles';

interface ToProps {
    name: string;
    id: string;
}

interface Response {
    name: string | null;
    email: string | null;
}

export default function Usuario(props: ToProps) {
    const [UserData, setUserData] = useState<Response>({
        name: null,
        email: null,
    });

    const [editMode, setMode] = useState<boolean>(false);

    const newUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ name: e.target.value, email: UserData.email });
    };
    const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ email: e.target.value, name: UserData.name });
    };

    const deleteUser = (id: string) => {
        let sure = window.confirm('Deseja mesmo deletar este usuário?');
        if (sure) {
            api.delete(`/users/${id}`)
                .then(() => {
                    toast.dark('Usuário deletado com sucesso');
                })
                .catch((error) => {
                    toast.error('Houve um erro ao deletar o usuário.');
                    toast.error(`${error}`, {
                        position: 'bottom-center',
                    });
                });
        }
    };

    const editUser = async (id: string) => {
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

        api.put(`/users/${id}`, requestBody)
            .then(() => {
                toast.dark('Usuário editado com sucesso');
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
                setMode(false);
            });
    };

    const toggleEditMode = () => {
        setMode(!editMode);
    };

    //////////////////// Estruturas

    const edition = (
        <>
            <Input type="text" onChange={newUserName} placeholder="Novo Nome" />
            <Input
                type="text"
                onChange={newUserEmail}
                placeholder="Novo Email"
            />
            <a href="#" onClick={toggleEditMode}>
                Cancelar
            </a>
            <a href="#" onClick={() => editUser(props.id)}>
                Editar
            </a>
        </>
    );

    const userDetailsOfPage = (
        <>
            <h3>{props.name}</h3>
            <span>
                <BsFillTrashFill onClick={() => deleteUser(props.id)} />{' '}
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
            <Container key={props.id}>{userDetailsOfPage}</Container>
            <Link to={`/details/${props.id}`}> Detalhes </Link>
        </>
    );
}
