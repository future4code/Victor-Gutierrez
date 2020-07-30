import { AppointmentSchema as Appointment } from './ex1/exercicio1.types';
import * as moment from 'moment';

moment.locale('pt-br'); //Por existirem instancias do moment aqui, o locale é necessário.

export const appointments: Appointment[] = [
  {
    name: 'Reunião',
    description: 'Reunião muito importante',
    startDate: moment('25/12/2020 15:00', 'DD/MM/YYYY HH:mm'),
    endDate: moment('25/12/2020 16:00', 'DD/MM/YYYY HH:mm'),
  }, //Uma abordagem melhor seria não instanciar o moment na "base de dados"
  {
    name: 'Reuniãozinha',
    description: 'Reunião não muito importante',
    startDate: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
    endDate: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
  },
];
