alert("Bem Vindo ao Blackjack!");
let arrayUser = []; /* ARRAY DE CARTAS DO JOGADOR */
let arrayUser_naipe = []; /* ARRAY DE NAIPES DO JOGADOR */
let arrayCOM = []; /* ARRAY DE CARTAS DO COMPUTADOR */
let arrayCOM_naipe = []; /* ARRAY DE NAIPES DO COMPUTADOR */
const sumArray = (valorPrev, valorNext) => valorPrev + valorNext; /* FUNÇÃO QUE SERVE DE ARGUMENTTO  PARA O REDUCE NO FINAL DO PROGRAMA */



/* AQUI UM LOOP QUE SORTEIA DUAS CARTAS PARA CADA JOGADOR */
if (confirm("Quer iniciar uma nova rodada?")) {
   for (let i = 0; i < 2; i++) {
      const cardToUser = comprarCarta();
      arrayUser_naipe.push(cardToUser.texto);
      arrayUser.push(cardToUser.valor);
      console.log(`Você recebeu ${arrayUser_naipe[i]}`);
      const cardToCOM = comprarCarta();
      arrayCOM_naipe.push(cardToCOM.texto);
      arrayCOM.push(cardToCOM.valor);
      console.log(`O segundo jogador recebeu ${arrayCOM_naipe[i]}`);
   }
} else {
   alert("Fim de jogo");
   console.log("Fim de jogo")
}



/* SEGUNDA TRIAGEM DOS VALORES, ONDE O JOGADOR ESCOLHE SE QUER SEGUIR OU SE QUER PARAR */
if (arrayUser.reduce(sumArray) < 21 && arrayCOM.reduce(sumArray) < 21) {
   if (confirm(`Deseja pedir mais cartas? Você tem: ${arrayUser.reduce(sumArray)} sendo ${arrayUser_naipe}`)) {
      const cardToUser = comprarCarta();
      arrayUser_naipe.push(cardToUser.texto);
      arrayUser.push(cardToUser.valor);
      const cardToCOM = comprarCarta();
      arrayCOM_naipe.push(cardToCOM.texto);
      arrayCOM.push(cardToCOM.valor);
      if (arrayUser.reduce(sumArray) < 21 && arrayCOM.reduce(sumArray) < 21) {
         if (confirm(`Deseja pedir mais cartas? Você tem: ${arrayUser.reduce(sumArray)} sendo ${arrayUser_naipe}`)) {
            const cardToUser = comprarCarta();
            arrayUser_naipe.push(cardToUser.texto);
            arrayUser.push(cardToUser.valor);
            const cardToCOM = comprarCarta();
            arrayCOM_naipe.push(cardToCOM.texto);
            arrayCOM.push(cardToCOM.valor);
         } else {
            alert("Rodada da Casa") /* SE O JOGADOR PARAR ELE ESPERA A CASA JOGAR NOVAMENTE */
            const cardToCOM = comprarCarta();
            arrayCOM_naipe.push(cardToCOM.texto);
            arrayCOM.push(cardToCOM.valor);

         }
      } else if (arrayUser.reduce(sumArray) <= 21 && arrayCOM.reduce(sumArray) > 21) {
         alert("Você ganhou! BLACKJACK")
         console.log("Você ganhou! BLACKJACK")
      } else if (arrayUser.reduce(sumArray) > 21 || arrayCOM.reduce(sumArray) === 21) {
         alert("Você perdeu, a casa ganhou !")
         console.log("Você perdeu, a casa ganhou !")
      } else if (arrayUser.reduce(sumArray) === 21 && arrayCOM.reduce(sumArray) === 21) {
         alert("VocÊ empatou com a casa");
         console.log("Você empatou com a casa")
      }
   } else {
      alert("Rodada da Casa") /* SE O JOGADOR PARAR ELE ESPERA A CASA JOGAR NOVAMENTE */
      const cardToCOM = comprarCarta();
      arrayCOM_naipe.push(cardToCOM.texto);
      arrayCOM.push(cardToCOM.valor);
   }

} else if (arrayUser.reduce(sumArray) <= 21 && arrayCOM.reduce(sumArray) > 21) {
   alert("Você ganhou! BLACKJACK")
   console.log("Você ganhou! BLACKJACK")
} else if (arrayUser.reduce(sumArray) > 21 || arrayCOM.reduce(sumArray) === 21) {
   alert("Você perdeu, a casa ganhou !")
   console.log("Você perdeu, a casa ganhou !")
} else if (arrayUser.reduce(sumArray) === 21 && arrayCOM.reduce(sumArray) === 21) {
   alert("VocÊ empatou com a casa");
   console.log("Você empatou com a casa")
}

/* ULTIMA TRIAGEM DOS VALORES; CASO A CASA JOGUE POR ÚLTIMO O VALOR CAI NESSA CONDICIONAL PARA CHECAR O RESULTADO DA PARTIDA */

if (arrayUser.reduce(sumArray) <= 21 && arrayCOM.reduce(sumArray) > 21) {
   alert("Você ganhou! BLACKJACK")
   console.log("Você ganhou! BLACKJACK")
} else if (arrayUser.reduce(sumArray) > 21 || arrayCOM.reduce(sumArray) === 21) {
   alert("Você perdeu, a casa ganhou !")
   console.log("Você perdeu, a casa ganhou !")
} else if (arrayUser.reduce(sumArray) === 21 && arrayCOM.reduce(sumArray) === 21) {
   alert("VocÊ empatou com a casa");
   console.log("Você empatou com a casa")
}




console.log(`Você tinha ${arrayUser.reduce(sumArray)}`);
console.log(`A casa tinha ${arrayCOM.reduce(sumArray)}`);
alert(`Você tinha ${arrayUser.reduce(sumArray)} sendo: ${arrayUser_naipe}\nA casa tinha ${arrayCOM.reduce(sumArray)} sendo: ${arrayCOM_naipe}`)
console.log("Fim de jogo");