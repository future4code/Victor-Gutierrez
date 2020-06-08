import React, { useEffect, useState } from 'react';
import api from './../../Services/api';
import { Container } from './songCardStyles';
import { BsTrash } from 'react-icons/bs';
import loadingAst from './../../Assets/loading.gif';
import deezer from './../../Services/deezer';

interface Props {
    id: string;
    name: string;
    artist: string;
    url: string;
    playListid: string;
}

export default function SongCard(props: Props) {
    const [list, setList] = useState<any>([]);
    const [photo, setAlbumPhoto] = useState<string>();
    const [albumTitle, setTitle] = useState<string>();
    const [takeToDeezer, setPath] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    const deleteSong = async (Songid: string) => {
        try {
            await api.delete(`/playlists/${props.playListid}/tracks/${Songid}`);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        deezer
            .get(`/search?q=${props.artist}`)
            .then((response) => {
                setList(response.data.data);
                handleImg();
            })
            .then(() => {
                setLoading(false);
            });
        // eslint-disable-next-line
    }, [photo]);

    const handleImg = () => {
        const searchThisIndex = list.findIndex((i) => i.title === props.name);

        if (searchThisIndex !== -1) {
            setAlbumPhoto(list[searchThisIndex].album.cover);
            setPath(list[searchThisIndex].link);
            setTitle(list[searchThisIndex].album.title);
        } else {
            setAlbumPhoto(
                'https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png',
            );
        }
    };

    const albumstyle = {
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
    };

    const decidebackGround = () => (loading === true ? loadingAst : photo);

    return (
        <>
            <Container style={albumstyle}>
                <img
                    src={decidebackGround()}
                    alt={albumTitle}
                    title={albumTitle}
                />
                <span>
                    <a
                        target="_blank"
                        title="Ouça no Deezer"
                        href={takeToDeezer}
                        rel="noopener noreferrer"
                    >
                        {props.name} - {props.artist}
                    </a>
                </span>
                <audio src={props.url} title={props.name} controls loop />
                <p>
                    <BsTrash
                        title="Deletar música"
                        onClick={() => deleteSong(props.id)}
                    />
                </p>
            </Container>
        </>
    );
}
