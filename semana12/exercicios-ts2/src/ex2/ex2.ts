const operate = (operation: string, ...numbers: string[]): void => {
  if (operation === undefined || numbers === undefined || numbers === []) {
    throw new Error('Um dos parametros está ausente !!!');
  } else if (isNaN(Number(numbers[0])) || isNaN(Number(numbers[1]))) {
    throw new Error('O segundo e terceiro parâmetro devem ser números!!!');
  } else {
    switch (operation) {
      case 'add':
        return console.log(
          '\x1b[36m%s\x1b[0m',
          `Resultado: ${Number(numbers[0]) + Number(numbers[1])}`
        );

      case 'sub':
        return console.log(
          '\x1b[36m%s\x1b[0m',
          `Resultado: ${Number(numbers[0]) - Number(numbers[1])}`
        );

      case 'mut':
        return console.log(
          '\x1b[36m%s\x1b[0m',
          `Resultado: ${Number(numbers[0]) * Number(numbers[1])}`
        );

      case 'div':
        return console.log(
          '\x1b[36m%s\x1b[0m',
          `Resultado: ${Number(numbers[0]) / Number(numbers[1])}`
        );

      default:
        throw new Error(
          'Insira uma operação válida !!! "add", "sub", "mult" ou "div"'
        );
    }
  }
};

operate(process.argv[2], process.argv[3], process.argv[4]);
