import { BackgroundInTripCardProps } from '../../../Types/interfaces';
import { setPhotoInCard } from '../../SharedStyles/SharedStyles';
import styled from 'styled-components';

export const Card = styled.div`
    width: 300px;
    height: 200px;
    overflow: hidden;
    position: relative;
    transition: all 1s;
`;

export const Title = styled.h2`
    padding: 15px 0 15px 0;
    color: white;
    height: 125px;
`;

export const Planet = styled.h4`
    color: gray;
`;

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 5px;
    border-radius: 5px;
    padding: 10px;
    text-align: baseline;
    word-break: break-word;

    p {
        color: white;
        font-weight: 600;

    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export const Background = styled.div<BackgroundInTripCardProps>`
    background-image: url(${(props) => setPhotoInCard(props.planet)});
    background-position: center;
    background-size: cover;
    transition: 2s;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`;
