import React, { useState, useEffect } from 'react';
import { api } from './../../Services/api';
import loadingImg from './../../Assets/Orbit-32px.gif';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { Container, Input } from './lista_styles';
import { toast } from 'react-toastify';

interface usersFromList {
    id: string;
    name: string;
}

export default function Lista() {
    const [userList, setList] = useState<usersFromList[]>([]);
    const [loading, setloading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        api.get<usersFromList[]>('/users').then((response) => {
            setList(response.data);
            setloading(false);
        });
    }, [userList]);

    const deleteUser = (id: string) => {
        setloading(true);
        let sure = window.confirm('Deseja mesmo deletar este usuário?');
        if (sure) {
            api.delete(`/users/${id}`)
                .then(() => {
                    setloading(false);
                    toast.dark('Usuário deletado com sucesso');
                })
                .catch((error) => {
                    toast.error('Houve um erro ao deletar o usuário.');
                    toast.error(`${error}`, {
                        position: 'bottom-center',
                    });
                });
        } else {
            setloading(false);
        }
    };

    const editUser = (id: string) => {
        let getName = prompt(
            'Qual nome você quer dar a este usuário? Se não deseja alterar, clique em cancelar',
        );
        let getEmail = prompt(
            'Qual email deseja inserir? Se não deseja alterar, clique em cancelar',
        );

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
            })
            .catch((error) => {
                toast.error(
                    'Houve um erro ao editar o usuário. Verifique se inseriu um e-mail válido',
                );
                toast.error(`${error}`, {
                    position: 'bottom-center',
                });
            });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const smartSearch = new RegExp(search, 'gi');

    return (
        <Container>
            <Input
                type="text"
                placeholder="Procure por um usuário"
                onChange={handleSearch}
            />

            <ul>
                {loading === true ? (
                    <img src={loadingImg} alt="loading" />
                ) : (
                    <>
                        {userList.map((item) => {
                            if (item.name.match(smartSearch)) {
                                return (
                                    <li key={item.id}>
                                        <span>
                                            <p>{item.name}</p>
                                            <span
                                                onClick={() =>
                                                    deleteUser(item.id)
                                                }
                                            >
                                                <BsFillTrashFill />
                                            </span>
                                            <span
                                                onClick={() =>
                                                    editUser(item.id)
                                                }
                                            >
                                                <AiFillEdit />
                                            </span>
                                        </span>
                                    </li>
                                );
                            }
                        })}
                    </>
                )}
            </ul>
        </Container>
    );
}
