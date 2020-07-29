"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
const data1 = moment('10/10/2019', 'DD/MM/YYYY');
const data2 = moment('20/10/2019', 'DD/MM/YYYY');
const diff = data2.diff(data1, 'days');
console.log(diff);
//# sourceMappingURL=index.js.map