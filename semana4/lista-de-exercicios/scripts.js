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

function getEvenPlus(number) {
  let nEvens = [];

  for (i = 0; i < number * 2; i++) {
    if (i % 2 === 0) {
      nEvens.push(i);
    }
  }
  console.log(nEvens + "\n\n");
}

/* Corrigindo a implemenação dele: */
const quantidadeDeNumerosPares = 5;
let i = 0;
while (i < quantidadeDeNumerosPares * 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

getEvenPlus(6);

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
  console.log(checkGap(num1, num2));
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
    return `A diferença entre eles é ${num2 - num1}\n\n\n`;
  }
}

comparison(24, 224);

/* FUNÇÕES --------------------------------------------------- */
console.log("FUNÇÕES ----------------------------------------------- \n");

let RandomArray = [12, 52, 31, 423, 54, 65, 77, 18, 94, 10];

function noSenseFiltering(array) {
  array.sort();
  return `O segundo maior é ${array[array.length - 2]}\n O segundo menor é ${
    array[1]
  }\n\n`;
}

console.log(noSenseFiltering(RandomArray));

/* * Funções --------------------------------------------------- */

console.log(
  "Exercício 2 ------------------------------------------------------------------\n"
);

let anonimal = () => {
  alert("Hello Future4 or, for the intimates: Labenu");
};

anonimal();
console.log("Alert in page\n\n");

/* OBJETOS --------------------------------------------------- */
console.log("OBJETOS ----------------------------------------------- \n");

console.log(
  "Exercício 1 ------------------------------------------------------------------\n"
);
/* Quando precisamos registrar diversos valores correspondentes a um mesmo item podemos utilizar objetos e utilizar as suas chaves e valores, arrays já ajudam a armazenad valores menos complexos */
console.log(
  "Quando precisamos registrar diversos valores correspondentes a um mesmo item podemos utilizar objetos e utilizar as suas chaves e valores, arrays já ajudam a armazenad valores menos complexos\n\n"
);

console.log(
  "Exercício 2 ------------------------------------------------------------------\n"
);

let rectangleArr = [];

function criaretangulo(width, height) {
  let triangle = {};
  triangle.largura = width;
  triangle.altura = height;
  triangle.perimetro = 2 * (width + height);
  triangle.area = width * height;
  console.log(triangle);
}

criaretangulo(12, 3);

console.log(
  "Exercício 3 ------------------------------------------------------------------\n"
);

let movies = [
  {
    nome: "The Shawnshank Redemption",
    protagonista: "Tim Robbins",
    coadjuvante: "Morgan Freeman",
    diretor: "Frank Darabont",
    ano: "1994",
    IMDb: "9,3",
  },
];

console.log(`Venha assistir ao clássico ${movies[0].nome}, de ${movies[0].ano}. Protagonizado por ${movies[0].prontagonista}, um banqueiro é acusado de um crime e procura redenção em atos de decência.
Uma verdadeira obra prima de ${movies[0].diretor}. Um dos coadjuvantes é ninguém mais ninguém menos que ${movies[0].coadjuvante}! O sucesso emplacou uma nota de ${movies[0].IMDb} no IMDb.\n\n`);

console.log(
  "Exercício 4 ------------------------------------------------------------------\n"
);

let person = {
  nome: "Alan Mathison Turing ",
  idade: 41,
  profissao: "Gênio injustiçado",
  vidasSalvas: 14000,
  email: "turing@enigma.get.this",
};

function hideFromGovernment(object) {
  object.nome = object.nome.replace(/[a-z]/gi, ".- -. --- -. .. -- ---");
  object.profissao = object.profissao.replace(" injustiçado", "");
  object.vidasSalvas = ".. -. ..-. .. -. .. - ---";
  console.log(object);
}

hideFromGovernment(person);

/* Arrays --------------------------------------------------- */
console.log("\n\nArrays ----------------------------------------------- \n");
console.log(
  "Exercício 1 ------------------------------------------------------------------\n"
);

let people = [
  {
    nome: "Pedro",
    idade: 20,
  },
  {
    nome: "João",
    idade: 10,
  },
  {
    nome: "Paula",
    idade: 12,
  },
  {
    nome: "Artur",
    idade: 89,
  },
];

let older = people.filter((index) => {
  if (index.idade >= 20) {
    return true;
  }
});

let newer = people.filter((index) => {
  if (index.idade < 20) {
    return true;
  }
});

console.log(older);
console.log(newer);

console.log(
  "\nExercício 2 ------------------------------------------------------------------\n"
);

const testArray = [1, 2, 3, 4, 5, 6];

let mapToTwice = testArray.map((arg) => {
  return arg * 2;
});

let mapTostring = testArray.map((arg) => {
  return (arg * 3).toString();
});

let mapTowhatever = testArray.map((arg) => {
  if (arg % 2 === 0) {
    return `${arg} é par`;
  } else {
    return `${arg} é ímpar`;
  }
});

console.log(mapToTwice);
console.log(mapTostring);
console.log(mapTowhatever);

console.log(
  "\nExercício 3 ------------------------------------------------------------------\n"
);

const pessoasParq = [
  {
    nome: "Paula",
    idade: 12,
    altura: 1.8,
  },
  {
    nome: "João",
    idade: 20,
    altura: 1.3,
  },
  {
    nome: "Pedro",
    idade: 15,
    altura: 1.9,
  },
  {
    nome: "Luciano",
    idade: 22,
    altura: 1.8,
  },
  {
    nome: "Artur",
    idade: 10,
    altura: 1.2,
  },
  {
    nome: "Soter",
    idade: 70,
    altura: 1.9,
  },
];

let getIn = pessoasParq.filter((arg) => {
  if (arg.idade > 14 && arg.altura > 1.5 && arg.idade < 60) {
    return true;
  }
});

let getTFO = pessoasParq.filter((arg) => {
  if (arg.idade < 14 || arg.idade > 60) {
    return true;
  } else if (arg.altura < 1.5) {
    return true;
  }
});

console.log(getIn);
console.log(getTFO);

console.log(
  "\nExercício 4 ------------------------------------------------------------------\n"
);

const consultas = [
  {
    promtrat: "Sr.",
    promF: "lo",
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    promtrat: "Sr.",
    promF: "lo",
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    promtrat: "Sra.",
    promF: "la",
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    promtrat: "Sra.",
    promF: "la",
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

let mailingConfirm = consultas.map((arg) => {
  if (arg.cancelada === false) {
    return `Olá, ${arg.promtrat}${arg.nome}. Estamos enviando esta mensagem para lembrá-${arg.promF} da sua consulta no dia ${arg.dataDaConsulta}.Por favor, acuse o recebimento deste e - mail.`;
  } else {
    return "-";
  }
});

let mailingCancel = consultas.map((arg) => {
  if (arg.cancelada === true) {
    return `Olá, ${arg.promtrat}${arg.nome}. Infelizmente, sua consulta marcada para o dia ${arg.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá - la`;
  } else {
    return "-";
  }
});

console.log(mailingConfirm);
console.log(mailingCancel);

console.log(
  "\nExercício 5 ------------------------------------------------------------------\n"
);

const contas = [
  {
    cliente: "João",
    saldoTotal: 1000,
    compras: [100, 200, 300],
  },
  {
    cliente: "Paula",
    saldoTotal: 7500,
    compras: [200, 1040],
  },
  {
    cliente: "Pedro",
    saldoTotal: 10000,
    compras: [5140, 6100, 100, 2000],
  },
  {
    cliente: "Luciano",
    saldoTotal: 100,
    compras: [100, 200, 1700],
  },
  {
    cliente: "Artur",
    saldoTotal: 1800,
    compras: [200, 300],
  },
  {
    cliente: "Soter",
    saldoTotal: 1200,
    compras: [],
  },
];

function fixBalance(array) {
  for (items in array) {
    array[items].saldoTotal -= array[items].compras.reduce((a, b) => a + b, 0);
    console.table(array[items]);
  }
}

console.table(fixBalance(contas));
