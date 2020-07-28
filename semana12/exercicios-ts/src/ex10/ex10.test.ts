import reversor from './ex10';

describe('Exercicio 10', () => {
  test('should return reversed string', () => {
    const testCase = 'abcd';

    const exec = reversor(testCase);

    expect(exec).toStrictEqual('dcba');
  });
});
