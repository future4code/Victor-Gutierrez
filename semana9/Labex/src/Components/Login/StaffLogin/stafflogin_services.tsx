import LabeX from '../../../Services/LabeX';
import { toast } from 'react-toastify';

export const AdministratorLogin = async (
    AdminEmail: string,
    AdminPassword: string,
) => {
    const requestBody = {
        email: AdminEmail,
        password: AdminPassword,
    };

    try {
        const request = await LabeX.post('/login', requestBody);

        sessionStorage.setItem(
            'adminToken',
            JSON.stringify(request.data.token),
        );
        toast.dark('Logado com sucesso, você será redirecionado.', {
            position: 'bottom-center',
        });
    } catch (error) {
        toast.error('Email ou senha incorretos', {
            position: 'bottom-center',
        });
    }
};
