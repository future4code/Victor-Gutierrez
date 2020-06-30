import LabeX from '../../../Services/LabeX';
import { toast } from 'react-toastify';

import fastStorage from './../../../Hooks/useStorage';

export const AdministratorLogin = async (
    AdminEmail: string,
    AdminPassword: string,
) => {
    const { setItemInSessionStorage } = fastStorage();

    const requestBody = {
        email: AdminEmail,
        password: AdminPassword,
    };

    try {
        const request = await LabeX.post('/login', requestBody);

        setItemInSessionStorage('adminToken', request.data.token);

        toast.dark('Logado com sucesso, você será redirecionado.');
        return true;
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
};
