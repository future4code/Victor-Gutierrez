import React, { useState } from 'react';
import api from './../../Services/api';

export default function CreatePlaylist() {
    const [creationName, setCreationName] = useState<string>();

    const handleNewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestBody = {
            name: creationName,
        };

        try {
            await api.post('/playlists', requestBody);
            //toast
        } catch (error) {
            //error toast
        }
    };

    const handleNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreationName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleNewSubmit}>
                <input onChange={handleNewName} placeholder="Insira um nome" required type="text" />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}
