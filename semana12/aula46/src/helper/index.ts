const now: Date = new Date();
console.log(now);

console.log('Timestamp', now.getTime());
console.log('Mês', now.getMonth());
console.log('Ano', now.getFullYear());
console.log('Day', now.getDate());

let date: Date = new Date(1595985777192);
console.log(date);
date = new Date('1987-10-19');
console.log(date);
date = new Date(1987, 9, 19);
console.log(date);

import * as moment from 'moment';
// ou import moment from 'moment'

moment.locale('pt-br');

const today: moment.Moment = moment();
// seta qual fuso horário queremos usar
console.log(today.utcOffset('-0500').format('DD/MM/YYYY hh:mm a'));
// formata a saída da data
console.log('Data formatada: ', today.format('DD/MM/YYYY'));
console.log('Data formatada: ', today.format('DD MMMM YYYY hh:mm:ss'));

// utilizando o timestamp para instanciar uma data com moment

let newDate: moment.Moment = moment.unix(1595894400).utc();
console.log(date);

// utilizando uma string para instanciar uma data com moment

newDate = moment('19/10/1987', 'DD/MM/YYYY');

newDate = moment('19 de Outubro de 1987', 'DD [de] MMMM [de] YYYY');
console.log(newDate.format('DD/MM/YYYY'));

//SOMANDO HORAS

// com o Date do JS

// 1h = 60min
// 1min = 60s
// 1segundo = 1000 milissegundos

const date1: Date = new Date();
// 1 hora representada em milissegundos
console.log(date1);
const hoursInMilisseconds = 60 * 60 * 1000 * 24;
//timestamp em milissegundos
const timestamp: number = date1.getTime();
const date2: Date = new Date(hoursInMilisseconds + timestamp);
console.log(date2);

// com o moment.js

const dateMoment1: moment.Moment = moment('28/07/2020', 'DD/MM/YYYY');
console.log(dateMoment1);
const dateMoment2: moment.Moment = dateMoment1.add(1, 'day');
console.log(dateMoment2);

const data1: moment.Moment = moment('10/10/2019', 'DD/MM/YYYY');
const data2: moment.Moment = moment('20/10/2019', 'DD/MM/YYYY');
const diff = data2.diff(data1, 'days');
console.log(diff);
