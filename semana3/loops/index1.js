/* AULA 11 ----------------------------------------------------------- */
/* EXERCICIO 1 ----------------------------------------------------------- */
console.log("---------------------------------------------- AULA 11\n")
console.log("-------EXERCICIO 1 \n")
/* RETORNA 105 POIS A CADA RODADA ELE SOMA O VALOR DE I EM SUM  */
console.log("RETORNA 105 POIS A CADA RODADA ELE SOMA O VALOR DE I EM SUM \n\n\n")




/* EXERCICIO 2 ----------------------------------------------------------- */
console.log("EXERCICIO 2 ----------------------------------------------------------- \n")
/* a) .push insere um novo item no final da lista
  B)[10, 15, 25, 30] 
  C) SE NUMERO = 3 [ 12, 15, 18, 21, 27, 30 ] SE NUMERO = 4 [ 12 ]*/

console.table(`a) .push insere um novo item no final da lista
  B)[10, 15, 25, 30] 
  C) SE NUMERO = 3 [ 12, 15, 18, 21, 27, 30 ] SE NUMERO = 4 [ 12 ] \n\n\n`)


/*   /* DESAFIO ----------------------------------------------------------- * / 

0
00
000
0000  SE O USUARIO INSERIR 4

 */
console.log("DESAFIO -----------------------------------------------------------\n")
console.log(`0
00
000
0000 se usuário inserir 4 \n\n`)



/* EXERCICIO 3 ----------------------------------------------------------- A*/
console.log("EXERCICIO 3 ----------------------------------------------------------- \n")


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let sortarr = []

for (number of array) {
    sortarr.push(number)
}
sortarr.sort((a, b) => a - b)
console.log(`a) O maior número é ${sortarr[sortarr.length - 1]} e o menor número é ${sortarr[0]}\n`)

/* ----------------------------------------------------------------------------- B */

let split10 = []

for (number of array) {
    number = number / 10;
    split10.push(number)
}

console.log(`b) ${split10}`)

/* -----------------------------------------------------------------------------------C */

let evenArr = []


for (number of array) {
    if (number % 2 === 0) {
        evenArr.push(number)
    }
}

console.log(`c) ${evenArr}`)

/* -----------------------------------------------------------------------------------D */

let strArr = ["c)"]

for (i = 0; i < array.length; i++) {
    strArr.push(`O elemento do index ${0 + i} é ${array[i]}`);
}

console.table(strArr)

/* DESAFIO ----------------------------------------------------------------------- */
console.log("\n\nDESAFIO ----------------------------------------------------------- \n")
let promptPlayer1 = Number(prompt("Player 1: Escolha um número ! "));
console.log("Vamos Jogar!");

for (i = 0; i >= 0; i++) {
    let promptPlayer2 = Number(prompt("Player 2: Escolha um número ! "))
    if (promptPlayer1 === promptPlayer2) {
        console.log(`Você acertou! Levou apenas ${i + 1} tentativas`);
        break
    } else if (promptPlayer1 !== promptPlayer2) {
        console.log("ERROUUUUUUUUU NEYMAAARRRRR");
        console.log("Tente novamente")
    }
}

/* DESAFIO 2----------------------------------------------------------------------- */
console.log("\n\nDESAFIO 2----------------------------------------------------------- \n")

let pcGenerator = Math.floor(Math.random() * 100);
console.log("Vamos Jogar!");

for (i = 0; i >= 0; i++) {
    let manAgainstMachine = Number(prompt("Escolha um número e dispute contra a máquina! (Ela sempre vence)"))
    if (pcGenerator === manAgainstMachine) {
        console.log(`Você acertou! Levou apenas ${i + 1} tentativas`);
        break
    } else if (pcGenerator !== manAgainstMachine) {
        console.log("ERROUUUUUUUUU NEYMAAARRRRR");
        console.log("Tente novamente")
    }
}