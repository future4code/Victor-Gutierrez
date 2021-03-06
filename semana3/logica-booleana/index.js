const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

/* a.  false */

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

/* b.  false */

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

/* c.  true */

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

/* d.  false */

console.log("e. ", typeof resultado)

/* e.  boolean */


let respostas = {
    a: " Arrays são varriáveis especiais que guardam mais de um valor ",
    b: " [0] ",
    c: "Se determina pelo número de valores dentro dele e se acessa pelo método ´.lenght´"
}

console.table(respostas)

let array
console.log('I. ', array)

/* undefined */

array = null
console.log('II. ', array)

/* II.  null */

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

/* III.  11 */

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])

/* IV.  3  e  4 */

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)

/* V.  19  e  9 */

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])

/* VI.  3 */

i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)

/* VII.  1 */

/* RESPOSTA A */

/* 
let paramF = 77
let kelvin = (paramF - 32) * 5 / 9 + 273.15

function converterFahren(paramF) {
    let kelvin = (paramF - 32) * 5 / 9 + 273.15;
    let celsius = Math.round(kelvin - 273);
    return `${paramF}ºF é igual a ${celsius}ºC e é igual a ${kelvin}K`
} */

let paramF = 77;
let kelvin = (paramF - 32) * 5 / 9 + 273.15;

console.log("RESPOSTA A => " + kelvin)

/* RESPOSTA DA D */
/* let paramC = prompt("Insira qualquer valor em graus Celsius para converter")

function converterCelsius(paramC) {
    let celsius = paramC
    let fahren = celsius * 9 / 5 + 32
    let kelvin = (fahren - 32) * 5 / 9 + 273.15

    return ` ${paramC}ºC em Fahrenheit é ${fahren}ºF e em Kelvin é ${kelvin}K` }*/

let paramC = prompt("Insira qualquer valor em graus Celsius para converter");
let celsius = paramC;
let fahren = celsius * 9 / 5 + 32;
let kelvin2 = (fahren - 32) * 5 / 9 + 273.15;

console.log("RESPOSTA B D e C => " + `${paramC}ºC é igual a ${fahren}ºF e ${kelvin2}K`)

/* RESPOSTA DA D */

let ask1 = prompt("Qual seu nome?");
let ask2 = prompt("Qual seu bairro?");
let ask3 = prompt("Você gosta de prompts?");;
let ask4 = prompt("Já é natal?");
let ask5 = prompt("Você gosta de entrevistas?")

console.log("Suas respostas: \n " + ask1 + "\n", ask2 + "\n", ask3 + "\n", ask4 + "\n", ask5)

/* Kilowatter */

let kilowattCasa = 280 * 0.05;
console.log("R$" + kilowattCasa);

let askKw = prompt("Quantos quilowatts você gastou no último mês?");
let kwPrice = askKw * 0.05;
let discount = kwPrice - (kwPrice * 0.15);

console.log(`Você pagará: R$ ${kwPrice} \n e com um desconto de 15% pagaria: R$ ${discount}`)

/* LIBRA */

let libra = 20
console.log(libra + " libras" + " equivalem a  " + Math.floor(libra * 0.453592) + "kg aproximadamente. ")

/* LIBRA */

/* ONÇA */

let onca = 10.5
console.log(onca + " onças" + " equivalem a " + Math.floor(onca * 0.0283495) + "kg aproximadamente. ")

/* ONÇA */
/* MILHA */

let milha = 100
console.log(milha + " milhas" + " equivalem a " + Math.floor(milha * 1.60934) + "km aproximadamente. ")

/* MILHA */
/* FEETS */

let feets = 50
console.log(feets + " ft" + " equivalem a " + Math.floor(feets * 0.3048) + "m aproximadamente. ")

/* FEETS */
/* GALÕES */

let gal = 103.56
console.log(gal + " gal" + " equivalem a " + Math.floor(gal * 3.78541) + " l aproximadamente. ")

/* GALÕES */
/* XÍCARAS */

let xic = 450
console.log(xic + " xic" + " equivalem a " + Math.floor(xic * 4) + " l aproximadamente. ")



/* XÍCARAS */