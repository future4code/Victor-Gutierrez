"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const moment = require("moment");
const appointments_1 = require("../appointments");
const fs = require('fs');
const path = require('path');
moment.locale('pt-br');
exports.createAppointment = (newAppointment) => {
    if (!newAppointment.name ||
        !newAppointment.description ||
        !newAppointment.endDate ||
        !newAppointment.startDate) {
        throw new Error('Um dos dados está faltando. Por favor, certifique-se de que passou todos os dados {name, description, endDate, startDate}');
    }
    else if (newAppointment.startDate.diff(moment(), 'seconds') < 0 ||
        newAppointment.endDate.diff(moment(), 'seconds') < 0 ||
        newAppointment.endDate.diff(newAppointment.startDate, 'seconds') < 0) {
        throw new Error('As datas devem seguir as seguintes condições: \nNão podem ser no passado \nA data de inicio deve ser anterior à data de fim \n');
    }
    else if (!moment(newAppointment.endDate).isValid() ||
        !moment(newAppointment.startDate).isValid()) {
        throw new Error("Data inválida, deve seguir o padrão moment('12/12/2012 12:00','DD/MM/YYYY HH:mm') ");
    }
    else {
        appointments_1.appointments.push(newAppointment);
        fs.writeFileSync(path.join(__dirname) + '/events.json', JSON.stringify(appointments_1.appointments));
    }
};
exports.createAppointment({
    name: 'Reuniãozinha',
    description: 'Reunião não muito importante',
    startDate: moment('26/12/2020 17:00', 'DD/MM/YYYY HH:mm'),
    endDate: moment('26/12/2020 18:00', 'DD/MM/YYYY HH:mm'),
});
//# sourceMappingURL=exercicio4.js.map