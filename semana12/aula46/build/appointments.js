"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointments = void 0;
const moment = require("moment");
moment.locale('pt-br');
exports.appointments = [
    {
        name: 'Reunião',
        description: 'Reunião muito importante',
        startDate: moment('25/12/2020 15:00', 'DD/MM/YYYY HH:mm'),
        endDate: moment('25/12/2020 16:00', 'DD/MM/YYYY HH:mm'),
    },
    {
        name: 'Reuniãozinha',
        description: 'Reunião não muito importante',
        startDate: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
        endDate: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
    },
];
//# sourceMappingURL=appointments.js.map