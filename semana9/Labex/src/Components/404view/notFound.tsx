import React from 'react';
import { Wrapper } from './notFound_styles';
import spaceUni from '../../Assets/images/404unicorn.png';
import { LinkBox } from './../SharedStyles/SharedStyles';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Wrapper>
            <h1>404</h1>
            <h2>HOUSTON! WE`VE GOT A PROBLEM</h2>
            <h4>
                {' '}
                Nós vimos um unicórnio... talvez seja a nossa <i>startup</i>...
            </h4>
            <img src={spaceUni} alt="" />
            <LinkBox>
                <Link to="/">VOLTAR PARA A PÁGINA INICIAL</Link>
            </LinkBox>
        </Wrapper>
    );
}
