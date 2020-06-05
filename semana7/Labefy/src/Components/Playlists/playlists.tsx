import React, { useState, useEffect } from 'react';
import Playlistcard from './../PlaylistCard/playlistcard';
import api from './../../Services/api';
import { Container, AddPlaylist } from './playlistsstyles';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreatePlaylist from './../CreatePlaylist/createPlaylist';

interface playlist {
    id: string;
    name: string;
}

export default function Playlists() {
    const [playlists, setPlaylists] = useState<playlist[]>([]);
    const [showForm, setFormState] = useState<boolean>(false);

    useEffect(() => {
        api.get('/playlists')
            .then((res) => {
                setPlaylists(res.data.result.list.map((i: object) => i));
            })
            .catch((err) => alert(err));
    }, []);

    return (
        <>
            <Container>
                {showForm === false ? (
                    ''
                ) : (
                    <>
                        <span>
                            <CreatePlaylist />
                        </span>
                    </>
                )}
                <AddPlaylist
                    onClick={() => {
                        setFormState(!showForm);
                    }}
                >
                    <IoIosAddCircleOutline size={50} />{' '}
                    <p>Adicionar playlist</p>
                </AddPlaylist>
                {playlists.length === 0 ? (
                    <h1>Comece adicionando uma playlist</h1>
                ) : (
                    playlists.map((i) => (
                        <Playlistcard key={i.id} name={i.name} id={i.id} />
                    ))
                )}
            </Container>
        </>
    );
}
