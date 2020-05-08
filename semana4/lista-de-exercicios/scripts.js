/* - Recomendamos que cada exercício esteja dentro de uma função. 
Lembre-se de comentar qual é o exercício OU deixe isso bem claro no nome da função. */

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