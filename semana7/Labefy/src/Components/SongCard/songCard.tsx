import React from 'react';
import api from './../../Services/api';
import { Container } from './songCardStyles';
import { BsTrash } from 'react-icons/bs';

interface Props {
    id: string;
    name: string;
    artist: string;
    url: string;
    playListid: string;
}

export default function SongCard(props: Props) {
    const deleteSong = async (Songid: string) => {
        try {
            await api.delete(`/playlists/${props.playListid}/tracks/${Songid}`);
            //toast
        } catch (error) {
            //toast
        }
    };

    return (
        <>
            <Container>
                <span>
                    {props.name} - {props.artist}
                </span>
                <audio src={props.url} controls loop />
                <p>
                    <BsTrash onClick={() => deleteSong(props.id)} />
                </p>
            </Container>
        </>
    );
}
