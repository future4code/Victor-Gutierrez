import React, { useState, useEffect } from 'react';
import api from './../../Services/api';
import Createsong from './../../Components/CreateSong/createsong';
import { useHistory, Link } from 'react-router-dom';
import SongCard from './../../Components/SongCard/songCard';
import { IoIosTrash } from 'react-icons/io';
import { Container } from './playlistdetailsStyles';

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
    const history = useHistory();

    useEffect(() => {
        api.get(`/playlists/${id}/tracks`).then((response) => {
            setSongs(response.data.result.tracks);
        });
    }, [songs]);

    const handleDelete = async () => {
        try {
            await api.delete(`/playlists/${id}`);
            history.push('/');
        } catch (error) {
            //toast
        }
    };

    return (
        <>
            <Createsong id={id} />
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
                <div onClick={handleDelete}>
                    <IoIosTrash size={50} />
                    <p>Deletar esta playlist</p>
                </div>
            </Container>
        </>
    );
}
