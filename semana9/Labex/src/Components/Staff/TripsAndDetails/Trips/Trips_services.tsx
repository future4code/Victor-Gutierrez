import { toast } from 'react-toastify';
import LabeXAdmin from '../../../../Services/LabeXAdmin';

export const deleteTripFromDashboard = async (id: string) => {
    try {
        LabeXAdmin.delete(`/trips/${id}`);
        toast.dark('Viagem deletada');

        setTimeout(() => {
            window.location.reload();
        }, 1500);
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
};
