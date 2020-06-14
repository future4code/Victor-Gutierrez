import React, { useState, useEffect } from 'react';
import Playlistcard from '../PlaylistCard/playlistcard';
import api from '../../Services/api';
import { Container, AddPlaylist } from './playlistsstyles';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreatePlaylist from '../CreatePlaylist/createPlaylist';

interface playlist {
    id: string;
    name: string;
}

export default function Playlists() {
    const [playlists, setPlaylists] = useState<playlist[]>([]);
    const [showForm, setFormState] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        api.get('/playlists')
            .then((response) => {
                setPlaylists(response.data.result.list.map((i: object) => i));
            })
            .then(() => {
                setLoaded(true);
            });
    }, [playlists]);

    const welcomeUser =
        loaded === true ? <h1>Comece adicionando uma playlist!</h1> : '';

    return (
        <>
            <Container>
                {showForm === false ? (
                    ''
                ) : (
                    <span>
                        <CreatePlaylist />
                    </span>
                )}
                <AddPlaylist
                    onClick={() => {
                        setFormState(!showForm);
                    }}
                    title="Aqui você pode inserir uma playlist"
                >
                    <IoIosAddCircleOutline size={50} />{' '}
                    <p>{showForm === true ? 'Fechar' : 'Adicionar playlist'}</p>
                </AddPlaylist>
                {playlists.length === 0
                    ? welcomeUser
                    : playlists.map((i) => (
                          <Playlistcard key={i.id} name={i.name} id={i.id} />
                      ))}
            </Container>
        </>
    );
}
