import {
  CalculateSalesPriceType,
  Clothes,
  ClothesBasedDiscount,
} from './ex7.types';

const calculateSalesPrice: CalculateSalesPriceType = (Products) => {
  const addProductsSalesPrice = Products.map((product) => {
    switch (product.collection) {
      case Clothes.BANHO:
        return {
          ...product,
          salesPrice: Math.floor(
            product.price - product.price * ClothesBasedDiscount.BANHO
          ),
          discount: `${Math.floor(ClothesBasedDiscount.BANHO * 100)} % OFF`,
        };
      case Clothes.VERAO:
        return {
          ...product,
          salesPrice: Math.floor(
            product.price - product.price * ClothesBasedDiscount.VERAO
          ),
          discount: `${Math.floor(ClothesBasedDiscount.VERAO * 100)} % OFF`,
        };
      case Clothes.INTIMAS:
        return {
          ...product,
          salesPrice: Math.floor(
            product.price - product.price * ClothesBasedDiscount.INTIMAS
          ),
          discount: `${Math.floor(ClothesBasedDiscount.INTIMAS * 100)} % OFF`,
        };
      case Clothes.INVERNO:
        return {
          ...product,
          salesPrice: Math.floor(
            product.price - product.price * ClothesBasedDiscount.INVERNO
          ),
          discount: `${Math.floor(ClothesBasedDiscount.INVERNO * 100)} % OFF`,
        };

      default:
        return {
          ...product,
          salesPrice: product.price * 0,
          discount: `0%`,
        };
    }
  });

  return addProductsSalesPrice;
};

export default calculateSalesPrice;
