import { ObterEstatisticasOutput } from './ex2.types';

function obterEstatisticas(numeros: number[]): ObterEstatisticasOutput {
  const numerosOrdenados = numeros.sort((a: number, b: number) => a - b);

  let soma = 0;
  let num: number;

  for (num of numeros) {
    soma += num;
  }

  const estatisticas: ObterEstatisticasOutput = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

export default obterEstatisticas;
