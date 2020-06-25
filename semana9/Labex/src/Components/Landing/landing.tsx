import React from 'react';
import {
    Container,
    Box,
    Brand,
    Title,
    Sentence,
    BackGroundVideo,
} from './landing_styles';

export default function Landing() {
    return (
        <>
            <BackGroundVideo
                src={require('../../Assets/video/typyng.mp4')}
                autoPlay
                muted
                loop
            />

            <Container>
                <Box>
                    <Brand>LabeX</Brand>
                    <Title>Fácil e Rápido</Title>
                    <Sentence>
                        A forma mais fácil e rápida de alcançar seu sonho de
                        visitar outro planeta
                    </Sentence>
                    <Title>Econômico</Title>
                    <Sentence>
                        Ir para Marte nas férias não precisa ser caro, essa é
                        uma das premissas defendidas por nós
                    </Sentence>
                    <Title>Para toda a família</Title>
                    <Sentence>Deixe a solidão aqui na Terra!</Sentence>
                    <Title>Leve tudo que conseguir</Title>
                    <Sentence>O importante é o que importa</Sentence>
                    <Title>Saia de órbita</Title>
                    <Sentence>
                        Todo mundo precisa de uma viagem relaxante
                    </Sentence>
                </Box>
            </Container>
        </>
    );
}
