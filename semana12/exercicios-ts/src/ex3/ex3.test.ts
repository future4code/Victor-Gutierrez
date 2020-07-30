import { buscarPostsPorAutor, posts } from './ex3';

describe('Exercicio 3', () => {
  test('should return filtered posts array', () => {
    const testItem = posts;
    const testItem1 = 'Severo Snape';

    const exec = buscarPostsPorAutor(testItem, testItem1);

    expect(exec).toStrictEqual([
      {
        autor: 'Severo Snape',
        texto: 'Menos 10 pontos para Grifinória!',
      },
    ]);
  });
});
