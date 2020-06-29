import { setPhotoInCard } from '../SharedStyles/SharedStyles';
import { BackgroundInTripCardProps } from '../../Types/interfaces';

import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    width: 750px;
    height: 75%;
    margin-right: 150px;
    border-radius: 5px;
    color: white;
    > * {
        text-align: center;
        margin-bottom: 30px;
        background: black;
        padding: 50px;
        border-radius: 5px;
        width: 400px;
    }

    p {
        background: #0000009c;
    }

    @media (max-width: 975px) {
        display: none;
    }
`;

export const Background = styled.div<BackgroundInTripCardProps>`
    background-image: url(${(props) => setPhotoInCard(props.planet)});
    background-position: center;
    background-size: cover;
    transform-style: preserve-3d;
    transform: perspective(1220px) rotateX(0deg) rotateY(40deg);
    border-radius: 5%;
    transition: 2s;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
`;
