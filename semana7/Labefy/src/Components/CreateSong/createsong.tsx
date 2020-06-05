import React, { useState } from 'react';
import api from './../../Services/api';
import { Container, AddSong } from './createSongStyles';
import { IoIosAddCircleOutline } from 'react-icons/io';

interface songRequest {
    name: string;
    artist: string;
    url: string;
}

export default function Createsong(props) {
    const [newSong, setNewSong] = useState<songRequest>({
        name: '',
        artist: '',
        url: '',
    });
    const [showForm, setFormState] = useState<boolean>(false);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };
    const handleArtist = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };
    const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };

    const SendInformation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestBody = newSong;

        try {
            await api.post(`/playlists/${props.id}/tracks`, requestBody);
            setFormState(!showForm);
            //tooast
        } catch (error) {
            //tooaste
        }
    };

    return (
        <>
            <AddSong
                onClick={() => {
                    setFormState(!showForm);
                }}
            >
                <IoIosAddCircleOutline size={50} /> <p>Adicionar Música</p>
            </AddSong>

            {showForm === false ? (
                ''
            ) : (
                <>
                    <Container onSubmit={SendInformation}>
                        <input
                            onChange={handleName}
                            name="name"
                            type="text"
                            placeholder="Nome da música"
                        />
                        <input
                            onChange={handleArtist}
                            name="artist"
                            type="text"
                            placeholder="Nome do artista"
                        />
                        <input
                            onChange={handleUrl}
                            name="url"
                            type="text"
                            placeholder="Url da música"
                        />
                        <button type="submit">Adicionar música</button>
                    </Container>
                </>
            )}
        </>
    );
}
