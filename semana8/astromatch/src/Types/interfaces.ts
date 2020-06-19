import * as React from 'react';

export interface StyledProps {
    image: string;
}

export interface ProfileItems {
    profile: Profile;
}

export interface Profile {
    id: string;
    age: number;
    name: string;
    photo: string;
    bio: string;
}

export interface ControlsProps {
    getNewPerson: (event: React.MouseEvent<HTMLButtonElement>) => void;
    matchPerson: (id: string) => void;
    loading: boolean;
    profileId: string;
}

export interface WelcomeProps {
    virtualLoading: boolean;
}
