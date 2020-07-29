import * as moment from 'moment';

moment.locale('pt-br');

const date: moment.Moment = moment('28/07/2019 15:30', 'DD/MM/YYYY HH:mm');
console.log('Formato inicial: ', date.format('DD/MM/YYYY [às] HH:mm'));
console.log('Timestamp: ', date.unix());
console.log('Formato inicial: ', date.format("MM/DD/YYYY hh:mm a"));
console.log('Formato inicial: ', date.format('DD/MM/YYYY [é] dddd'));