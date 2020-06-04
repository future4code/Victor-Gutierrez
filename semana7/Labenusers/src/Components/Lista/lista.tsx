import React, { useState, useEffect } from 'react';
import { api } from './../../Services/api';
import loadingImg from './../../Assets/Orbit-32px.gif';
import { Container, Input } from './lista_styles';

import Usuario from './../Usuario/usuario';

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
                                    <Usuario name={item.name} id={item.id} />
                                );
                            }
                        })}
                    </>
                )}
            </ul>
        </Container>
    );
}
