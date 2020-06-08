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
            setCreationName('');
        } catch (error) {
            alert(
                'Parece que essa playlist já existe... que tal escolher outro nome?',
            );
        }
    };

    const handleNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreationName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleNewSubmit}>
                <input
                    value={creationName}
                    onChange={handleNewName}
                    placeholder="Insira um nome"
                    required
                    type="text"
                    title="Aqui você pode inserir o nome que desejar"
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}
