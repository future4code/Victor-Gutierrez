import LabenUsers from '../../../Services/Labenusers';
import { toast } from 'react-toastify';
import fastStorage from '../../../Hooks/useStorage';

export const fakeLogin = async (UserEmail: string, UserPassword: string) => {
    const { setItemInLocalStorage } = fastStorage();

    try {
        const firstCall = await LabenUsers.get(
            `/users/search?name=${UserPassword}`, //
        );

        const secondCall = await LabenUsers.get(
            `/users/${firstCall.data[0].id}`,
        );

        if (
            secondCall.data.name === UserPassword &&
            secondCall.data.email === UserEmail
        ) {
            setItemInLocalStorage('user', UserEmail);
            setItemInLocalStorage('virtualUserToken', '123123123123');
            toast.dark('Logado com sucesso ! Você será redirecionado.');
        }
        return true;
    } catch (error) {
        toast.error('Há um erro nos dados de login. Você é cadastrado ?');
        return false;
    }
};
