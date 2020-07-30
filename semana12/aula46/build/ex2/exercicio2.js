"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seeSchedule = void 0;
const moment = require("moment");
const appointments_1 = require("../appointments");
exports.seeSchedule = (appointmentList, locale = 'pt') => {
    appointmentList.forEach((appointment) => {
        moment.locale(locale);
        const duration = appointment.endDate.diff(appointment.startDate, 'minutes');
        const daysUntilEvent = appointment.startDate.diff(moment(), 'days');
        if (daysUntilEvent > 0) {
            console.log(`\nNome: ${appointment.name} \n\n Acontecerá em ${daysUntilEvent} dias \n Duração: ${duration} \n Horário de ínicio: ${appointment.startDate.format('dddd [de] MMMM [de] YYYY[,] [às] HH:mm')} \n Horário de fim: ${appointment.endDate.format('DD/MM/YYYY [às] HH:mm')} \n Descricao: ${appointment.description}`);
        }
        else {
            console.log(`\nNome: ${appointment.name} \n\n Evento Concluído \n Duração: ${duration} minutos \n Horário de ínicio: ${appointment.startDate.format('dddd [de] MMMM [de] YYYY[,] [às] HH:mm')} \n Horário de fim: ${appointment.endDate.format('DD/MM/YYYY [às] HH:mm')} \n Descricao: ${appointment.description}`);
        }
    });
};
exports.seeSchedule(appointments_1.appointments);
//# sourceMappingURL=exercicio2.js.map