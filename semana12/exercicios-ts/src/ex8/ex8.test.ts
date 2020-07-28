import { Product } from './ex8.types';
import RestaurantManager from './ex8';

describe('Exercicio 8', () => {
  const initialProducts: Product[] = [
    {
      name: 'Lasanha',
      cost: 10,
      sellPrice: 55,
      ingredients: ['Salsa, Cebolinha, Pimentão'],
    },
    {
      name: 'Porco a Moranga',
      cost: 15,
      sellPrice: 25,
      ingredients: ['Salsa, Cebolinha, Pimentão'],
    },
    {
      name: 'Hamburguer Vegano',
      cost: 35,
      sellPrice: 25,
      ingredients: ['Salsa, Cebolinha, Pimentão'],
    },
  ];

  const restaurant = new RestaurantManager(initialProducts);

  test('should be able to see all added products', () => {
    const exec = restaurant.seeAllProducts;

    expect(exec).toStrictEqual([
      {
        name: 'Lasanha',
        cost: 10,
        sellPrice: 55,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
      {
        name: 'Porco a Moranga',
        cost: 15,
        sellPrice: 25,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
      {
        name: 'Hamburguer Vegano',
        cost: 35,
        sellPrice: 25,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
    ]);
  });
  test('should be able to add products', () => {
    const exec = restaurant.addNewProduct({
      name: 'Pizza Parmegiana',
      cost: 10,
      sellPrice: 35,
      ingredients: ['Salsa, Cebolinha, Pimentão'],
    });

    expect(restaurant.seeAllProducts).toStrictEqual([
      {
        name: 'Lasanha',
        cost: 10,
        sellPrice: 55,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
      {
        name: 'Porco a Moranga',
        cost: 15,
        sellPrice: 25,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
      {
        name: 'Hamburguer Vegano',
        cost: 35,
        sellPrice: 25,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
      {
        name: 'Pizza Parmegiana',
        cost: 10,
        sellPrice: 35,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
      },
    ]);
  });

  test('should be able see searched product sell price', () => {
    const exec = restaurant.seePriceOfProductInList('Lasanha');

    expect(exec).toStrictEqual(55);
  });
  test('should be able see sold products', () => {
    const exec = restaurant.seeAllSoldProducts;

    restaurant.sellProducts('Lasanha');

    expect(exec).toStrictEqual([
      {
        name: 'Lasanha',
        cost: 10,
        sellPrice: 55,
        ingredients: ['Salsa, Cebolinha, Pimentão'],
        sellTime: Date.now(),
      },
    ]);
  });

  test('should be able see profit amount', () => {
    const exec = restaurant.restaurantProfit;

    expect(exec).toStrictEqual(-15);
  });
});
