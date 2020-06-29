import { Animated } from 'react-animated-css';
import AstroMatch from '../../Assets/images/astro.png';
import { BounceLoader } from 'react-spinners';
import { Container } from './Welcome_styles';
import React from 'react';
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
