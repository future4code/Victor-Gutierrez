import { Clothes, ClothesBasedDiscount } from './ex7.types';
import calculateSalesPrice from './ex7';

describe('Exercicio 7', () => {
  test('should return input product with discount property', () => {
    const testCase = [
      {
        name: 'Sunga Florida',
        price: 22.99,
        collection: Clothes.VERAO,
      },
      {
        name: 'Tanga Florida',
        price: 22.99,
        collection: Clothes.VERAO,
      },
      {
        name: 'Lingerie Florida',
        price: 42.99,
        collection: Clothes.INTIMAS,
      },
    ];

    const exec = calculateSalesPrice(testCase);

    expect(exec).toStrictEqual([
      {
        name: 'Sunga Florida',
        price: 22.99,
        collection: Clothes.VERAO,
        salesPrice: Math.floor(22.9 - 22.9 * ClothesBasedDiscount.VERAO),
        discount: `${Math.floor(ClothesBasedDiscount.VERAO * 100)} % OFF`,
      },
      {
        name: 'Tanga Florida',
        price: 22.99,
        collection: Clothes.VERAO,
        salesPrice: Math.floor(22.9 - 22.9 * ClothesBasedDiscount.VERAO),
        discount: `${Math.floor(ClothesBasedDiscount.VERAO * 100)} % OFF`,
      },
      {
        name: 'Lingerie Florida',
        price: 42.99,
        collection: Clothes.INTIMAS,
        salesPrice: Math.floor(42.99 - 42.99 * ClothesBasedDiscount.INTIMAS),
        discount: `${Math.floor(ClothesBasedDiscount.INTIMAS * 100)} % OFF`,
      },
    ]);
  });
});
