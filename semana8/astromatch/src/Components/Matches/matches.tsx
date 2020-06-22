import {
    ClearButton,
    CloseButton,
    Container,
    List,
    ListContainer,
    Person,
    PhotoFrame,
    ShowList,
} from './matches_styles';
import React, { useContext, useEffect, useState } from 'react';

import { Animated } from 'react-animated-css';
import { GiChewedHeart } from 'react-icons/gi';
import { Profile } from '../../Types/interfaces';
import astromatch from './../../Services/astromatch_api';
import { profileChangeListener } from '../../Context/profileChangeListener_Context';

export default function Matches() {
    const [matches, setMatches] = useState<Profile[]>([]);
    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleAnimation, setAnimationToggle] = useState<boolean>(false);
    const { newNumber } = useContext(profileChangeListener);

    useEffect(() => {
        getMatches();
        // O CardChooser dispara uma mudança no context toda vez que o profile é alterado, foi a forma que encontrei
        // para manter a lista atualizada em tempo real
    }, [newNumber]);

    const getMatches = async () => {
        astromatch
            .get('/matches')
            .then((response) => {
                setMatches(response.data.matches);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const clearMatches = async () => {
        try {
            await astromatch.put('/clear');
            toggleItems();
            getMatches();
        } catch (error) {
            console.error(error);
        }
    };

    const toggleItems = () => {
        getMatches();
        if (toggle) {
            setAnimationToggle((previousValue) => !previousValue);
            setTimeout(() => {
                setToggle((previousValue) => !previousValue);
            }, 1200);
        } else {
            setToggle((previousValue) => !previousValue);
            setAnimationToggle((previousValue) => !previousValue);
        }
    };

    return (
        <Container>
            <ShowList onClick={toggleItems}>
                <p>{matches.length}</p>
                <GiChewedHeart size={60} color="#FF914D" />
            </ShowList>
            <Animated
                animationIn="zoomIn"
                animationOut="zoomOut"
                isVisible={toggleAnimation}
            >
                {toggle && (
                    <ListContainer>
                        {matches.length > 0 ? (
                            <>
                                <List>
                                    {matches.map((item) => {
                                        return (
                                            <Person key={item.id}>
                                                <PhotoFrame>
                                                    <img
                                                        src={item.photo}
                                                        alt={item.name}
                                                    />
                                                </PhotoFrame>
                                                <p>{item.name}</p>
                                            </Person>
                                        );
                                    })}
                                </List>
                                <ClearButton onClick={clearMatches}>
                                    LIMPAR MATCHES
                                </ClearButton>
                                <CloseButton onClick={toggleItems}>
                                    FECHAR
                                </CloseButton>
                            </>
                        ) : (
                            <>
                                <h4>Você ainda não possui nenhum match</h4>
                                <CloseButton onClick={toggleItems}>
                                    FECHAR
                                </CloseButton>
                            </>
                        )}
                    </ListContainer>
                )}
            </Animated>
        </Container>
    );
}
