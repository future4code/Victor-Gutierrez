import React from 'react';
import { Link } from 'react-router-dom';
import { Frame } from './playlistCardStyles';
import { AiOutlinePlayCircle } from 'react-icons/ai';

interface Props {
    id: string;
    name: string;
}

export default function Playlistcard(props: Props) {
    return (
        <>
            <Frame key={props.id}>
                <Link to={`/details/${props.id}`}>
                    <div>
                        <AiOutlinePlayCircle size={100} color="#fff" />
                    </div>
                </Link>
                <p>{props.name}</p>
            </Frame>
        </>
    );
}
