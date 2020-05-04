/* ------------------------------------ EXERCICIO 1 */


console.log("Exercício 1 -------------------------------- \n")


const minhaFuncao = (quantidade) => {
    const array = []
    for (let i = 0; i < quantidade; i += 2) {
        for (let j = 0; j < i; j++) {
            array.push(j)
        }
    }
    return array
}

console.log(minhaFuncao(2)) /* a    [] */
console.log(minhaFuncao(5)) /* b    [ 0, 1, 0, 1, 2, 3 ] */
console.log(minhaFuncao(8)) /* c    [  0, 1, 0, 1, 2,  3, 0, 1, 2, 3,  4, 5] */


console.log(" -------------------------------- \n")


/* ------------------------------------ EXERCICIO 2 */


console.log("Exercício 2 -------------------------------- \n")

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
let arrayDeNum = [1, 2, 3, 4, 5, 6, 7, 8]

const funcao = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            return (i);
        }
    }
};

console.log(funcao(arrayDeNomes, "Darvas")); /* a   INDEX 0 */
console.log(funcao(arrayDeNomes, "João")); /* a    INDEX 2 */
console.log(funcao(arrayDeNomes, "Paula")); /* a      INDEX INDEFINIDO, NÃO EXISTE NA ARRAY */
console.log(funcao(arrayDeNum, 8)) /* b   Funcionaria normalmente */

console.log(" -------------------------------- \n")


/* ------------------------------------------------------------- EXERCICIO 3 */


console.log("Exercício 3 -------------------------------- \n")
console.log("O nome que eu sugeriria: Soma e multiplicação/SumAndMultiply\n Essa função corre uma array e calcula a soma e a multiplicação dos items acumulativamente e joga os resultados em uma array")


function SumAndMultiply(array) {
    /* O nome que eu sugeriria: Soma e multiplicação/SumAndMultiply */
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];

    for (let x of array) {
        /* Essa função corre uma array e calcula a soma e a multiplicação dos items acumulativamente e joga os resultados em uma array */
        resultadoA += x;
        resultadoB *= x;
    }

    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
}




console.log(" -------------------------------- \n")


/* ----------------------------------------------------------------------- EXERCICIO 4 */


console.log("Exercício 4 -------------------------------- \n")




function getDogAge(HumanAge) {
    return HumanAge * 7
}

console.log(getDogAge(4))


function whoAmI(name, age, adress, student) {
    if (student === false) {
        student = "não sou"
    } else {
        student = "sou"
    }

    return `Meu nome é ${name}, tenho ${age} anos, moro em ${adress} e ${student} estudante`
}


console.log(whoAmI("Victor", 22, "Manaus", true))



console.log(" -------------------------------- \n")


/* ----------------------------------------------------------------------- EXERCICIO 5 */


console.log("Exercício 5 -------------------------------- \n")

function getCentury(year) {
    let centArray = [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
    let dumbCentury = Math.ceil(year / 100)
    console.log(`O ano de ${year} pertence ao século ${centArray[dumbCentury]}`)
}

console.log(getCentury(1101))

console.log(" -------------------------------- \n")

/* ----------------------------------------------------------------------- EXERCICIO 6 */


console.log("Exercício 6 -------------------------------- \n")


const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function getLength(array) {
    return array.length
}

console.log(getLength(array))

/* --------------------------------------------------------------------------b */
function OddOrEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}


console.log(OddOrEven(2))
/* ----------------------------------------------------------------------------------c */


function HowMuchEvens(array) {
    let response = 0
    for (let number of array) {
        if (number % 2 === 0) {
            response++
        }
    }
    return console.log(`Nessa array existem ${response} números pares`)
}

console.log(HowMuchEvens(array))

/*  --------------------------------------------------------------------------------------- d */

function HowMuchEvens2(array) {
    let response = []
    for (let number of array) {
        if (number % 2 === 0) {
            response.push(`${number} >> true`)
        }
    }
    return console.log(`${response} \nNessa array existem ${response.length} números pares`)
}

console.log(HowMuchEvens2(array))