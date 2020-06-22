import {
    Age,
    Bio,
    Card,
    Center,
    Container,
    Info,
    Mileage,
    Name,
} from './CardChooser_styles';
import { BounceLoader, SkewLoader } from 'react-spinners';
import { Profile, ProfileItems } from './../../Types/interfaces';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Animated } from 'react-animated-css';
import Controls from '../Controls/Controls';
import InfinityLoading from '../../Assets/images/loadinginfinity.svg';
import Match from '../../Assets/images/itsamatch.gif';
import UIfx from 'uifx';
import astromatch from './../../Services/astromatch_api';
import { profileChangeListener } from '../../Context/profileChangeListener_Context';

export default function CardChooser() {
    const [profile, setProfile] = useState<Profile>({
        id: 'id',
        age: 0,
        name: 'nome',
        photo: 'url',
        bio: 'texto',
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [showBio, setBio] = useState<boolean>(false);
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const [swipeDirection, setSwipeDirection] = useState<string>('left');
    const { setNewNumberForUpdateListener } = useContext(profileChangeListener);
    const [mileAge, setMileage] = useState(() => Math.ceil(Math.random() * 10));
    const sucess = new UIfx(require('../../Assets/audio/success.mp3'));

    useEffect(() => {
        setMileage(() => Math.ceil(Math.random() * 10));
    }, [profile]);

    useEffect(() => {
        getNewPerson();
    }, []);

    const getNewPerson = useCallback(async () => {
        setSwipeDirection('left');
        setLoading(true);
        setIsMatch(false);
        setNewNumberForUpdateListener(Date.now());
        // A função gera uma mudança no Context que está nas dependências do UseEffect da lista de matches.

        try {
            const response = await astromatch.get<ProfileItems>('/person');
            setProfile({
                id: response.data.profile.id,
                age: response.data.profile.age,
                name: response.data.profile.name,
                photo: response.data.profile.photo,
                bio: response.data.profile.bio,
            });
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }, [setNewNumberForUpdateListener]);

    const matchPerson = async (id: string) => {
        setSwipeDirection('right');
        setLoading(true);

        const requestBody = {
            id: id,
            choice: true,
        };

        try {
            const request = await astromatch.post(
                '/choose-person',
                requestBody,
            );
            if (request.data.isMatch) {
                setIsMatch(request.data.isMatch);
                sucess.play();
                setTimeout(() => {
                    getNewPerson();
                }, 3000);
            } else {
                getNewPerson();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const toggleBio = () => {
        setBio(!showBio);
    };

    return (
        <Container image={loading ? (isMatch ? Match : InfinityLoading) : ''}>
            <Animated
                animationIn="jackInTheBox"
                animationOut={
                    swipeDirection === 'left'
                        ? 'rotateOutDownRight'
                        : 'rotateOutDownLeft'
                }
                isVisible={loading ? false : true}
                style={{ height: 0.9 * 700 }}
            >
                <Card image={profile.photo}>
                    {loading ? (
                        <BounceLoader color={'#FF5A55'} />
                    ) : (
                        <Info>
                            <Name>{profile.name + ','}</Name>
                            <Age> {profile.age}</Age>
                            <Mileage>{mileAge + ' km de distância'}</Mileage>
                            {showBio && (
                                <>
                                    <Bio>{profile.bio}</Bio>
                                </>
                            )}
                            <Center>
                                <i onClick={toggleBio}>
                                    <SkewLoader size={15} color={'#FF5A55'} />
                                </i>
                            </Center>
                        </Info>
                    )}
                </Card>
                <Controls
                    getNewPerson={getNewPerson}
                    matchPerson={matchPerson}
                    loading={loading}
                    profileId={profile.id}
                />
            </Animated>
        </Container>
    );
}
