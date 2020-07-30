import convertDNA from './ex9';

describe('Exercicio 9', () => {
  test('should translate DNA nitrogen bases', () => {
    const testCase = 'ATTGCTGCGCATTAACGACGCGTA';

    const exec = convertDNA(testCase);

    expect(exec).toStrictEqual('UAACGACGCGUAAUUGCUGCGCAU');
  });
});
