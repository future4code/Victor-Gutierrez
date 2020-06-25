import LabenUsers from '../../../Services/Labenusers';
import { toast } from 'react-toastify';

export const FakeRegistering = async (
    UserEmail: string,
    UserPassword: string,
) => {

    const requestBody = {
        email: UserEmail,
        name: UserPassword,
    };

    try {
        await LabenUsers.post('/users', requestBody);

        toast.dark('Cadastrado com sucesso !', {
            position: 'bottom-center',
            autoClose: 5000,
        });
    } catch (error) {
        toast.error(
            'Houve um erro. Certifique-se de inserir um e-mail válido ou tente logar caso seu usuário já exista.',
            {
                position: 'bottom-center',
                autoClose: 5000,
            },
        );
    }
};
