import { AppointmentSchema } from '../ex1/exercicio1.types';
import * as moment from 'moment';
import { appointments } from '../appointments';
const fs = require('fs');
const path = require('path');

moment.locale('pt-br');

export const createAppointment = (newAppointment: AppointmentSchema) => {
  if (
    !newAppointment.name ||
    !newAppointment.description ||
    !newAppointment.endDate ||
    !newAppointment.startDate
  ) {
    throw new Error(
      'Um dos dados está faltando. Por favor, certifique-se de que passou todos os dados {name, description, endDate, startDate}'
    );
  } else if (
    newAppointment.startDate.diff(moment(), 'seconds') < 0 ||
    newAppointment.endDate.diff(moment(), 'seconds') < 0 ||
    newAppointment.endDate.diff(newAppointment.startDate, 'seconds') < 0
  ) {
    throw new Error(
      'As datas devem seguir as seguintes condições: \nNão podem ser no passado \nA data de inicio deve ser anterior à data de fim \n'
    );
  } else if (
    !moment(newAppointment.endDate).isValid() ||
    !moment(newAppointment.startDate).isValid()
  ) {
    throw new Error(
      "Data inválida, deve seguir o padrão moment('12/12/2012 12:00','DD/MM/YYYY HH:mm') "
    );
  } else {
    appointments.push(newAppointment);
    fs.writeFileSync(
      path.join(__dirname) + '/events.json',
      JSON.stringify(appointments)
    );
  }
};

createAppointment({
  name: 'Reuniãozinha',
  description: 'Reunião não muito importante',
  startDate: moment('26/12/2020 17:00', 'DD/MM/YYYY HH:mm'),
  endDate: moment('26/12/2020 18:00', 'DD/MM/YYYY HH:mm'),
});
