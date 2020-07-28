import obterEstatisticas from './ex2';

describe('Exercicio 2', () => {
  test('should return the highest the lowest and the median number', () => {
    const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const exec = obterEstatisticas(testCase);

    expect(exec).toStrictEqual({ maior: 9, menor: 1, media: 5 });
  });
});
