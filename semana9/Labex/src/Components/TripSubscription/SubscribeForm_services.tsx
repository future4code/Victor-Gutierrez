import LabeX from './../../Services/LabeX';
import { TripSubscription } from '../../Types/interfaces';
import { toast } from 'react-toastify';

export const SendSubmission = async (id: string, data: TripSubscription) => {
    try {
        await LabeX.post(`/trips/${id}/apply`, data);
        toast.dark(
            'Seu cadastro foi concluído com sucesso, responderemos em breve ! ',
        );
    } catch (error) {
        toast.error('Houve um erro no seu cadastro');
        return false;
    }
};
