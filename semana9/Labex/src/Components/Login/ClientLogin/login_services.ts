import LabenUsers from '../../../Services/Labenusers';
import { toast } from 'react-toastify';

export const fakeLogin = async (UserEmail: string, UserPassword: string) => {
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
            localStorage.setItem('virtualUserToken', JSON.stringify(true));
            toast.dark('Logado com sucesso ! Você será redirecionado.', {
                position: 'bottom-center',
                autoClose: 5000,
            });
        }
    } catch (error) {
        toast.error('Este usuário não existe', {
            position: 'bottom-center',
            autoClose: 5000,
        });
    }
};
