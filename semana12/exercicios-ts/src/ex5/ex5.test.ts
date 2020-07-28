import operate from './ex5';

describe('Exercício 5', () => {
  test('should return sum, subtraction and multiplication and the biggest of input numbers', () => {
    const testCase = [7, 2];
    const testCase1 = [700, 300];

    const exec = operate(testCase[0], testCase[1]);
    const exec1 = operate(testCase1[0], testCase1[1]);

    expect(exec).toStrictEqual({
      sum: 9,
      subtraction: 5,
      multiplication: 14,
      biggest: 7,
    });
    expect(exec1).toStrictEqual({
      sum: 1000,
      subtraction: 400,
      multiplication: 210000,
      biggest: 700,
    });
  });
});
