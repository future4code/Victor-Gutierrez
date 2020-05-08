/* INTERPRETAÇÃO DE CÓDIGO 1 ------------------------------------------------------------------------------ */
console.log(
  "INTERPRETAÇÃO DE CÓDIGO  -----------------------------------------------"
);
/* INTERPRETAÇÃO DE CÓDIGO  */
/* 1 - A função recebe um argumento  transforma ele em número e retorna esse mesmo valor multiplicado pela cotação do dólar que o usuário inserir no console ele imptimre cotação * 100 \n */
console.log(
  "1 - A função recebe um argumento  transforma ele em número e retorna esse mesmo valor multiplicado pela cotação do dólar que o usuário inserir no console ele imptimre cotação * 100 \n"
);
/* 2 - a função recebe um tipo de investimento e um valor em o primeiro argumento passa por um switch e é multiplicado pelo segundo dependendo do tipo informado no final ela retorna o valor final desse cálcuco" */
console.log(
  "2 - a função recebe um tipo de investimento e um valor em o primeiro argumento passa por um switch e é multiplicado pelo segundo dependendo do tipo informado no final ela retorna o valor final desse cálcuco\n"
);
/* 3 - A função percorre os array com loop e imprime os numeros pares em uma e os ímpares em outra no console foi impresso o tamanho das 3 arrays")" */
console.log(
  "3 - a A função percorre os array com loop e imprime os numeros pares em uma e os ímpares em outra no console foi impresso o tamanho das 3 arrays\n"
);
/* 4 -  o loop percore a array números e e reatribui numero1 e numero2 com os valores que passam nas condicionais, isso tudo em várias rodadas de loop")" */
console.log(
  "4 - o loop percore a array números e e reatribui numero1 e numero2 com os valores que passam nas condicionais, isso tudo em várias rodadas de loop \n"
);
/* INTERPRETAÇÃO DE CÓDIGO  */
/* INTERPRETAÇÃO DE CÓDIGO  */

/* - Recomendamos que cada exercício esteja dentro de uma função.
Lembre-se de comentar qual é o exercício OU deixe isso bem claro no nome da função. */

/* LOGICCA DE PROGRAMAÇAO */
console.log(
  "LOGICCA DE PROGRAMAÇAO ----------------------------------------------- \n"
);

console.log("Exercício 1: com for, map, forEach");

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function iterateArray(array) {
  let firstIteration = [];
  let secondIteration = [];
  let thirdIteration = [];
  for (item of array) {
    firstIteration.push(item);
  }
  /* ------------------------------- */

  array.map((index) => {
    secondIteration.push(index);
  });
  /* ------------------------------- */
  array.forEach((element) => {
    thirdIteration.push(element);
  });

  console.log(
    `1: ${firstIteration} \n 2: ${secondIteration} \n  3: ${thirdIteration}\n\n`
  );
}

iterateArray(baseArray);

/* ------------------------------------------------------------------------------ */
console.log(
  "Exercício 2 ------------------------------------------------------------------"
);

console.log("a) false \nb)false \nc) true \nd)true \ne)true \n\n");

/* "a) false b)false c) true d)true e)true */

console.log(
  "Exercício 3 ------------------------------------------------------------------"
);
console.log(
  "Não funciona e gera um loop infinito, corrigindo o código: checkdocument\n\n"
);

/* Não funciona e gera um loop infinito, corrigindo o código: */

function getEvenPlusOne(number) {
  let nEvens = [];

  for (i = 0; i < number; i++) {
    if (i % 2 === 0) {
      nEvens.push(i);
    }
    nEvens.push(nEvens[nEvens.length - 1] + 2);
  }
  console.log(nEvens + "\n\n");
}

getEvenPlusOne(5);

console.log(
  "Exercício 4 ------------------------------------------------------------------"
);

function checkTriangle(a, b, c) {
  switch (true) {
    case Number(a + b + c) === NaN:
      console.log(`Insira apenas números`);
      break;
    case a === b && b === c:
      console.log(`É um triângulo equilátero`);
      break;
    case a === b || b === c || c === a:
      console.log(`É um triângulo isósceles`);
      break;
    case a !== b && b !== c && c !== a:
      console.log(`É um triângulo escaleno`);
      break;
    default:
      console.log("Esse triângulo é anormal");
      break;
  }
}
checkTriangle(2, 2, "aaa");
console.log(
  "Exercício 5 ------------------------------------------------------------------"
);

function comparison(num1, num2) {
  console.log(checkParity(num1, num2));
    console.log(checkRemainder(num1, num2));
    console.log(checkGap(num1, num2))
}

function checkParity(num1, num2) {
  if (num1 > num2) {
    return `O maior é ${num1}`;
  } else {
    return `O maior é ${num2}`;
  }
}

function checkRemainder(num1, num2) {
  if (num1 % num2 == 0) {
    return `${num1} é divisível por ${num2}`;
  } else if (num2 % num1 == 0) {
    return `${num2} é divisível por ${num1}`;
  } else if (num1 % num2 !== 0 && num2 % num1 !== 0) {
    return `Ambos não são divisíveis um pelo outro`;
  }
}
function checkGap(num1, num2) {
    if (num1 > num2) {
        return `A diferença entre eles é ${num1 - num2}`;
    } else {
        return `A diferença entre eles é ${num2 - num1}`;
    }
}

comparison(24, 224);
