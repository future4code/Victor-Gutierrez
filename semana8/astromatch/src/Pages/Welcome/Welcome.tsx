import React from 'react';

import AstroMatch from '../../Assets/images/astro.png';
import { Animated } from 'react-animated-css';

import { BounceLoader } from 'react-spinners';
import { Container } from './Welcome_styles';
import { WelcomeProps } from '../../Types/interfaces';

export default function Welcome({ virtualLoading }: WelcomeProps) {
    return (
        <Animated
            animationIn="zoomIn"
            animationOut="zoomOutUp"
            isVisible={virtualLoading}
        >
            <Container>
                <img src={AstroMatch} alt="logo" />
                <BounceLoader color={'#FF914D'} />
            </Container>
        </Animated>
    );
}
