import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Frame } from './playlistCardStyles';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import api from './../../Services/api';
import { BsMusicNoteList } from 'react-icons/bs';
import loadingAst from './../../Assets/loading.gif';

interface Props {
    id: string;
    name: string;
}

export default function Playlistcard(props: Props) {
    const [counter, setCount] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.id}/tracks`,
        )
            .then((response) => {
                setCount(response.data.result.quantity);
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line
    }, []);

    const decidebackGround = () =>
        loading === true ? loadingAst : 'https://source.unsplash.com/random';

    const background = {
        background: `url(${decidebackGround()})`,
        backgroundSize: 'cover',
    };

    return (
        <>
            <Link
                style={{ color: 'black', textDecoration: 'none' }}
                to={`/details/${props.id}`}
            >
                <Frame style={background} key={props.id}>
                    <i>
                        {counter}
                        <BsMusicNoteList />
                    </i>
                    <div>
                        <AiOutlinePlayCircle size={100} color="#fff" />
                    </div>
                    <p>{props.name}</p>
                </Frame>
            </Link>
        </>
    );
}
