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


/* AULA 10 CONDICIONAIS ------------------------------------------------------------------------------------------------------------------------ */
console.log("-------------------------------------------------Aula 10 Condicionais")

/* EXERCÍCIO 1 */
/* o teste testa nnúmeros, converte a resposta em número, teste se o número é par e retorna uma das mensagens n\ para pares a primeira resposta; para impares a segunda */
console.log("------------------------------------------------\n \nEXERCÍCIO 1 : o teste testa nnúmeros,\n converte a resposta em número, teste se o número é par e retorna uma das mensagens \n para pares a primeira resposta; para impares a segunda")

/* exercício 2 */
/* "EXERCÍCIO 2: ELE TESTA A RESPOSTA DO CLIENTE E RETORNA O VALOR DA VARIAVEL PREÇO  b) 2,25  c) R$ 22,55 d) o comando vai adicionar o preço do default também." */
console.log(" ------------------------------------------------\n \nEXERCÍCIO 2: ELE TESTA A RESPOSTA DO CLIENTE E RETORNA O VALOR DA VARIAVEL PREÇO \n b) 2,25 \n c) R$ " + (2 * 3, 5 + 2.25 + 3 * 5 + 0.30) + "\n d) o comando vai adicionar o preço do default também.")

/* EXERCICIO 3 */
/* A variavel mensagem está no bloco errado o que gera um erro " */
console.log("------------------------------------------------\n \nEXERCÍCIO 3: A variavel mensagem está no bloco errado o que gera um erro ")

/* EXERCÍCIO 4 */

console.log("------------------------------------------------\n \nEXERCÍCIO 4: \n ")

let userNumber1 = prompt("Insira um número")
let userNumber2 = prompt("Insira um outro número")

if (userNumber1 > userNumber2) {
    alert(`${userNumber1}, ${userNumber2}`);
    console.log(`${userNumber1}, ${userNumber2}`)
} else if (userNumber1 === userNumber2) {
    alert("É o mesmo número")
} else if (userNumber2 > userNumber1) {
    alert(`${userNumber2}, ${userNumber1}`);
    console.log(`${userNumber2}, ${userNumber1}`)
}

console.log("a) String `É o mesmo número aparece.`, e sem a condição nada acontece. \n")
/* a) String "É o mesmo número aparece. e sem a condição nada acontece." */


let n1 = prompt("Insira um número")
let n2 = prompt("Insira um outro número")
let n3 = prompt("Insira um terceiro número")

if (n1 > n2 && n2 > n3) {
    alert(`${n1}, ${n2}, ${n3}`);
    console.log(n1, n2, n3)

} else if (n1 == n2 && n2 == n3) {
    alert("É o mesmo número, insira outro")
    console.log("igual")

} else if (n2 > n1 && n1 > n3) {
    alert(`${n2}, ${n1}, ${n3}`);
    console.log(n2, n1, n3)

} else if (n2 > n3 && n3 > n1) {
    alert(`${n2}, ${n3}, ${n1}`);
    console.log(n2, n3, n1)


} else if (n3 > n1 && n1 > n2) {
    alert(`${n3}, ${n1}, ${n2}`);
    console.log(n3, n1, n2)


} else if (n3 > n2 && n2 > n1) {
    alert(`${n3}, ${n2}, ${n1}`);
    console.log(n3, n2, n1)
}




console.log("b) String `É o mesmo número aparece.`, e sem a condição nada acontece. \n  c) resolvido")

/* EXERCÍCIO 5 */

console.log("------------------------------------------------\n \nEXERCÍCIO 5: \n ")



let possuiOssos = prompt("Esse animal que você encontrou, me conte sobre ele... Responda todas as perguntas com `s` para sim e `n`; para não \n O animal que você encontrou, possui ossos? s ou n")


if (possuiOssos === "s") {
    let vertebrado = prompt("Possui pelos?")
    if (vertebrado === "s") {
        let mamifero = prompt("É racional?")
        if (mamifero === "s") {
            alert("É humano!")
        } else {
            alert("não é humano")
        }
    } else if (vertebrado !== "s") {
        let possuiPenas = prompt("possui penas?")
        if (possuiPenas === "n") {
            let terreste = prompt("é terrestre?")
            if (terreste === "s") {
                let reptanf = prompt("Passa parte da vida na agua?")
                if (reptanf === "s") {
                    alert("é um anfibio")
                } else {
                    alert("é um reptil")
                }
            } else {
                alert("é um peixe")
            }

        } else {
            alert("É uma ave")
        }
    }
} else {
    alert("É invertebrado")
}
/* https://drive.google.com/open?id=15uQ30eO3iRcW4wXHelSg0TvQ6EPZXnmf */




/* DESAFIO */
console.log("------------------------------------------------\n DESAFIO: \n ")

let nome = prompt("Nome completo:")
let tipo = prompt("Indique o tipo de jogo IN para internacional e DO para doméstico")
let categoria
let qtd
let valuation
let totalValuation
let etapa


if (tipo === "IN") {
    let etapa = prompt("Indique a etapa do jogo, SF para semifinal, DT para decisão de terceiro lugar e FI para Final")
    if (etapa === "SF") {
        let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
        let qtd = prompt("Indique a quantidade de ingressos")
        if (categoria === 1) {
            valuation = 1320;
            totalValuation = qtd * valuation;
        } else if (categoria === 2) {
            valuation = 880;
            totalValuation = qtd * valuation;
        } else if (categoria === 3) {
            valuation = 550;
            totalValuation = qtd * valuation;
        } else if (categoria === 4) {
            valuation = 220;
            totalValuation = qtd * valuation;
        }
        tipo = "Internacional"
        etapa = "Semifinal"
        console.table(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
             \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: US$ ` + valuation * 4.1 + `\n Valor total: US$ ` + totalValuation * 4.1);

    } else if (etapa === "DT") {
        let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
        let qtd = prompt("Indique a quantidade de ingressos")
        if (categoria === 1) {
            valuation = 660;
            totalValuation = qtd * valuation;
        } else if (categoria === 2) {
            valuation = 440;
            totalValuation = qtd * valuation;
        } else if (categoria === 3) {
            valuation = 330;
            totalValuation = qtd * valuation;
        } else if (categoria === 4) {
            valuation = 170;
            totalValuation = qtd * valuation;
        }
        tipo = "Internacional"
        etapa = "Disputa do terceiro lugar"
        console.log(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
             \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: US$ ` + valuation * 4.1 + `\n Valor total: US$ ` + totalValuation * 4.1);

    } else if (etapa === "FI") {
        let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
        let qtd = prompt("Indique a quantidade de ingressos")
        if (categoria === 1) {
            valuation = 1980;
            totalValuation = qtd * valuation;
            price = totalValuation
        } else if (categoria === 2) {
            valuation = 1320;
            totalValuation = qtd * valuation;

        } else if (categoria === 3) {
            valuation = 880;
            totalValuation = qtd * valuation;

        } else if (categoria === 4) {
            valuation = 330;
            totalValuation = qtd * valuation;
        }
        tipo = "Internacional"
        etapa = "Final"
        console.log(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
             \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: US$ ` + valuation * 4.1 + `\n Valor total: US$ ` + totalValuation * 4.1);
    }

} else if (tipo === "DO") {
    {
        let etapa = prompt("Indique a etapa do jogo, SF para semifinal, DT para decisão de terceiro lugar e FI para Final")
        if (etapa === "SF") {
            let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
            let qtd = prompt("Indique a quantidade de ingressos")
            if (categoria === 1) {
                valuation = 1320;
                totalValuation = qtd * valuation;
            } else if (categoria === 2) {
                valuation = 880;
                totalValuation = qtd * valuation;
            } else if (categoria === 3) {
                valuation = 550;
                totalValuation = qtd * valuation;
            } else if (categoria === 4) {
                valuation = 220;
                totalValuation = qtd * valuation;
            }
            tipo = "Nacional"
            etapa = "Semifinal"
            console.log(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
             \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: R$ ${valuation} \n Valor total: R$ ${totalValuation}`);

        } else if (etapa === "DT") {
            let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
            let qtd = prompt("Indique a quantidade de ingressos")
            if (categoria === 1) {
                valuation = 660;
                totalValuation = qtd * valuation;
            } else if (categoria === 2) {
                valuation = 440;
                totalValuation = qtd * valuation;
            } else if (categoria === 3) {
                valuation = 330;
                totalValuation = qtd * valuation;
            } else if (categoria === 4) {
                valuation = 170;
                totalValuation = qtd * valuation;
            }
            tipo = "Nacional"
            etapa = "Disputa pelo terceiro lugar"
            console.log(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
             \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: R$ ${valuation} \n Valor total: R$ ${totalValuation}`);

        } else if (etapa === "FI") {
            let categoria = Number(prompt("Selecione a categoria de 1 a 4"))
            let qtd = prompt("Indique a quantidade de ingressos")
            if (categoria === 1) {
                valuation = 1980;
                totalValuation = qtd * valuation;

            } else if (categoria === 2) {
                valuation = 1320;
                totalValuation = qtd * valuation;

            } else if (categoria === 3) {
                valuation = 880;
                totalValuation = qtd * valuation;

            } else if (categoria === 4) {
                valuation = 330;
                totalValuation = qtd * valuation;
            }
            tipo = "Nacional"
            etapa = "Final"
            tipo = "Nacional"
            console.log(`---Dados da Compra--- \n Nome do cliente: ${nome} \n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa} \nCategoria: ${categoria} 
            \n Quantidade de Ingressos: ${qtd} ingressos \n ----- Valores -------- \n Valor do ingresso: R$ ${valuation} \n Valor total: R$ ${totalValuation}`);
        }
    }
}