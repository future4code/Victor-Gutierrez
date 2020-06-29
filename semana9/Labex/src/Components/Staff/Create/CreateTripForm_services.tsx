import { toast } from 'react-toastify';
import { Trip } from '../../../Types/interfaces';
import { parseISO, format, isPast, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import LabeXAdmin from './../../../Services/LabeXAdmin';

export const SendCreationData = async (data: Trip) => {
    if (isPast(parseISO(data.date)) || isToday(parseISO(data.date))) {
        toast.error('Selecione apenas datas a partir de hoje.');
    } else {
        const treatData = {
            name: data.name,
            date: format(parseISO(data.date), 'dd/MM/yyyy', { locale: ptBR }),
            durationInDays: Number(data.durationInDays),
            planet: data.planet,
            description: data.description,
        };

        try {
            await LabeXAdmin.post(`/trips`, treatData);
            toast.dark(
                'Viagem cadastrada com sucesso. Usuários já podem se inscrever',
            );
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        }
    }
};
