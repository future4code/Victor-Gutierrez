"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
const date = moment('28/07/2019 15:30', 'DD/MM/YYYY HH:mm');
console.log('Formato inicial: ', date.format('DD/MM/YYYY [às] HH:mm'));
console.log('Timestamp: ', date.unix());
console.log('Formato inicial: ', date.format("MM/DD/YYYY hh:mm a"));
console.log('Formato inicial: ', date.format('DD/MM/YYYY [é] dddd'));
//# sourceMappingURL=exercicio2.js.map