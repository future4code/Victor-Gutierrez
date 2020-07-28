const dummyTellMyAge = (name: string, age: string): void => {
  if (name === undefined || age === undefined) {
    throw new Error('Um dos parametros está ausente !!!');
  } else if (!isNaN(Number(name))) {
    throw new Error('Seu nome realmente é um número? Insira um nome válido');
  } else {
    console.log(
      '\x1b[7m',
      `Olá ${name}, Você tem ${age} anos e em 7 anos terá ${Number(age) + 7}`
    );
  }
};

dummyTellMyAge(process.argv[2], process.argv[3]);
