import { useState } from 'react';
import LabenUsers from './../Services/Labenusers';
import { UserFromLabenusers } from '../Types/interfaces';

export default async function useVirtualAuth(
    password: string = 'password',
    email: string = 'email',
) {
    const [user, setUser] = useState<UserFromLabenusers>({
        emailAdress: '',
        passcode: '',
    });

    try {
        const firstCall = await LabenUsers.get(
            `/users/search?name=${password}`,
        );
        const secondCall = await LabenUsers.get(
            `/users/${firstCall.data[0].id}`,
        );
        setUser({
            emailAdress: secondCall.data.email,
            passcode: secondCall.data.name,
        });
    } catch (error) {
        console.error(error);
    }

    if (password === user.passcode && email === user.emailAdress) {
        return true;
    } else {
        return false;
    }
}
