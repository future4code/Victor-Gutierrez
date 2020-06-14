import React, { useState, useEffect } from 'react';
import api from './../../Services/api';
import Createsong from './../../Components/CreateSong/createsong';
import { useHistory, Link } from 'react-router-dom';
import SongCard from './../../Components/SongCard/songCard';
import { IoIosTrash } from 'react-icons/io';
import {
    Container,
    RemovePlaylist,
    PlaylistName,
} from './playlistdetailsStyles';

interface songList {
    id: string;
    name: string;
    artist: string;
    url: string;
}

export default function PlaylistDetails({
    match: {
        params: { id },
    },
}) {
    const [songs, setSongs] = useState<songList[]>([]);
    const [playlistName, setName] = useState<string>();
    const history = useHistory();

    useEffect(() => {
        api.get(`/playlists/${id}/tracks`).then((response) => {
            setSongs(response.data.result.tracks);
        });

        // eslint-disable-next-line
    }, [songs]);

    useEffect(() => {
        api.get(`/playlists`).then((response) => {
            const findPlaylist = response.data.result.list.findIndex(
                (i) => i.id === id,
            );
            setName(response.data.result.list[findPlaylist].name);
        });
    }, []);

    const handleDelete = async () => {
        let sure = window.confirm('Você tem certeza?');

        if (sure) {
            try {
                await api.delete(`/playlists/${id}`);
                alert('Você será redirecionado para a página inicial');
                setTimeout(history.push('/'), 2000);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <Createsong id={id} />
            <PlaylistName>{playlistName}</PlaylistName>
            <Container>
                {songs.map((i) => {
                    return (
                        <SongCard
                            id={i.id}
                            key={i.id}
                            name={i.name}
                            artist={i.artist}
                            url={i.url}
                            playListid={id}
                        />
                    );
                })}
                <RemovePlaylist
                    onClick={handleDelete}
                    title="Cuidado ! Essa ação é irreversível."
                >
                    <IoIosTrash size={50} />
                    <p>Deletar esta playlist</p>
                </RemovePlaylist>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                        margin: 'auto',
                    }}
                    to="/"
                >
                    Voltar
                </Link>
            </Container>
        </>
    );
}
