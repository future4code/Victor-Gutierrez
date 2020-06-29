import { IoIosHeart, IoMdHeartDislike } from 'react-icons/io';

import { ControlsBox } from './Controls_styles';
import { ControlsProps } from '../../Types/interfaces';
import React from 'react';

export default function Controls({
    getNewPerson,
    loading,
    matchPerson,
    profileId,
}: ControlsProps) {
    return (
        <>
            {loading ? (
                ''
            ) : (
                <ControlsBox>
                    <span onClick={getNewPerson}>
                        <IoMdHeartDislike size={50} color="#FE5166" />
                    </span>
                    <span onClick={() => matchPerson(profileId)}>
                        <IoIosHeart size={50} color="#32E7B5" />
                    </span>
                </ControlsBox>
            )}
        </>
    );
}
