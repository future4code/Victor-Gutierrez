"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
const date1 = moment('20/10/2019', 'DD/MM/YYYY');
const date2 = moment('10/10/2010', 'DD/MM/YYYY');
const date3 = moment('31/12/2019', 'DD/MM/YYYY');
const date4 = moment('01/01/2019', 'DD/MM/YYYY');
const date5 = moment('19/08/2011', 'DD/MM/YYYY');
const date6 = moment('10/11/1995', 'DD/MM/YYYY');
function getInformation(firstDate, secondDate, unitOfTime) {
    console.log('Difrença: ', firstDate.diff(secondDate, unitOfTime));
    console.log('O dia da semana da primeira data é: ', firstDate.format('dddd'));
    console.log('O dia da semana da segunda data é: ', secondDate.format('dddd'));
}
getInformation(date1, date2, 'years');
getInformation(date3, date4, 'hours');
getInformation(date5, date6, 'years');
//# sourceMappingURL=exercicio3.js.map