import getFatorial from './ex11';

describe('Exercicio 11', () => {
  test('should return fatorial of given number', () => {
    const testCase = [3, 4, 5, 6];

    const exec = getFatorial(testCase[2]);

    expect(exec).toStrictEqual(120);
  });
  test('should return fatorial of 0 as 1', () => {
    const exec = getFatorial(0);

    expect(exec).toStrictEqual(1);
  });
});
