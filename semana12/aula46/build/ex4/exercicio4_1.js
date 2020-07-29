"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointments_1 = require("../appointments");
const moment_1 = require("moment");
const searchSchedule = (hour) => {
    appointments_1.appointments.map((appointment) => {
        if (appointment.startDate.isAfter(moment_1.default(), 'hour')) {
            return appointment;
        }
    });
};
//# sourceMappingURL=exercicio4_1.js.map