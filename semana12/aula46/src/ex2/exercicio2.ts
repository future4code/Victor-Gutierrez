import * as moment from 'moment';
import { AppointmentSchema } from '../ex1/exercicio1.types';
import { appointments } from '../appointments';

export const seeSchedule = (
  appointmentList: AppointmentSchema[],
  locale = 'pt'
): void => {
  appointmentList.forEach((appointment) => {
    moment.locale(locale); //b em caso de um evento estrangeiro o locale deveria mudar então achei melhor tornar a função mais pura e mais flexível

    const duration = appointment.endDate.diff(appointment.startDate, 'minutes');
    const daysUntilEvent = appointment.startDate.diff(moment(), 'days');

    if (daysUntilEvent > 0) {
      console.log(
        `\nNome: ${
          appointment.name
        } \n\n Acontecerá em ${daysUntilEvent} dias \n Duração: ${duration} minutos\n Horário de ínicio: ${appointment.startDate.format(
          'dddd [de] MMMM [de] YYYY[,] [às] HH:mm'
        )} \n Horário de fim: ${appointment.endDate.format(
          'DD/MM/YYYY [às] HH:mm'
        )} \n Descricao: ${appointment.description}`
      );
    } else {
      console.log(
        `\nNome: ${
          appointment.name
        } \n\n Evento Concluído \n Duração: ${duration} minutos \n Horário de ínicio: ${appointment.startDate.format(
          'dddd [de] MMMM [de] YYYY[,] [às] HH:mm'
        )} \n Horário de fim: ${appointment.endDate.format(
          'DD/MM/YYYY [às] HH:mm'
        )} \n Descricao: ${appointment.description}`
      );
    }
  });
};

seeSchedule(appointments);
