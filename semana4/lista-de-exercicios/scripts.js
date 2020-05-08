/* INTERPRETAÇÃO DE CÓDIGO 1 ------------------------------------------------------------------------------ */
console.log("INTERPRETAÇÃO DE CÓDIGO  -----------------------------------------------")
/* INTERPRETAÇÃO DE CÓDIGO  */
/* 1 - A função recebe um argumento  transforma ele em número e retorna esse mesmo valor multiplicado pela cotação do dólar que o usuário inserir no console ele imptimre cotação * 100 \n */
console.log("1 - A função recebe um argumento  transforma ele em número e retorna esse mesmo valor multiplicado pela cotação do dólar que o usuário inserir no console ele imptimre cotação * 100 \n")
/* 2 - a função recebe um tipo de investimento e um valor em o primeiro argumento passa por um switch e é multiplicado pelo segundo dependendo do tipo informado no final ela retorna o valor final desse cálcuco" */
console.log("2 - a função recebe um tipo de investimento e um valor em o primeiro argumento passa por um switch e é multiplicado pelo segundo dependendo do tipo informado no final ela retorna o valor final desse cálcuco\n")
/* 3 - A função percorre os array com loop e imprime os numeros pares em uma e os ímpares em outra no console foi impresso o tamanho das 3 arrays")" */
console.log("3 - a A função percorre os array com loop e imprime os numeros pares em uma e os ímpares em outra no console foi impresso o tamanho das 3 arrays\n")
/* 4 -  o loop percore a array números e e reatribui numero1 e numero2 com os valores que passam nas condicionais, isso tudo em várias rodadas de loop")" */
console.log("4 - o loop percore a array números e e reatribui numero1 e numero2 com os valores que passam nas condicionais, isso tudo em várias rodadas de loop \n")
/* INTERPRETAÇÃO DE CÓDIGO  */ /* INTERPRETAÇÃO DE CÓDIGO  */


/* - Recomendamos que cada exercício esteja dentro de uma função.
Lembre-se de comentar qual é o exercício OU deixe isso bem claro no nome da função. */



/* LOGICCA DE PROGRAMAÇAO */
console.log("LOGICCA DE PROGRAMAÇAO ----------------------------------------------- \n")

console.log("Exercício 1: com for, map, forEach")

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function iterateArray(array) {
    let firstIteration = []
    let secondIteration = []
    let thirdIteration = []
    for (item of array) {
        firstIteration.push(item)
    }
/* ------------------------------- */

    array.map((index) => {
        secondIteration.push(index)
    })
/* ------------------------------- */
    array.forEach(element => {
        thirdIteration.push(element)
    });

    console.log(`1: ${firstIteration} \n 2: ${secondIteration} \n  3: ${thirdIteration}`)
}

iterateArray(baseArray)


/* ------------------------------------------------------------------------------ */
