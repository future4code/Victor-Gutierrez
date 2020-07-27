import printYearAndAge from './ex6';

describe('Exercicio 6', () => {
  test('should track and return the year and DC or AC sign', () => {
    const testCases = [9, 1997, 1400, 2033];

    const exec = printYearAndAge(testCases[0]);
    const exec1 = printYearAndAge(testCases[1], 'AC');
    const exec2 = printYearAndAge(testCases[2]);
    const exec3 = printYearAndAge(testCases[3]);

    expect(exec).toStrictEqual('9 DC pertence à Idade Antiga');
    expect(exec1).toStrictEqual('1997 AC pertence à Idade Antiga');
    expect(exec2).toStrictEqual('1400 DC pertence à Idade Média');
    expect(exec3).toStrictEqual(
      '2033 DC pertence à uma idade que ainda não sabemos'
    );
  });
});
